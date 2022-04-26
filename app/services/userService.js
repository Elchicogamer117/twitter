const user = require('./../models/user')

class userService{
      static create(id, username, name){
            return new user(id, username, name, 'bio default')
      }
      static getinfo(user){
            return [user.id, user.username, user.name, 'bio default']
      }
      static updateUserUsername(user, newUserName){
            user.setUserName = newUserName
      }
      static getAllUsernames(users){
            //return [users[0].username, users[1].username, users[2].username] <- funciona, pero no de manera general, la funcion 'map' nos simplifica el hacer una subfuncion for
            return users.map((user) => user.username)
      }

}

module.exports = userService