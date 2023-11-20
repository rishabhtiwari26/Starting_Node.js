const http = require('http')
let count=0
let server = http.createServer((req,res)=>{
    count++
    console.log('rishabh',count,req)
    
})
server.listen(4000)
