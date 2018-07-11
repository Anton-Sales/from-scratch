const express = require('express')
const server = express()

server.use(express.json()) // any incoming post request will have a json body

const ratRouter = require('./routes/rats')

server.use('/api/rats', ratRouter)

module.exports = server