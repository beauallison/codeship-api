const _ = require('lodash');

module.exports = orgs =>
  (orgs ? orgs.reduce((res, obj) => _.set(res, obj.name, _.omit(obj, 'name')), {}) : {});
