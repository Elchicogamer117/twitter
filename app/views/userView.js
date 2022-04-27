const userService = require('./../services/userService')

class userView{
      static createUser(payload){
            if (payload == null){
                  return {error: 'El payload no existe'}
            }
            // else{
            //       userService.create(payload) //*! <- funciona para la prueba pero no para un correcto funcionamiento, por eso es importante hacer fallar la prueba a proposito
            // }
            else if(typeof payload.username === 'string' && typeof payload.name === 'string' && typeof payload.id === 'number'){ //* <- con esta sentencia se cumplen los requerimientos 2 y 3
                  return userService.create(payload.id, payload.username, payload.name)
            } else{
                  return {error: "Las propiedades del payload necesitan tener un valor válido"}
            }
      }
}

module.exports = userView