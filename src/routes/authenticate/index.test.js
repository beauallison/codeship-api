const authenticate = require('./');

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
