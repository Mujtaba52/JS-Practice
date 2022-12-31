const arr =[1,9,4,6,3,2,8,7]
const arr2 =[2,3,4,7,5,1,9,8]
const arr3 =[1,2,3,4,5,6,7,8]


function evenOdd (arr){
    let temp, length = arr.length
    for(let i =0 ;i< length; i++){
        if(arr[i]%2==0){
            temp = arr.splice(i,1)
            arr.push(...temp)
            length--
            i--
        }
    }
   return arr
}
evenOdd(arr)
console.log(arr)