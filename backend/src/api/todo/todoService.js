const Todo = require('./todo')

Todo.methods(['get', 'post', 'put', 'delete'])

// Por padão o node restful não retorna o registro atualizado
// então é preciso forçar (primeiro parametro new: true)
// Por padrão nas alterações as validações do Schema (todo.js) não são feitas
// então é preciso forçar (segundo parametro)
// Todo.updateOptions({new: true, runValidators: true})

module.exports = Todo

 