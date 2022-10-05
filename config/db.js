const { Sequelize, DataTypes, Op } = require('sequelize');

if(process.env.NODE_ENV=="staging"){
    var sequelize= new Sequelize(
        process.env.DBNAME,
        process.env.USERNAME,
        process.env.PASSWORD,
            {
            host:process.env.HOSTNAME,
            dialect:process.env.DIALECT,
            native:true,
            ssl:true,
        });
    }else{
    var sequelize= new Sequelize(
        process.env.DBNAME,
        process.env.USERNAME,
        process.env.PASSWORD,
            {
            host:process.env.HOSTNAME,
            dialect:process.env.DIALECT,
            dialectOptions: {
                    ssl: {
                        require:true,
                        rejectUnauthorized:false // <<<<<<< YOU NEED THIS
                    }
                },
            }
        );
    }    

module.exports = sequelize;