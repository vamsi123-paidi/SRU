// 'use strict'

// console.log(this,"normal global calling")

// function standAlone(){
//     console.log(this,"this is from standalone funtion")
// }
// standAlone()

// let person = {
//     name:"bob",
//     greet:function(){
//         console.log(this.name,"this is method")
//     }
// }
// person.greet()

// var value = 10;
// console.log(this.value)
// 'use strict'
// a = 10
// console.log(a)

// function add(a,a,c){
//     sum = a+a+c
//     console.log(sum)
    
// }
// add(1,2,3)
// "use strict"
// function name(){
//     console.log(this)
// }
// name()

// let arrow = ()=>{
//     console.log(this)
// }
// arrow()


// call method

function sample(message,a,b){
    console.log(`${this.name}  ${message} ${a} ${b}`)
}
let person = {name:"bob"}

// sample.apply(person,["hello",2,3])
const bindMethod = sample.bind(person,"hello","world","bind")
bindMethod()
// "use strict"
// function add(a,a,a){
//     let o = a+a+a
//     console.log(o)
// }
// add(1,2,3)