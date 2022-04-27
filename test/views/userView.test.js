// Requerimientos:
// 1. Valida que al enviar en el `payload` un valor `null`, obtenga un objeto con la llave `error` y el valor indique `payload no existe`.

const userView = require('./../../app/views/userView')

describe('Test for userView', () => {
      test('1) Return an error object when try to create a new user with an null payload', () => { 
            const payload = null
            const result = userView.createUser(payload)
            expect(result.error).toMatch(/payload no existe/)
      })
})