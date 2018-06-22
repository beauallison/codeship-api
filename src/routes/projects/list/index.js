const axios = require('axios');
const API = require('../../API');

module.exports = async ({ token, organization }) => {
  const { data } = await axios({
    url: `${API}/organizations/${organization}/projects/`,
    headers: { Authorization: token },
    method: 'GET',
  });

  return data.projects;
};

