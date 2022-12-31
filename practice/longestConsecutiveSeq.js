const nums = [100,4,200,1,3,2]


const longestSeq = (nums)=>{
    nums.sort((a,b) => a - b)
    console.log(nums)
    let counter1 = 1
    let counter2 = 1
    for(let i =0 ; i< nums.length -1 ; i++){
        if(nums[i] == nums[i+1] - 1){
            counter1++
        }
        else {
            if(counter2 <counter1 ){
                counter2 = counter1
            }
            counter1 = 1
        }
    }
    return counter1> counter2 ? counter1 : counter2
}

console.log(longestSeq(nums))