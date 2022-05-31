'use strict';

const Hapi = require('@hapi/hapi');
const path = require('path');

const init = async () => {
    const server = Hapi.Server({
        host: 'localhost',
        port: 8180,
        routes: {
            files: {
                relativeTo: path.join(__dirname, 'static')
            }
        }
    });

    server.route([{
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return './project/src/components/HelloWorld.vue';
        }
    },
    // {
    //     method: 'GET',
    //     path: '/(any*}',
    //     handler: (request, h) => {
    //         return "<h1>404 page not found.</h1>";
    //     }
    // }
]);

    await server.start();
    console.log(`Server started on: ${server.info.uri}`);
}

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
})

init();