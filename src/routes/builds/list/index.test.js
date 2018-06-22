const list = require('./');

jest.mock('axios', () => require('./_mocks_/axios')); // eslint-disable-line global-require

describe('routes/builds/list()', () => {
  it('should return a list of builds', async () => {
    const builds = await list({
      token: 'xxxx',
      organization: '642f3be8-0503-4cb3-a5ca-49343e70cd2d',
      project: '7b3596c0-560e-0135-5b18-000000000000',
    });
    expect(builds).toMatchSnapshot();
  });
});
