const ValidPalindrome = (s)=>{
    s = s.toLowerCase().replaceAll(' ','').replace(/[^a-z0-9]/g, "")
    const len = s.length - 1
    for(let i in s){
        if(s[i]!== s[len-i])return false
    }
    return true
}


console.log(ValidPalindrome('Race, e :car'))