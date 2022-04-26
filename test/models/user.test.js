// Sprint 1
// Requerimiento 1: Se necesita un modelo `User` para guardar la información de un usuario de nuestra app:`id`, `username`, `name`, `bio`, `dateCreated` y `lastUpdated`. 
// Requerimiento 2: Las propiedades `dateCreated` y `lastUpdated` deberán ser datos de tipo fecha que guarden el momento en que se instancie un nuevo objeto de la clase `User`.
// Requerimiento 3: Cada objeto tipo user necesita los siguietes getters: `getUsername`, `getBio`, `getDateCreated`, `getLastUpdated`.
// Requerimiento 4: Cada objeto necesita los siguientes setters: `setUsername` y `setBio`, para actualizar dichas propiedades.

const User = require('./../../app/models/user')

describe('Unit test for user class', () => {
      test('1) Create an user object', () => {
            const user = new User( 1, 'elchicogamer', 'Cristian', 'Bio')
            
            expect(user.id).toBe(1)
            expect(user.username).toBe('elchicogamer')
            expect(user.name).toBe('Cristian')
            expect(user.bio).toBe('Bio')
            expect(user.dateCreated).not.toBeUndefined()
            expect(user.lastUpdated).not.toBeUndefined()
      })

      test('2) Add getters', () => {
            const user = new User( 1, 'elchicogamer', 'Cristian', 'Bio')
            
            expect(user.getUsername).toBe('elchicogamer')
            expect(user.getBio).toBe('Bio')
            expect(user.getDateCreated).not.toBeUndefined()
            expect(user.lastUpdated).not.toBeUndefined()
      })

      test('3) Add setters', () => {
            const user = new User( 1, 'elchicogamer', 'Cristian', 'Bio')
            
            user.setUserName = 'elchicogamer117'
            expect(user.username).toBe('elchicogamer117')

            user.setBio = 'New bio'
            expect(user.bio).toBe('New bio')
      })
})
