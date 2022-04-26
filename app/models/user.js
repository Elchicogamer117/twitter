// Requerimiento 1: Se necesita un modelo `User` para guardar la información de un usuario de nuestra app:
// `id`, `username`, `name`, `bio`, `dateCreated` y `lastUpdated`. 

class user{
      constructor(id, username, name, bio, dateCreated, lastUpdated){
            this.id = id
            this.username = username
            this.name = name
            this.bio = bio
            this.dateCreated = new Date()
            this.lastUpdated = new Date()
      }
      get getUsername(){
            return this.username
      }

      get getBio(){
            return this.bio
      }
      get getDateCreated(){
            return this.dateCreated
      }
      get getLastUpdated(){
            return this.lastUpdated
      }

      set setUserName(newUserName){
            this.username = newUserName
      }

      set setBio(NewBio){
            this.bio = NewBio
      }
}

module.exports = user