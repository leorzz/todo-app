const port = 3003
const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')

// Add a middlewares
// Sempre que a requisição for do tipo urlencoded (submisão de formularios)
// habilitando o modo extend para suportar mais tipos de dados do que o padrão
server.use(bodyParser.urlencoded({ extended: true }))

// aplicado nas reqs com tipo de dados json
server.use(bodyParser.json())

server.use(allowCors)

server.listen(port, function() {
    console.log(`BACKEND is running on port ${port}`)
})

module.exports = server