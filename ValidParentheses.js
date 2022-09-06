const ValidParantheses = (input)=>{
    if(input.length%2!==0)return false
  const stack =[]
  const hashmap={
    '(':')',
    '[':']',
    '{':'}'
}

  for(let i of input)
  {
    if(hashmap[i])
    {
        stack.push(hashmap[i])
    }
    else if(stack.pop()!==i){
        return false
    }
  }
  return stack.length===0
    
}



console.log(ValidParantheses('(){}[]()(([]))'))