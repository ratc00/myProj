const api = require('./api');

const routes = [
  {
    method: 'GET',
    path: '/api',
    handler: (request, h) => {
      return {success: true};
    }
  },
  {
    method: 'GET',
    path: '/api/post',
    options: api.post.post
  },
];

module.exports = routes;