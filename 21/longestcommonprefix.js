let strs = ["flower","flow","flight"]
// Output: "fl"

const longestCommonPrefix= (strs)=>{
    let prefix = true
    let str = ''
    for(let i =0 ;i < strs[0].length; i++){
        for(let j =1; j < strs.length ; j++){
            if(strs[0][i]!= strs[j][i]){
                prefix = false
                break
            }
        }
        if(prefix) str+=strs[0][i]
    }
    return str
}   
console.log(longestCommonPrefix(strs))