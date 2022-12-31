const nums = [8,8,8,8,8,8,8,1,1,1,2,2,3]
const  k = 2


// const freqOfElements = (nums, k)=>{
//     let sortedNums = nums.sort()
//     let numSet = new Set(nums)
//     console.log(numSet)
//     let mostfreqElement = new Array(k)
//     let elementFreq = new Array(k)
//     let j =0
//     for(let i = 0 ; i < nums.length -1 ; i++){
//         if(sortedNums[i]===sortedNums[i+1]){
//             mostfreqElement[j] = sortedNums[i]
//         }
//     }


// }

// const freqElements = (nums, k)=>{
//     let reps ={}
//     let mostfreq = new Array(2)
//     for(i of nums){
//         if(reps[i]){
//             reps[i] = ++reps[i]
//         }
//         else reps[i] = 1
//     }
//     console.log(Object.keys(reps).length)
// //     let j =0
// //   for(i in reps){
// //     // console.log(i)

// //     // console.log(reps[i])
// //     arr[j] = i
// //   }
//     return reps
// }


const freqOfElements = (nums, k)=>{

    let reps = {}
    for(i of nums){
        if(reps[i]){
            reps[i] = reps[i] + 1 
        }
        else{
            reps[i] = 1
        }
    }
    let numsSet = [...new Set(nums)]
    let kElements = new Array(numsSet.length)
   
    // for(i of numsSet){
    //     //console.log(i)
    //     kElements
    //     console.log(reps[i])

    // }
    console.log(numsSet)
    kElements[0]
    for(let i = 0; i < numsSet.length - 1 ; i++){
        if(reps[numsSet[i]]> reps[numsSet[i+1]] )
        {
            kElements[i] = numsSet[i]
        }
        else{
            kElements[i] = numsSet[i + 1]
        }
    }
    return kElements

}
man =2


console.log(freqOfElements(nums,k))