const spiralOrder = (matrix)=>{

    const result=[]
    while(matrix.length!==0){
        result.push(...matrix.shift())

        for(let i in matrix)
        {
            result.push(matrix[i].pop())
            matrix[i].reverse()
        }
        matrix.reverse()
    }
    return result
}




const matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]
const matrix2 = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
const matrix3 = [[1,2,3],[5,6,7],[9,10,11]]

console.log(spiralOrder(matrix3))