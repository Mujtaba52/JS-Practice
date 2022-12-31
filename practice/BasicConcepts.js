"use strict"

// y = 10
// console.log(y)
// function xyz(){
//     return "xyz"
// }


// function x(){
//     let a = 10
//     return function y(){
//         console.log(a)
//     }
// }

// const z = x()
// z()

// 4 ways to create objects

const student = {name:"Ben", age: 16}

console.log(student.name + " the type is "+ typeof(student))

// const NewStudent = Object.create(student)
const NewStudent = {...student}

console.log("New object  "+NewStudent.name + " the type is "+ typeof(student))

function students(name="jon", age=10){
    this.name = name;
    this.age = age
}
const NewStudent2 = new students()

console.log("New object 2 "+NewStudent2.name + " the type is "+ typeof(student))

class newstudents{
    constructor(name= "harry",age=12){
        this.name = name;
        this.age= age;
    }
}

const NewStudent3 = new newstudents('barry',11)

console.log("New object 3 "+NewStudent3.name + " the type is "+ typeof(student))
