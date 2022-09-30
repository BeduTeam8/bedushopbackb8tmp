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
const routes = require('./routes/index');




const app = express();
app.use(express.json());
app.use('/',routes);

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

const tableName = 'Users';
const sequenceColumn = 'id';

module.exports = {
    up: (queryInterface) => queryInterface.sequelize.transaction(async (transaction) => {
        // Get current highest value from the table
        const [[{ max }]] = await queryInterface.sequelize.query(`SELECT MAX("${sequenceColumn}") AS max FROM public."${tableName}";`, { transaction });
        console.log("Idś usados:", max);
        // Set the autoincrement current value to highest value + 1
        await queryInterface.sequelize.query(`CREATE SEQUENCE public."${tableName}_${sequenceColumn}_seq" RESTART WITH ${max + 1};`, { transaction });
    }),
    down: () => Promise.resolve(),
};