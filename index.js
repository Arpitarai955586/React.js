
// destructuring

// let arr=[10,20,30,40]
// let[a,b,c,d]=arr
// console.log(a)
// console.log(b)
// console.log(c)
// let arr1=[10,20,30,40,50]
// // let [e,i,f,g,h]=arr1
// let[, i, ,g]=arr1
// console.log(i,g)

let arr=[10,["hello",[30,[60,"hii"],["bye"]],90]]
console.log(arr[1][0],arr[1][1][1][1],arr[1][1][2][0])

let [,[s1,[,[,s2],[s3]]]]=arr
console.log(s1,s2,s3)
// OBJECT DESTRUCTURING
let  obj={
    id:1,
    title:"laptop",
    brand:"HP",
    price:9000,
    rating:{
        rate:5,
        time:{ 
            roll:1
        }
    }
}
// console.log(obj)
let {title,id,rating:{rate,time:{roll}}} = obj
console.log(roll)
// npx create-react-app-myapp to instrall the react file in folder
// npm start




