let s = "()[]{{}[]]{}}"

const isValid = (s)=>{
    const key = {'(':')', '{':'}','[':']'}
    let arr = []
    let temp =''
    for(i of s) {
        if(key[i]){
                arr.push(i)
        }
        else{
            temp = arr.pop()
            if(key[temp]!= i){
                return false
            }
        }
    }
    console.log(arr)
    return arr.length === 0
}

console.log(isValid(s))
