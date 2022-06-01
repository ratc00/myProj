const Sequelize = require('sequelize');
const config = require('./config.js');

const { host, port, user, password, database } = config.database;

const sequelize = new Sequelize('my_project', 'root', '12345a', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
}
);

sequelize.authenticate().then(() => {
    console.log("Connected to db");
}).catch(() => {
    console.log("didnt connect");
})

