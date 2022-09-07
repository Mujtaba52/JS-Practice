const LongestSubStringWithoutRepeatingChar = (str)=>{

    let len = str.length
    let finalSubstringsubString = ''
    let substringStartInd = 0;
    let finalSubstring = ''
    let subString = ''

    for(let i = 0 ; i < len - 1; i++){

        let subString = str[i]
        for(let index = i ; index < len - 1 ; index++){

            if(str[index]!==str[index+1] && !subString.includes(str[index+1]) ){
                subString = subString.concat(str[index+1])
            }
            else if(str[index]===str[index+1] || subString.includes(str[index+1]))
            {
                break
            }
        }
        finalSubstring = finalSubstring.length < subString.length ? subString : finalSubstring
        //console.log(finalSubstring)
    }
    return [finalSubstring,finalSubstring.length]
}

//abcabcbb
console.log(LongestSubStringWithoutRepeatingChar('abcdefgabcdefhi'))