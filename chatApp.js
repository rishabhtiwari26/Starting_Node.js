const express=require('express')
const fs=require('fs')
const bodyParser=require('body-parser')

const chatApp=express()

let username=''
let message=''

chatApp.use(bodyParser.urlencoded())

chatApp.get('/login',(req,res,next)=>{

    res.send("<form action='/login' method='POST'><input type = 'text' name ='username' placeholder='login'><button type ='submit'>Submit!</button></form>")
})
chatApp.post('/login',(req,res,next)=>{
    username=req.body.username
    res.redirect('/')

})
chatApp.get('/',(req,res,next)=>{
    let readChat=''
    console.log(readChat)

    readChat=fs.readFileSync('chat.txt')
    res.send(`<p>${readChat}</p><form action='/chat' method='POST'><input type = 'text' name ='chat' placeholder='message'><button type ='submit'>Submit!</button></form>`)
    })
chatApp.post('/chat',(req,res,next)=>{
    message=`${username}:${req.body.chat}`
    fs.appendFile('chat.txt',message+' ',(err)=>{
        if (err) {
            console.error(err);
            res.status(500).send('Error writing to chat file');
        } else {
            res.redirect('/');
        }
})
}) 
    
chatApp.listen(4000)