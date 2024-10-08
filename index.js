import express from "express"
import usuariosRoutes from "./routes/usuario.route.js"

const PORT = 8080
const app = express()



app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/", usuariosRoutes)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

app.on("error", (err) => {
    console.log("Ha ocurrido un error en el servidor: ", err)
})