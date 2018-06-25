const build = require('./');

jest.mock('axios', () => require('./_mocks_/axios')); // eslint-disable-line global-require

describe('routes/builds/restart()', () => {
  it('should restart a build', async () => {
    const res = await build({
      token: 'xxxx',
      organization: '642f3be8-0503-4cb3-a5ca-49343e70cd2d',
      project: '7b3596c0-560e-0135-5b18-000000000000',
      build: '20b4a690-6a03-0135-d6ec-000000000000',
    });

    expect(res).toBeNull();
  });
});
