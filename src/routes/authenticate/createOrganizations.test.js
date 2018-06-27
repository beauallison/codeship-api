const createOrganizations = require('./createOrganizations');
const status200 = require('../__fixtures__/authenticate-status200.json');

describe('routes/authenticate/createOrganizations()', () => {
  it('should create organizations', () =>
    expect(createOrganizations(status200.response.organizations)).toMatchSnapshot());

  it('should return an empty Map on missing data', () =>
    expect(createOrganizations()).toMatchSnapshot());
});
