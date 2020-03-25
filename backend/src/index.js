const express = require('express')
const cors = require('cors')

//importar as rotas do arquivo routes.js
const routes = require('./routes')

const app = express()

app.use(cors())
app.use(express.json())

// para importar as rotas, deve ser abaixo da linha app.use(express.json())
app.use(routes)

app.listen(3333)