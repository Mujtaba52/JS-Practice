Input: nums = [1,2,3,4]
Output: [24,12,8,6]

const product = (nums)=>{
    let arr1 = nums
    let arr2 = nums
    let arr1product =1 
    let arr2product =1

    for(let i = 0 ; i < nums.length ; i++){
        arr1product = arr1[i]* arr1product
        arr1[i] = arr1product
    }

    for(let j= nums.length -1; j > 0; j--){
        arr2product = arr1[j]* arr2product
        arr2[i] = arr2product
    }
//,
}

product(nums)


// 1 2 6 24
// 4 12 24 24

// 4 6 3 4