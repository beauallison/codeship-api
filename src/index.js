const _ = require('lodash');
const { authenticate, projects, builds } = require('./routes');

module.exports = class Codeship {
  constructor(credentials) {
    this.credentials = credentials;
  }

  async updateBuilds() {
    await this.populateProjects();
    await this.populateBuilds();
  }

  async authenticate() {
    const res = await authenticate(this.credentials);
    Object.assign(this, res);
  }

  async refresh() {
    try {
      return await this.updateBuilds();
    } catch (err) {
      if (this.token && !this.reauthenciated) {
        this.reauthenciated = true;
        await this.authenticate();
        return this.refresh();
      }
      throw err;
    }
  }

  async forEachProject(fn) {
    return Promise.all(_.map(this.organizations, async (organization, organizationName) =>
      fn(organizationName, organization)));
  }

  populateProjects() {
    const fn = async (organizationName, { uuid }) => {
      const results = await projects.list({ token: this.token, organization: uuid });
      _.set(this.organizations, `${organizationName}.projects`, results);
    };

    return this.forEachProject(fn);
  }

  populateBuilds() {
    const fn = async (organizationName, organization) =>
      Promise.all(organization.projects.map(async (project, key) => {
        const opts = { token: this.token, organization: organization.uuid, project: project.uuid };
        const results = await builds.list(opts);
        this.organizations[organizationName].projects[key].builds = results;
      }));

    return this.forEachProject(fn);
  }

  buildStop(args) {
    return builds.stop({ token: this.token, ...args });
  }

  buildRestart(args) {
    return builds.restart({ token: this.token, ...args });
  }
};
