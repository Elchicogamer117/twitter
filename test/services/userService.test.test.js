//Requerimiento 1: Crear un nuevo usuario con lo ya definido en el sprint anterior, usando una nueva clase llamada `UserService`.
// Criterios de aceptación:
// 1. Esta clase deberá tener un método `create` que se pueda usar sin instanciar (static method), y que reciba solo los parámetros del `id`, `username` y `name`. 
// 2. El valor de `bio` deberá ser por default para todos los `user` creados. 

const userService = require('./../../app/services/userService')

describe('Test for UserService', () =>{
      test('1) Create a new user using the userService', () => { 

            const user = userService.create(2, 'cris18002011', 'Cristian') 

            expect(user.username).toBe('cris18002011')
            expect(user.name).toBe('Cristian')
            expect(user.id).toBe(2)
            expect(user.bio).not.toBeUndefined()
      })
})