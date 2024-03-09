
const axios = require('axios');

class RestClient {
    constructor(baseURL) {
        this.client = axios.create({
            baseURL: baseURL,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    async read(url) {
        try {
            const response = await this.client.get(url);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

    async create(url, data) {
        try {
            const response = await this.client.post(url, data);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

    async update(url, data) {
        try {
            const response = await this.client.put(url, data);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

    async delete(url) {
        try {
            const response = await this.client.delete(url);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
}

module.exports = RestClient;
