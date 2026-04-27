const axios = require('axios');

const api = axios.create({
  baseURL: 'https://reqres.in/api',
  timeout: 5000,
});

module.exports = api;
