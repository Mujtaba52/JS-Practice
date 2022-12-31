
function NoOfReps(arr){
    let Reps = {}

    for(let i of arr){
        // console.log(i)
        if(!Reps[i]){
            Reps[i] = 1
        }
        else if(Reps[i]){
            Reps[i] = ++Reps[i]
        }
    }
    return Reps
}


// console.log(NoOfReps([1,1,2,3,3,3,4]))

// console.log(NoOfReps(['a','a','a','a','b','e','e']))

console.log(NoOfReps('helllo'))
