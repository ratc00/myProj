'use strict'
require('dotenv').config();

const Hapi = require('@hapi/hapi');
const Boom = require('boom');
const routes = require('./routes');
const path = require('path');
const inert = require('@hapi/inert');
const MySQL = require('mysql');

const init = async () => {

    const server = Hapi.Server({
        port: 1234,
        host: 'localhost',
        routes: {
            cors: true,
            files: {
                relativeTo: path.join(__dirname, 'api')
            }
        }
    });

    await server.register([{
        plugin: inert
    }])

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