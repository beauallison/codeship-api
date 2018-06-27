const axios = require('axios');
const moxios = require('moxios'); // eslint-disable-line

const { authenticate, builds, projects } = require('../__fixtures__');

moxios.stubRequest(/auth/, authenticate.status200);
moxios.stubRequest(/builds$/, builds.list.status200);
moxios.stubRequest(/stop/, builds.stop.status202);
moxios.stubRequest(/restart/, builds.restart.status202);
moxios.stubRequest(/projects/, projects.list.status200);

moxios.install(axios);

module.exports = axios;
