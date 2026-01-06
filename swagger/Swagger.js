const swaggerjsDoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express")

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Foydalanuvchilar API',
            version: '1.0.0',
            description: "Foydalanuvchilar bilan ishlovchi CRUD API"
        },
        servers: [{
            url: 'http://localhost:3000'
        },]
    },
    apis: ['./routes/*.js']
}

const swaggerSpec = swaggerjsDoc(swaggerOptions)

module.exports = { swaggerUi, swaggerSpec }