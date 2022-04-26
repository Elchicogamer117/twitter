// Requerimiento 1: Se necesita un modelo `User` para guardar la información de un usuario de nuestra app:
// `id`, `username`, `name`, `bio`, `dateCreated` y `lastUpdated`. 
//const { describe } = require('yargs')
const User = require('./../../app/models/user')

describe('Unit test for user class', () => {
      test('1) Create an user object', () => {
            const user = new User( 1, 'elchicogamer', 'Cristian', 'Bio', 'dataCreated', 'lastUpdate')
            
            expect(user.id).toBe(1)
            expect(user.username).toBe('elchicogamer')
            expect(user.name).toBe('Cristian')
            expect(user.bio).toBe('Bio')
            expect(user.dataCreated).toBe('dataCreated')
            expect(user.lastUpdated).toBe('lastUpdate')
      })

})