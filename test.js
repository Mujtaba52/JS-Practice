const NoofRepetitions = (sentence)=>{
    let arr = [...sentence]
    const reps = arr.reduce((noOfReps, current)=>{
        if(noOfReps[current]){
            noOfReps[current]= ++noOfReps[current]
        }
        else{
            noOfReps[current] = 1
        }
        return noOfReps
    }, {})

    // const rep = {}
    // for(let i = 0; i < sentence.length; i++){
    //     if(rep[sentence[i]]){
    //         rep[sentence[i]] = ++rep[sentence[i]]
    //     }
    //     else{
    //         rep[sentence[i]] = rep[sentence[i]];
    //         rep[sentence[i]] = 1
    //     }
    // }
    
    return reps
}


console.log(NoofRepetitions('Hii hhhhhHello bro'))