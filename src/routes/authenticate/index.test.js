const authenticate = require('./');

jest.mock('axios', () => require('./_mocks_/axios')); // eslint-disable-line global-require

describe('routes/authenticate()', () => {
  it('should authenticate with valid credentials', async () => {
    const creds = {
      username: 'test',
      password: 'test',
    };

    const data = await authenticate(creds);
    expect(data).toMatchSnapshot();
  });
});
