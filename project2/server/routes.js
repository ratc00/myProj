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
    path: '/post',
    handler: (request, h) => {
        return h.file('post.js')
      }
  },
  {
    method: 'POST',
    path: '/login',
    handler: (request, h) => {
        console.log("was a username");
        console.log("was a password");
        return "hi";
      }
  },
];

module.exports = routes;