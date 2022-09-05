const isAnagram = function(s, t) {
    if(s.length!==t.length)return false
    const count={}
    for(let i of s)count[i]=(count[i]||0)+1
    
    const count_t ={}
    for(let i of t)count_t[i]=(count_t[i]||0)+1

    for(let i in count)if(count[i]!==count_t[i])return false
    return true
};

console.log(isAnagram('caat','taca'))


