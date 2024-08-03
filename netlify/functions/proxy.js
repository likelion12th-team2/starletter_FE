// netlify/functions/proxy.js
const axios = require("axios");

exports.handler = async function (event, context) {
  const { path, queryStringParameters } = event;
  const apiUrl = `http://13.209.13.101${path.replace(
    "/.netlify/functions/proxy",
    ""
  )}`;
  const params = new URLSearchParams(queryStringParameters).toString();
  const url = `${apiUrl}?${params}`;

  try {
    const response = await axios.get(url);
    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    return {
      statusCode: error.response?.status || 500,
      body: JSON.stringify({ message: error.message }),
    };
  }
};
