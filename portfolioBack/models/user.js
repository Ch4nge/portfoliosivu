const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username: String,
  passwordHash: String
})

userSchema.statics.format = (user) => {
  return {
    id: user.id,
    username: user.username
  }
}

const User = mongoose.model('User', userSchema)
module.exports = User
