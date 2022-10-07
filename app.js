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

// swagger js docs and swagger ui express for api documentation
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// import swagger definition from swagger.js
const swaggerOptions = require("./config/swagger");

// initialize swagger-jsdoc
const swaggerDocs = swaggerJsDoc(swaggerOptions);

// use swagger-Ui-express for app documentation endpoint

app.use(
	"/api-docs",
	swaggerUi.serve,
	swaggerUi.setup(swaggerDocs, { explorer: true })
);

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
