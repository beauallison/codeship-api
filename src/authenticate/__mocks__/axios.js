const status201 = require('../__fixtures__/status201');

module.exports = jest.fn()
  .mockImplementationOnce(async () => (status201));
