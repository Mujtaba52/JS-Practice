
const getName = (users)=>{
    return users
    .sort((a,b)=>{return b.age - a.age})
    .filter((user)=>user.isActive)
    .map((user)=>{
        return user.name
    })
}


const users = [
    {
        id:1,
        name:'jack',
        isActive: true,
        age:21
    },
    {
        id:2,
        name:'Ben',
        isActive: false,
        age:18
    },
    {
        id:3,
        name:'Brett',
        isActive: true,
        age:31
    },
]

console.log(getName(users))