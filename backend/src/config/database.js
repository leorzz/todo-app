const mongoose = require('mongoose')

// A API de Promisse do mongoose esta deprecated 
// então podemos utilizar a API do node
// neste caso é apenas para tirar a msg de advertencia
mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb://localhost/todo')
