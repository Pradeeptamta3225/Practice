//Function

// function Myfunction(p1,p2){
//     return p1 * p2 
// }

// let result = Myfunction(5,4);
// document.getElementById("demo").innerHTML = result;


// let result = Myfunction(8,6);

// function Myfunction(a,b){
//     return a*b;
// }

// const person = {
//     firstName: "Pradeep",
//     lastName: "Tamta",
//     address: "Tanakpur"
// }

// alert(person.firstName);


// const person = {
//     name: "Pradeep",
//     age: "50"
// }

// alert(person.name + " is " + person.age);

//stack(primitive) and heap(Non-primitive) 

let myName = "Pradeep Tamta"

let alternateName = myName
alternateName = "Tamta"

console.log(myName);
console.log(alternateName);


let userOne = {
  email: "pradeep@gmail.com",
  age: 24
}

let userTwo = userOne;

userTwo.email = "tamta@gmail.com";
console.log(userOne);
console.log(userTwo);