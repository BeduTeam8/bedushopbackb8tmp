const { Sequelize } = require('sequelize');

const dbconnect = require('./env.js');

const sequelize= new Sequelize(
    dbconnect.dbname,
    dbconnect.username,
    dbconnect.password,
        {
        host:dbconnect.hostname,
        dialect:'postgres',
        native:true,
        ssl:true
        }
);

try {
    sequelize.authenticate();
    console.log('La conexion fue exitosa');
  } catch (error) {
    console.error('Hubo un problema con la conexión', error);
  }