'use strict'

const Hapi = require('@hapi/hapi');
const Boom = require('boom');
const routes   = require('./routes');
const path = require('path');
const inert = require('@hapi/inert');


const init = async () => {

    const server = Hapi.Server({
        port: process.env.PORT || 1234,
        host: process.env.HOST || 'localhost',
        routes: { cors: true }
    });

    routes.forEach((route)=>{
        server.route(route);
      });

    await server.start();
    console.log(`Server started on: ${server.info.uri}`);

}

process.on('unhandledRejection', (err) => {
    console.log(err);
    Boom.badImplementation(err);
    process.exit(1);
})

init();