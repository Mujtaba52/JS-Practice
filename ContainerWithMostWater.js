const maxWater = (arr)=>{

    let maxWater = 0
    for(let i = 0 ; i < arr.length ;i++){
        for(let j = i + 1 ;j < arr.length ; j++){
            
            let waterQuantity = (arr[i]<arr[j]?arr[i]:arr[j]) * (j-i)
            if(waterQuantity > maxWater){
                maxWater = waterQuantity
            }
        }
    }
    return maxWater
}



const maximunwater = (arr)=>{

    let leftSide = 0
    let rightSide = arr.length - 1
    let result = 0
    let area = 0 
    while (leftSide < rightSide){
        area = Math.min(arr[leftSide], arr[rightSide]) * (rightSide - leftSide)

        if(area > result){
            result = area
        }
        if(arr[leftSide] < arr[rightSide]){
            leftSide++
        }
        else{
            rightSide--
        }
    }
    return result
}



console.log(maximunwater([1,8,6,2,5,4,8,3,7]))