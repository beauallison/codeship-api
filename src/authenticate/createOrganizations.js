module.exports = orgs =>
  (orgs ? orgs.reduce((map, { name, ...args }) => map.set(name, args), new Map()) : new Map());
