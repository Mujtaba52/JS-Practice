 let x = 1223221

 const isPalindrome = (num)=>{
    let strNum = num.toString()
    let j = strNum.length - 1
    console.log(Math.round(strNum.length/2))
    for(let i =0 ; i < Math.floor(strNum.length/2)  ; i++){
        if(strNum[i]!= strNum[j])   return false
        j--
    }
    return true
    
 }

// const isPalindrome = (num)=>{

// }
 console.log(isPalindrome(x))