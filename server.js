const http = require('http')
const fs = require('fs')
let count=0
let server = http.createServer((req,res)=>{
    

    if (req.url=='/'){
        res.write('<html>')
        res.write('<head><title>My First Page</title></head>')
        res.write("<body><h2>Welcome home</h2><form action='/message' method='POST'><input type='text' name='msg'><button type='submit'>Send</button></form></body>")
        res.write('</html>')
        return res.end()
    }
    // else if (req.url=='/about'){
    //     res.write('<html>')
    //     res.write('<head><title>My First Page</title></head>')
    //     res.write('<body><h2>Welcome to About us page</h2></body>')
    //     res.write('</html>')
    //     res.end()
    // }
    // else if (req.url=='/node'){
    //     res.write('<html>')
    //     res.write('<head><title>My First Page</title></head>')
    //     res.write('<body><h2>Welcome to Node project page</h2></body>')
    //     res.write('</html>')
    //     res.end()
    // }

    if(req.url==='/message' && req.method==='POST'){
        const body = []
        req.on('data',(chunk)=>{
            console.log(chunk)
            body.push(chunk)
        })
        req.on('end',()=>{
            const parsedBody = Buffer.concat(body).toString()
            console.log(parsedBody)
            let message='';
            parsedBody.split('=')[1].split('+').forEach((ele)=>{
                message+=(ele+' ')
                
            });
            message=message.trim()

            console.log(message)
            fs.writeFile('message.txt',message+' ' +count, err=>{
                count++
                res.statusCode=302
                res.setHeader('Location','/')
                return res.end()
            })
        })
        
        
    }
    // console.log(`reqURL ${req.toArray},resURL ${res}`)
})
server.listen(4000)
