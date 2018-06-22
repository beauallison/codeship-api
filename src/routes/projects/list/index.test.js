const list = require('./');

jest.mock('axios', () => require('./_mocks_/axios')); // eslint-disable-line global-require

describe('routes/projects/list()', () => {
  it('should return a list of projects', async () => {
    const projects = await list({ token: 'xxxx', organization: '642f3be8-0503-4cb3-a5ca-49343e70cd2d' });
    expect(projects).toMatchSnapshot();
  });
});
