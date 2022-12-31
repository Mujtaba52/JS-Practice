let nums = [2,7,11,15], target = 9

const getnums = (nums, target)=>{
    for(let i = 0 ; i < nums.length ; i++){
        for( let j = i +1 ; j < nums.length ; j++){
            if(nums[i]+nums[j] === target){
                return [i,j]
            }
        }
    }
}   

console.log(getnums(nums, target))
// console.log(target)

//brute force -- use hash tables