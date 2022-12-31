console.log("start")

// function sayHello(cb){
//     setTimeout(()=>{
//        cb("Hello")
//        sayHi((msg)=>{
//         console.log(msg)
//     })
//     },1000)
// }

// const sayHello = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('Hello')
//     },2000)
// })

// const sayHi = Promise.resolve('Hi')
// const sayHey = Promise.resolve('Hey')

// sayHello.then((res)=>{
//     console.log(res)
//     return sayHi
// }).then((res)=>{
//     console.log(res)
//     return sayHey
// }).then((res)=>{
//     console.log(res)
// })



// function sayHi(cb){
//     setTimeout(()=>{
//        cb("Hi") 
//     },1000)
// }

// sayHello((msg)=>{
//     console.log(msg)
// })


// const mypromises = Promise.all([
//     sayHi,
//     sayHey
// ])
// mypromises.then((res)=>{console.log(res)})
console.log("end")

const promise = new Promise(res => res(2));
promise.then(v => {
        console.log(v);
        return v * 2;
    })
    .then(v => {
        console.log(v);
        return v * 2;
    })
    .finally(v => {
        console.log(v);
        return v * 2;
    })
    .then(v => {
        console.log(v);
    });