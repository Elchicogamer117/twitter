//Requerimiento 1: Crear un nuevo usuario con lo ya definido en el sprint anterior, usando una nueva clase llamada `UserService`.
// Criterios de aceptación:
// 1. Esta clase deberá tener un método `create` que se pueda usar sin instanciar (static method), y que reciba solo los parámetros del `id`, `username` y `name`. 
// 2. El valor de `bio` deberá ser por default para todos los `user` creados. 
//Requerimiento 2: Agregar un nuevo método estático en `UserService` llamado `getInfo` que al recibir un objeto de la clase `User`, me regrese una lista con todos los valores de los atributos de dicho objeto.

const userService = require('./../../app/services/userService')

describe('Test for UserService', () =>{
      test('1) Create a new user using the userService', () => { 

            const user = userService.create(2, 'cris18002011', 'Cristian') 

            expect(user.username).toBe('cris18002011')
            expect(user.name).toBe('Cristian')
            expect(user.id).toBe(2)
            expect(user.bio).not.toBeUndefined()
      })

      test('2) Get all user data in a list', () => { 

            const user = userService.create(2, 'cris18002011', 'Cristian')
            const userInfoInList = userService.getinfo(user) 

            expect(userInfoInList[0]).toBe(2)
            expect(userInfoInList[1]).toBe('cris18002011')
            expect(userInfoInList[2]).toBe('Cristian')
            expect(userInfoInList[3]).toBe('bio default')
      })
})