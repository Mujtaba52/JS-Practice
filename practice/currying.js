// function sum(num){
//     return function (num2){
//         if(num2) return sum(num + num2)
//         return num
//     }
// }

// const sum2 = (...params)=>{
//     let sum =0
//     for(let i of params){
//         sum = i+ sum
//     }
//     return sum
// }
// function sum3(a,b,c,d){}


// console.log(sum2.length)
// console.log(sum3.length)
// //console.log(sum(1)(2)(5)())

for (var i = 0; i < 4; i++) {

    (function a(i){
    setTimeout(() => console.log(i),i*1000);

    })(i)
}