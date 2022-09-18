const zigzagConvertor = (str, rows)=>{
    let row = rows              //  3
    rows=rows+Math.round(rows/2)    //4 + 2

    //
    // let result = ''
    // for(let i=0 ; i < str.length ; i += rows){
    //     //console.log(str[i])
    //     result = result.concat(str[i])
    // }
    // rows = rows/2
    // for(let j = 1 ;j < str.length ; j +=rows)
    // {
    //     result = result.concat(str[j])
    //     //console.log(str[j])
    // }
    // row=row+Math.floor(row/2)
    // for(let k = 2 ;k < str.length ; k +=row)
    // {
    //     result = result.concat(str[k])
    //     //console.log(str[k])
    // }
    // console.log(result)

    const ResultantStr = Array(row).fill('')
    console.log(ResultantStr.length)
    let index = 0;
    let index2 = 0; 
    let j = 2;
    for(let i = 0; i < str.length ;i++){
        index = i % rows    //0 1 2 3
        index2 = i % row    //0 1 2 
        if(index === 0){
            ResultantStr[index] = ResultantStr[index].concat(str[i])
            j=2
        }
        else if(index > (ResultantStr.length -1)){

            let newInd = index + ((ResultantStr.length - j) - index) // 4 + (2 - 4) 2 //5 + (2 -5 ) 2
            console.log(" RS -1 : "+(ResultantStr.length -j))
            console.log(' Index : ' + index)
            console.log(' new Ind ' + newInd)

            ResultantStr[newInd] = ResultantStr[newInd].concat(str[i])
            j++

        }
        else {
            ResultantStr[index] = ResultantStr[index].concat(str[i])
        }
    }
   
    console.log(ResultantStr)


}
zigzagConvertor('PAYPALISHIRING',2)
//console.log()

//PAHNAPLSIIGYIR
// P   A   H   N    3
// A P L S I I G    1
// Y   I   R        3

// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N     5
// A   L S  I G     3
// Y A   H R        1
// P     I          5
//                              numRows = 5 
// P       H    7
// A     S I    5
// Y   I   R    3
// P L     I G  1
// A       N    7

// P       r
// A     i
// Y   h
// P  s
// A i
// l
//5 : 7, 6 : 9 , 7 : 11, 8 : 13, 9 : 15