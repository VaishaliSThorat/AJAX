// // sync code
// // async code

// // prgram 1 

// function additionA(){
//     console.log("A is printed")
// }

// function additionB(){
//     console.log("B is printed")
// }

// additionB()
// additionA()

// // program 2 

// function additionC(){
//     setTimeout(function(){
//         console.log("printed C")
//     }, 2000)
// }

// function additionD(){
//     console.log("printed D")
// }

// additionC()
// additionD()

// // program 3 

// function additionE(){

// setTimeout(function(){
//     console.log('user created')
// },3000)
// setTimeout(function(){
//     console.log('get id')
// },2000)
// setTimeout(function(){
//     console.log('get info by id')
// },1000)
// }

// additionE()

// function additionE(){

//     setTimeout(function(){
//         console.log('user created')
//         setTimeout(function(){
//             console.log('get id')
//             setTimeout(function(){
//                 console.log('get info by id')
//             },1000)
//         },2000)
//     },3000)

//     }
//     additionE()


    // promise --- async ---sync ---- better way --- promises
    // promises --- pending
    // resolve
    // reject

    // let pro = new Promise(function(resolve, reject){
    //     let a = 10
    //     let b = 100
    //     if(a == b){
    //         resolve('hello I completed promise')
    //     }
    //     else{
    //         reject('promise is not completed')
    //     }
    // })

    // // consuming the promise

    // pro.then(function(a){
    //     console.log(a)
    // },function(b){
    //     console.log(b)
    // })

    // let pro3 = new Promise(function(resolve, reject){
    //     let city = 'pune'
    //     if(city.includes('p')){
    //         resolve([11, 22, 33])
    //     }
    //     else{
    //         reject([-11, -12, -13])
    //     }
    // })

    // pro3.then(function(a){
    //     console.log(a[0])
    // },function(b){
    //     console.log(b[1])
    // })

    // let pro4 = new Promise(function(resolve, reject){
    //     let city = 'pune'
    //     if(city.includes('x')){
    //         resolve([11, 22, 33])
    //     }
    //     else{
    //         reject([-11, -22, -33])
    //     }
    // })

    // pro4.then(function(a){
    //     console.log(a[0])
    // }).catch(function(b){
    //     console.log(b[2])
    // }).finally(function(){
    //     console.log("I will always execute")
    // })

    // program 5

    // let pro5 = new Promise(function(resolev, reject){
    //     let a = 10
    //     let b = 50
    //     if(a > b){
    //         resolve('a is called')
    //     }
    //     else {
    //         reject('b is called')
    //     }
    // })

    // // consuming promise

    // pro5.then(function(a){
    //     console.log(a)
    //     return "hello"
    // })
    // .then(function(b){
    //     console.log(b)
    // })
    // .catch(function(c){
    //     console.log(c)
    // })
    // .finally(function(){
    //     console.log('I will execute')
    // })

    // // promise.all()
    // // promise.any()
    // // promise.race()
    // // promise.allSettled()

    // function createUser(){
    //     return new Promise(function(resolve, reject){
    //         setTimeout(function(){
    //             resolve('user created')
    //         },3000)
    //     })
    // }

    // function getID(){
    //     return new Promise(function(resolve, reject){
    //         setTimeout(function(){
    //             resolve('get ID')
    //         },2000)
    //     })
    // }

    // function getInfoByID(){
    //     return new Promise(function(resolve, reject){
    //         setTimeout(function(){
    //             resolve('get info by ID')
    //         },1000)
    //     })

    // }

    // createUser()
    // .then(function(a){
    //     console.log(a)
    //     return getID()
    // })
    // .then(function(b){
    //     console.log(b)
    //     return getInfoByID()
    // })
    // .then(function(c){
    //     console.log(c)
    // })
    // .catch(function(){
    //     console.log('rejected')
    // })
    // .finally(function(){
    //     console.log('finally')
    // })