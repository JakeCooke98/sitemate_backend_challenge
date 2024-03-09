
const axios = require('axios');

class RestClient {

    // Adding constructor for AXIOS client and setting variables
    constructor(baseURL) {
        this.client = axios.create({
            baseURL: baseURL,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    // To read any posts that have been sent on the API
    async read(url) {
        try {
            const response = await this.client.get(url);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

    // To create any posts on the API
    async create(url, data) {
        try {
            const response = await this.client.post(url, data);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

    // To update any existing posts on the API
    async update(url, data) {
        try {
            const response = await this.client.put(url, data);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

    // To delete a post on the API
    async delete(url) {
        try {
            const response = await this.client.delete(url);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

    // Utilized try, catch blocks on each method so that if any of our methods fail we will get a helpful error message.
}

module.exports = RestClient;
