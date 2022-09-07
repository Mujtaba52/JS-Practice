const longestPalindromicSubstring = (str)=>{

    let len = str.length
    let completePalin = ''
    let finalPalin=''
    for(let index = 0; index< len -1 ; index++){
        let i=index
        let j = len;
        let plaindromFirstHalf= ''
        let plaindromSecondHalf= ''
        
        while(i<=j){
            j--;
            if(str[i]===str[j] && i<j)
            {
                plaindromFirstHalf=plaindromFirstHalf.concat(str[i])
                plaindromSecondHalf = str[j].concat(plaindromSecondHalf)
                i++
            }
            else if(str[i]===str[j] && i===j)
            {
                plaindromFirstHalf=plaindromFirstHalf.concat(str[i])
                i++
            }
            else if(str[i]!==str[j] && i!==j && plaindromFirstHalf.length>=1)
            {
                plaindromFirstHalf = ''
                plaindromSecondHalf = ''
                i=index
            }
        }
        completePalin=plaindromFirstHalf + plaindromSecondHalf
        finalPalin = finalPalin.length < completePalin.length ? completePalin : finalPalin
    }
    return finalPalin

}
//Input: s = "baabad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
//abca abaa
console.log(longestPalindromicSubstring('asddsadasdsddddd'))