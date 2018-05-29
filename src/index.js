const authenticate = require('./authenticate');

module.exports = class Codeship {
  constructor(credentials) {
    this.credentials = credentials;
  }

  async authenticate() {
    const res = await authenticate(this.credentials);
    Object.assign(this, res);
  }
};
