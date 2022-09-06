const search = (arr,target)=>{

    let start =0
    let end = arr.length
    let middle =Math.floor(arr.length/2)
    for(let i=start ;middle>1 ; i++){
        
        middle = Math.floor((start+end)/2)
        if(target===arr[middle])return middle
        else if(target>arr[middle])
        {
            start = middle
        }
        else if(target < arr[middle]){
            end = middle
        }
    }
    return -1
}



//Input: nums = [-1,0,3,5,9,12], target = 9
//Output: 4

console.log(search([-1,0,3,5,9,12,13],5))