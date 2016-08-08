let express = require('express')
let App = express()
let http = require('http').Server(App)
let io = require('socket.io')(http)
let path = require('path')
let Config = require('./config')

let visitor = {}

App.set('port', (process.env.PORT || 5000))

App.use(express.static(path.join(__dirname + 'public/')))
