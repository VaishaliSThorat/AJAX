// program 1

let pro1 = new Promise(function(resolve, reject){
    let a = 10;
    let b = 10;
    if(a == b){
        resolve("hello")
    }
    else{
        reject('bye')
    }
})

// pro1.then(function(a){
//     console.log(a)
// },function(b){
//     console.log(b)
// })

pro1.then(function(a){
console.log(a)
})
.catch(function(b){
    console.log(b)
})

pro1.then(function(a){
    console.log(a)
    return "hello-b"
})
.then(function(b){
   console.log(b)
   console.log('b')
})
.catch(function(b){
    console.log(b)
})
.finally(function(){
    console.log('always executed')
})