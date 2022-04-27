const userService = require('./../services/userService')

class userView{
      static createUser(payload){
            if (payload == null){
                  return {error: 'El payload no existe'}
            }
            else{
                  userService.create(payload) //*! <- funciona para la prueba pero no para un correcto funcionamiento, por eso es importante hacer fallar la prueba a proposito
            }
      }
}

module.exports = userView