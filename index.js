import express from 'express'
import database from './config/database.js'
import routerC from './router/cliente.js'

const app = express()
app.use(express.json())

app.use('/api/v1/cliente', routerC)

database.db
    .sync({ force: true })
    .then((_) => {
        app.listen(3000, () => {
            console.log("Servidor rodando na porta 3000")
        })
    })
    .catch((e) => {
        console.log(e)
    })
