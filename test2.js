
const arr = [
    {name: 'Donald', age: 12},
    {name: 'Ben', age:24},
    {name: 'george', age: 25}
]

const names = arr.reduce((acc, curr)=>{
    if(curr.age<25){
        acc = acc.concat(curr.name)
    }
    return acc
},[])


console.log(names)