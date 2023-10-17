// higher order functions
// {
//   a function which accepts another function as parameter .
// function abcd(val)
// {

// }
// abcd(function(){})

// a function which returns another function .

// forEach another function so forEach is a higher order functions.

// }


// constructor function : normal function in which we use "this" and "new" keyword .
// {
// function saanchaOfBiscuit(){
//     this.width = 12;
//     this.height = 22;
//     this.color = "brown";
//     this.taste = "sugary";
// }
// var bis1 = new saanchaOfBiscuit();
// var bis2 = new saanchaOfBiscuit();
// var bis3 = new saanchaOfBiscuit();
// console.log(bis1);
// console.log(bis2);
// console.log(bis3);


// example : 2 
// function person(name,age,region){
//     this.Name = name;
//     this.Age = age;
//     this.Region = region;
// }

// const p1 = new person("vinay",21,"India");
// const p2 = new person("ajay",25,"aus");
// const p3 = new person("Jatin",35,"newzeland");
 
// console.log(p1,p2,p3);

// when you want similar type of properties and methods  then , we can use constructor function
// }



// first class functions :
//   a function which accepts another function as parameter .
// function abcd(val)
// {

// }
// abcd(function(){})

// we use it heavily in setTimeout and setInterval . we will be passsin functions inside them.


// new Keyboard : when u see new keyboard , make a blank object in ur brain . whenever u find "this" just replace this with blank object.


// IIFE -> immediately invoked function expression
// {
// we can call the function without any function call , as soon as function is declared , it gets automatically called by itself .

// var ans = (function(){
//     var a = 12;
//     return {
//         getter:function(){
//               console.log(a);
//         },
//         setter : function(val){
//             a = val;
//         }
//     }
// })()

// ans.getter();
// ans.setter(25);
// ans.getter();
// generally used to make private variables
// }



// Prototype : any object created will get [[prototype]] by default.


// prototype contains 
// To see protoype properties . Just create an object in browser console and put the object name with a . , u will see lot of helper properties as default which are not created by u .
// // so wt does it contain?

// [[prototype]] contains many helper properties and methods which we can use to complete our task, let's say we create an array and we want to know length of it, what do we do, we use .length property on array, did we created .length on that array, no! but it still contains .length, the question is how ?|


// the answer is, many properties and methods are already available to use built by javascript creators inside prototype of every object.

// example : 1 
// var obj = {
//     name:"vinay"
// }
// obj.hasOwnProperty("name")


// prototypal inheritance : when we pass certain properties of parents to children with the help of prototype .  

// Example:1
// var human = {
//     name:"Harsh",
//     canFly:false,
//     canTalk:true,
//     willDie:true,
// }

// var sheriyansStudent = {
//     solveJsQuestion :true,
//     createModernWebsite :true,

// }
// sheriyansStudent.__proto__ = human;
// console.log(sheriyansStudent.__proto__);
// console.log(sheriyansStudent.canTalk);




// this keyword
// in global scope and function scope 
// console.log(this) => gives window
// in method scope it gives object
// a function inside object is called a method 
// eg : var ans = {
    // baatkaro : function(){
        // console.log(this);
    // }
// }
// ans.baatkaro();

// in any method "this " keyword refers to parent object



// EventListeners
// var button = document.querySelector("button");
// button.addEventListener('click',function(){
        // this.style.color = "red";
//     console.log(this);
// })
// in event listener , this refers to something which is written before "addEventListener"



// call apply bind
// if u have a function and object and  have to run function on that object . or . if we have to bind that function on this which is referring to window instead should point to a particular object or varibale wtever.

// function abcd(val1,val2,val3){
    // console.log(this);
// } 

// var obj = {age:24}
// abcd.call(obj,1,2,3)
// abcd.apply(obj,[1,2,3])
// var bindedFunction = abcd.bind(obj)
// bindedFunction();


// study abour pure and impure functions and finally closures
