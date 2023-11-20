console.log('a');
console.log('b');

let a= new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('c')
    }, 3000)
})
a.then((msg)=>{
    console.log(msg)
    let b= new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('d')
        }, 0)
    })
    b.then((msg)=>{
        console.log(msg)
        console.log('e')})
})


