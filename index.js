import express from "express"
import usuariosRoutes from "./routes/usuario.route.js"

import swaggerUi from 'swagger-ui-express'
import swaggerjsdoc from 'swagger-jsdoc'




const PORT = 8080
const app = express()



app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/", usuariosRoutes)

const options = {
    definition: {
        openapi: '3.0.0',
        servers:[
            {
                url: "http://localhost:8080",
            },
        ],
    },
    apis: ['./routes/*.js'],
}

const spacs = swaggerjsdoc(options)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(spacs));



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

app.on("error", (err) => {
    console.log("Ha ocurrido un error en el servidor: ", err)
})

// Serve Swagger UI at `/api-docs`


console.log('Swagger Docs available at http://localhost:8080/api-docs');