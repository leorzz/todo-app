const server = require('./config/server')
require('./config/database')

// chama a função que foi exportada no server.js passando o paramentro server
require('./config/routes')(server)