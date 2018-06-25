const axios = require('axios');
const API = require('../../API');

module.exports = async ({
  token, organization, project, build,
}) => {
  const { data } = await axios({
    url: `${API}/organizations/${organization}/projects/${project}/builds/${build}/restart`,
    headers: { Authorization: token },
    method: 'POST',
    data: {},
  });

  return data;
};
