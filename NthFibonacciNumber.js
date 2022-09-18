const NthFibNum = (num)=>{
    //fib 1 1 2 3 5 8 
    let first = 1
    let second = 1
    let result = 1;
    for(let i = 2 ; i < num ; i++)
    {
        result = first + second 
        first = second
        second =result
    }
    return result

}

const fib = (num, prevValues = [])=>{
    if(prevValues[num]!=null) return prevValues[num]
    if(num <=2) return 1
    result = fib(num - 1,prevValues) + fib(num - 2, prevValues)
    prevValues[num] = result
    return result
}


console.log(fib(40))