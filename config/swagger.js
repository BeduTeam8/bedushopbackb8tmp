// swagger definition
const swaggerOptions = {
	definition: {
		info: {
			title: "BeduShop API",
			description: "Welcome to BEDU Shop Back Team B8 API! test",
			servers: ["http://localhost:5000/v1"],
		},
		openapi: "3.0.3",
		components: {
			securitySchemes: {
				bearerAuth: {
					type: "http",
					scheme: "bearer",
					bearerFormat: "JWT",
					value: "Bearer <JWT token here>",
				},
			},
		},
	},
	apis: ["./routes/*.js"],
};

// export swaggerOptions
module.exports = swaggerOptions;
