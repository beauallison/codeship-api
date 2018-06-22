const status200 = require('../__fixtures__/status200');

module.exports = jest.fn()
  .mockImplementationOnce(async () => (status200));
