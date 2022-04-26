// Requerimiento 1: Se necesita un modelo `User` para guardar la información de un usuario de nuestra app:
// `id`, `username`, `name`, `bio`, `dateCreated` y `lastUpdated`. 

class user{
      constructor(id, username, name, bio, dataCreated, lastUpdated){
            this.id = id
            this.username = username
            this.name = name
            this.bio = bio
            this.dataCreated = new Date()
            this.lastUpdated = new Date()
      }
}

module.exports = user