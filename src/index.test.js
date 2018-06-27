const Codeship = require('./index');

describe('Codeship', () => {
  const codeship = new Codeship({ username: 'test', password: 'test' });

  it('should authenticate', async () => {
    await codeship.authenticate();
    expect(codeship).toMatchSnapshot();
  });

  it('should refresh', async () => {
    await codeship.refresh();
    expect(codeship).toMatchSnapshot();
  });

  const build = {
    organization: '721cea10-b695-0134-5b94-000000000000',
    project: '7b3596c0-560e-0135-5b18-000000000000',
    build: '20b4a690-6a03-0135-d6ec-000000000000',
  };

  it('should stop build', async () => {
    const result = await codeship.buildStop(build);
    expect(result).toBeNull();
  });

  it('should restart build', async () => {
    const result = await codeship.buildRestart(build);
    expect(result).toBeNull();
  });
});
