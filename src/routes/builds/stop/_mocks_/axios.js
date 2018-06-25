const status202 = require('../__fixtures__/status202');

module.exports = jest.fn()
  .mockImplementationOnce(async () => (status202));
