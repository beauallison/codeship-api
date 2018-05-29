const createOrganizations = require('./createOrganizations');
const status201 = require('./__fixtures__/status201.json');

describe('authenticate/createOrganizations()', () => {
  it('should create organizations', () =>
    expect(createOrganizations(status201.data.organizations)).toMatchSnapshot());

  it('should return an empty Map on missing data', () =>
    expect(createOrganizations()).toMatchSnapshot());
});
