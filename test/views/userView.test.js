// Requerimientos:
// 1. Valida que al enviar en el `payload` un valor `null`, obtenga un objeto con la llave `error` y el valor indique `payload no existe`.
// 2. Valida que un `payload` contenga en alguna de las llaves `username`, `name`, o `id` un valor en `null`. Si hay un valor `null` regresa un objeto con la llave `error` y que indique el texto: `necesitan tener un valor válido`.
// 3. Valida que un `payload` con algunas de las propiedades necesarias regrese un objeto con la llave `error` indicando `necesitan tener un valor válido`.

const userView = require('./../../app/views/userView')

describe('Test for userView', () => {
      test('1) Return an error object when try to create a new user with an null payload', () => { 
            const payload = null
            const result = userView.createUser(payload)
            expect(result.error).toMatch(/payload no existe/) //*? comparar cadenas con expresiones regulares
      })

      test("2) Return an error object when try to create a new user with a payload with invalid properties", () => {
            const payload = {username: null, name: 12, id: "id"}
            const result = userView.createUser(payload)
            expect(result.error).toMatch(/necesitan tener un valor válido/)
      })

      test("3) Return an error object when try to create a new user with a payload with missing properties", () => {
            const payload = {username: "Username"}
            const result = userView.createUser(payload)
            expect(result.error).toMatch(/necesitan tener un valor válido/)
      })

})
