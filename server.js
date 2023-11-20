const http = require('http')
let count=0
let server = http.createServer((req,res)=>{
    count++

    if (req.url=='/home'){
        res.write('<html>')
        res.write('<head><title>My First Page</title></head>')
        res.write('<body><h2>Welcome home</h2></body>')
        res.write('</html>')
        res.end()
    }
    else if (req.url=='/about'){
        res.write('<html>')
        res.write('<head><title>My First Page</title></head>')
        res.write('<body><h2>Welcome to About us page</h2></body>')
        res.write('</html>')
        res.end()
    }
    else if (req.url=='/node'){
        res.write('<html>')
        res.write('<head><title>My First Page</title></head>')
        res.write('<body><h2>Welcome to Node project page</h2></body>')
        res.write('</html>')
        res.end()
    }

})
server.listen(4000)
