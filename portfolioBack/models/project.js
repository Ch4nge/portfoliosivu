const mongoose = require('mongoose')

const Project = mongoose.model('Project', {
  content: String,
  title: String,
  imageSrc: String,
  moreInfo: String
})

module.exports = Project
