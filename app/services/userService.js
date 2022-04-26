const user = require('./../models/user')

class userService{
      static create(id, username, name){
            return new user(id, username, name, 'bio default')
      }
}

module.exports = userService