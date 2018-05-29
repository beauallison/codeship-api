const authenticate = require('./');

describe('authenticate()', () => {
  it('should authenticate with valid credentials', async () => {
    const creds = {
      username: 'test',
      password: 'test',
    };

    const data = await authenticate(creds);
    expect(data).toMatchSnapshot();
  });
});
