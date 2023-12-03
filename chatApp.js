const express=require('express')
const fs=require('fs')
const bodyParser=require('body-parser')

const chatApp=express()

let username=''
let message=''

chatApp.use(bodyParser.urlencoded())

chatApp.get('/login',(req,res,next)=>{

    res.send(`<form action='/login' onsubmit='localStorage.setItem("username", document.getElementById("username").value)' method='POST'><input type = 'text' id ='username' placeholder='login'><button type ='submit'>Submit!</button></form>`)
})
chatApp.post('/login',(req,res,next)=>{
    username=req.body.username
    res.redirect('/')

})
chatApp.get('/',(req,res,next)=>{
    let readChat=''
    console.log(readChat)

    readChat=fs.readFileSync('chat.txt')
    res.send(`<p>${readChat}</p><form action='/chat' 
    onsubmit="document.getElementById('hUserName').value=localStorage.getItem('username')" method='POST'>
    <input type = 'text' name ='chat' placeholder='message'>
    <input type='hidden' id='hUserName' name = 'hUserName'>
    <button type ='submit'>Submit!</button></form>`)
    })
chatApp.post('/chat',(req,res,next)=>{
    message=`${req.body.hUserName}:${req.body.chat}`
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