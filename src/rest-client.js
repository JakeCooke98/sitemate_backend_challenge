
const axios = require('axios');

class RestClient {
    constructor(baseURL) {
        this.client = axios.create({
            baseURL: baseURL,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}

module.exports = RestClient;
