const axios = require("axios");

exports.handler = async function (event, context) {
  const { path, queryStringParameters, httpMethod, body, headers } = event;
  const apiUrl = `http://13.209.13.101${path}`;
  const params = new URLSearchParams(queryStringParameters).toString();
  const url = `${apiUrl}?${params}`;

  let axiosConfig = {
    method: httpMethod.toLowerCase(),
    url: url,
    headers: {
      ...headers,
      host: undefined, // Host 헤더는 제거
    },
  };

  if (httpMethod === "POST" || httpMethod === "PUT" || httpMethod === "PATCH") {
    axiosConfig.data = body;
  }

  try {
    const response = await axios(axiosConfig);
    return {
      statusCode: response.status,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    return {
      statusCode: error.response?.status || 500,
      body: JSON.stringify({ message: error.message }),
    };
  }
};
