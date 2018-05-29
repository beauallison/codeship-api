const axios = require('axios');
const API = require('../API');
const createOrganizations = require('./createOrganizations');

module.exports = async (auth) => {
  const { data } = await axios({
    url: `${API}/auth`,
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    method: 'POST',
    auth,
  });

  return {
    organizations: createOrganizations(data.organizations),
    expiry: data.expires_at,
    token: data.access_token,
  };
};
