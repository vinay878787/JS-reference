// var let const difference
// {
// function abcd(){
//     for(var i = 0 ;i<10 ;i++){
//         console.log(i);
//     }
//     console.log("last"+i);
// }
// abcd();
// console.log(i);
// }


// window object
// {
// var adds itself to the window object
// we use few methods like alert,prompt,confirm etc which we implement in web dev that are not part actual JS language . Those methods belong to one particular object called window object

// fun fact : console is an object that belongs to browser . it provides various methods as well . console is an object that is present in node js . the console that runs in browser and node are slightly different.

// give example how var adds to window object 

// }


// browser context API
// it contains window , stack , heap memory
// https://www.freecodecamp.org/news/execution-context-how-javascript-works-behind-the-scenes/
// two types of execution context : global execution context and function execution context


// stack

//heap memory
//eg : 1+2+3+4+5 . The intermediate data is stored in some memory . so that memory is heap memory

//execution context
// {
// function execution context -> variables + functions + lexical environment

// function abcd(){
//     var a = 12;
//     function def(){
//         var b = 10;
//     }
// }

// b cannot be acessed by abcd . so who decides this ? lexical environment.
// }


//how to copy reference values(spread operator).u can copy both arrays and object 
// {
// var a = [1,2,3,4,5];
// var b = [...a];
// b.push(10);

// console.log(b); 
// console.log();
// console.log(a); 
// }


// document.all is also falsy value


// forEach loop : runs only on array
// the val which is passed is a copy of 1,2,3,4 that gets passed into forEach . so forEach loop doesnt modify the original array .
// var a = [1,2,3,4];
// {
// a.forEach(function(val){
// console.log(val + 2) ;
// })
// console.log();

// console.log(a);

// }


// for ....in loop : used for objects
// {
// var obj = {
//     name :"vinay",
//     age:21,
// }


// read about when to use . and [] with objects . Its fascinating.
// for(var key in obj)
// {
//     console.log(obj[key]);
// }

// }


// callback functions : 


// first class functions equals  function expression . i.e functions can be treated as normal values like varibales . so , js has first class functions.
// {
// function abcd(a)
// {
// a();
// // ur sending a function in a . so , u use () with a .
// }

// abcd(function(){console.log("hey");})
// }


// how arrays made behind scenes?
// {
// this freaks me more........
// arrays are objects
// var a = [1,2,3,4]
// // this a variable is a freaking object . it converts into object
// a[-2]=9;
// console.log(a);

// if u want to find , is it an array , then use :
// a.isArray([])
// a.isArray({})
// }


// pratice operations on arrays and objects well .









