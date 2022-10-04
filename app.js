//From s5
const { Sequelize, DataTypes, Op } = require("sequelize");
//Carried from dev4
const express = require("express");
const sequelize = require("./config/db");
const routes = require("./routes/index");

const app = express();
app.use(express.json());
//app.use('/',routes); Dissable S5 part2
//Session5
const auth = require("./config/auth");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(auth.optional);

// ESTE ES EL CÓDIGO A AGREGAR

//Configurando las rutas
app.use("/v1", require("./routes"));

const PORT = 3000;
app.listen(PORT, () => {
	console.log(`Server listing on PORT ${PORT}`);
});

try {
	sequelize.authenticate();
	sequelize.sync();
	console.log("Connected to DB");
} catch (error) {
	console.log("Unable to connect to DB:", error);
}
