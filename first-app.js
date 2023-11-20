const array = ['apple','oranges','','mango','','lemon']
let newArray=array.map(f=>{
    if (f==''){
        f='empty string'    
    }
    return f
})
array.push('asc')
console.log(array,newArray)
array.push('')