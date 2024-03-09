
const RestClient = require('./rest-client');

// Free hosted RESTFUL API for us to test our API
const API_BASE_URL = 'https://jsonplaceholder.typicode.com';
const client = new RestClient(API_BASE_URL);

(async () => {
    // GET request example
    const posts = await client.read('/posts');
    console.log('GET /posts:', posts);

    // POST request example
    const newPost = {
        id: 1,
        title: 'New post title',
        description: 'New post body',
        userId: 1
    };
    const createdPost = await client.create('/posts', newPost);
    console.log('POST /posts:', createdPost);

    // PUT request example
    const updatedPost = {
        id: 1,
        title: 'Updated post title',
        description: 'Updated post body',
        userId: 1,
    };
    const result = await client.update(`/posts/${updatedPost.id}`, updatedPost);
    console.log(`PUT /posts/${updatedPost.id}:`, result);

    // DELETE request example
    const deletedPost = await client.delete('/posts/1');
    console.log('DELETE /posts/1:', deletedPost);
})();
