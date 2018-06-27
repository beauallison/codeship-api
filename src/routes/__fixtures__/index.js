/* eslint-disable global-require */

module.exports = {
  authenticate: {
    status200: require('./authenticate-status200.json'),
  },
  builds: {
    list: {
      status200: require('./builds-list-status200.json'),
    },
    restart: {
      status202: require('./builds-restart-status202.json'),
    },
    stop: {
      status202: require('./builds-stop-status202.json'),
    },
  },
  projects: {
    list: {
      status200: require('./projects-list-status200.json'),
    },
  },
};
