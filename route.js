const fs = require('fs')

let count=1
const requestHandler = (req,res)=>{
    let htmlContent=''
    fs.readFile('message.txt', (err, data) => { 
        htmlContent=htmlContent+data
        console.log(htmlContent)
        if (req.url=='/'){
            res.write('<html>')
            res.write('<head><title>My First Page</title></head>')
            res.write(`<body><h2>${htmlContent}</h2><form action='/message' method='POST'><input type='text' name='msg'><button type='submit'>Send</button></form></body>`)
            res.write('</html>')
            return res.end()
        }
    })
    
        
        if(req.url==='/message' && req.method==='POST'){
            const body = []
            req.on('data',(chunk)=>{
 
                body.push(chunk)
            })
            req.on('end',()=>{
                const parsedBody = Buffer.concat(body).toString()

                let message='';
                parsedBody.split('=')[1].split('+').forEach((ele)=>{
                    message+=(ele+' ')
                    
                });
                message=message.trim()
                fs.writeFile('message.txt',count+' '+message,err=>{
                    count++
                    res.statusCode=302
                    res.setHeader('Location','/')
                    return res.end()
                })
            })
            
            
        }
}
exports.handle = requestHandler