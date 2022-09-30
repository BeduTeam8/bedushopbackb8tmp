// const { Sequelize } = require('sequelize');

// const dbconnect = require('./env.js');

// const sequelize= new Sequelize(
//     dbconnect.dbname,
//     dbconnect.username,
//     dbconnect.password,
//         {
//         host:dbconnect.hostname,
//         dialect:'postgres',
//         native:true,
//         ssl:true
//         }
// );

const express = require('express');
const sequelize = require('./config/db');

const app = express();
app.use(express.json());

try {
    sequelize.authenticate();
    sequelize.sync();
    console.log('Connected to DB');
} catch (error) {
    console.log('Unable to connect to DB:', error);
}

const PORT = 3000;
app.listen(PORT, () => {
    console.log("Server listing on PORT 3000");
});