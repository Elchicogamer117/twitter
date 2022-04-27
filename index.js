const userView = require('./app/views/userView')

const payload = ['Elchicogamer', 117, 'Cristian']
const result = userView.createUser(payload)
console.log(result)