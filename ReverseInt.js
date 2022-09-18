const reverseInt = (x)=>{

    let arr = x.toString()
    let lessThanZero = false
    if(arr[0]==='-')
    {
        arr = arr.slice(1)
        lessThanZero = true
    }
    const reversedArr = arr.split('').reverse().join('')
    const result = Number(reversedArr)
    if (result > 2**31) return 0
    if(lessThanZero) return result * (-1)
    return result
}

console.log(reverseInt(1230))
console.log(2**3)