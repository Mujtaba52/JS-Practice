const twoSum = (nums,target)=>{
    let num=0,num2=0
    for(let i=0 ;i<nums.length ;i++)
    {
        num = target-nums[i]
        for(let j =0; j<nums.length;j++){
            if((nums[i]+nums[j])===target && i!==j)return [i,j]
        }
    }
    return "Sum not possible"
}

// var twoSum = function(nums, target) {
//     if (nums.length === 2) return [0, 1];
//     const len = nums.length;
//     let map = {};

//     for(let i = 0; i < len; i++) {
//         let n = target - nums[i];
//         let find = map[n];
//         console.log(find)
//         if(find !== undefined) return [find, i];
//         else map[nums[i]] = i;
//     }
// };
const nums =[4,5,4]
// for(let i in nums)
// {
//     console.log([i])
// }
console.log(twoSum([4,5,5,3],7))
