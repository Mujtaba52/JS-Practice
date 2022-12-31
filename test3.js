var arr1 = {a:1,b:2,c:3}
var arr2= {...arr1}
console.log(arr2)

arr2.a = 9
console.log(arr2)
console.log(arr1)
