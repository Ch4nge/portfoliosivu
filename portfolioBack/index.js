const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('./utils/config')
const skillsRouter = require('./controllers/skills')

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.use('/api/skills', skillsRouter)

mongoose.connect(config.mongoUrl)
  .then( () => {
    console.log('connect to database') 
  })
  .catch( (e) => {
    console.log(e) 
  })

const PORT = config.port
const server = http.createServer(app)

server.listen(PORT, () => {
  console.log(`server running on port ${PORT}`) 
})

server.on('close', () => {
  mongoose.connection.close()
})

module.exports = {
  app, server
}