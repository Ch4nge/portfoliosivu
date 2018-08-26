const mongoose = require('mongoose')

const Skill = mongoose.model('Skill', {
  content: String,
  title: String,
  imageSrc: String,
  gitLink: String,
  gitText: String
})

module.exports = Skill
