require('dotenv').config();
const express = require('express')
const serveIndex = require('serve-index')
const morgan = require('morgan')

// Middleware Framework
const app = express()

// Logging
app.use(morgan('combined'))

// The express.static serves the file contents
// The serveIndex is this module serving the directory
app.use('/', express.static(process.env.DIRECTORY), serveIndex(process.env.DIRECTORY, { 'icons': true }))

// Up the server with specific Port and Ip
app.listen(process.env.PORT, process.env.IP)