const axios = require('axios');
const API = require('../../API');

module.exports = async ({ token, organization, project }) => {
  const { data } = await axios({
    url: `${API}/organizations/${organization}/projects/${project}/builds`,
    headers: { Authorization: token },
    method: 'GET',
  });

  return data.builds;
};
