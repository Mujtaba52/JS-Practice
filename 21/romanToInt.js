// Input: s = "III"
// Output: 3
// Explanation: III = 3.
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

const RomanToInt = (s)=>{
    const key = {I:1, V:5, X:10, L:50, C:100, D:500, M:1000 }
    let val =0
    for(let i=0; i< s.length ; i++){
        if(((s[i]==='I') && (s[i+1]==='V' || s[i+1]==='X' )) 
        || ( s[i]==='X' && ( (s[i+1]==='L' || s[i+1]==='C' )))
        || ( s[i]==='C' && ( (s[i+1]==='D' || s[i+1]==='M' ))))
        {
            val -= key[s[i]]
        }
        else {
            val += key[s[i]]
        }
    }
    return val
}


console.log(RomanToInt('MCMXCIV'))