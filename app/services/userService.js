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

}

module.exports = userService