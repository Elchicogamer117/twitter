// Requerimiento 1: Se necesita un modelo `User` para guardar la información de un usuario de nuestra app:`id`, `username`, `name`, `bio`, `dateCreated` y `lastUpdated`. 
// Requerimiento 2: Las propiedades `dateCreated` y `lastUpdated` deberán ser datos de tipo fecha que guarden el momento en que se instancie un nuevo objeto de la clase `User`.

const User = require('./../../app/models/user')

describe('Unit test for user class', () => {
      test('1) Create an user object', () => {
            const user = new User( 1, 'elchicogamer', 'Cristian', 'Bio')
            
            expect(user.id).toBe(1)
            expect(user.username).toBe('elchicogamer')
            expect(user.name).toBe('Cristian')
            expect(user.bio).toBe('Bio')
            expect(user.dataCreated).not.toBeUndefined()
            expect(user.lastUpdated).not.toBeUndefined()
      })

})
