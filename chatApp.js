const http = require('http')

const routes= require('./route')

let server = http.createServer(routes.handle)
server.listen(4000)