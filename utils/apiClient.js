const axios = require('axios');
const config = require('../config/config');

const api = axios.create({
  baseURL: config.apiURL,
  timeout: 5000,
});

module.exports = api;
