'use strict'

const Hapi = require('@hapi/hapi');
const Inert = require('@hapi/inert');
const path = require('path');

const init = async () => {

    const server = Hapi.Server({
        host: 'localhost',
        port: 1234,
        routes:{
            files: {
                relativeTo: path.join(__dirname, 'routes')
            }
        }
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return h.file('post.js');
        }
    });
    
    await server.start();
    console.log(`Server started on: ${server.info.uri}`);

}

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
})

init();