// function expression do not have hoisting
// hoistedFunction();
// var a = function hoistedFunction(){
//     console.log("hoisted fun.....")
// }

// hoisting concept


// const and let : trying to understand const and let difference and concept of temporal dead zone
// {
// temporal dead zone : is a time between entering the scope and finding actual variable declaration .

// let z ;
// console.log(z);
// const b = 5;
// console.log(z,b);
// }

//  Primitive and reference
// {
// // reference : passing the memory address of variable . Reference types are with [],{},().   
// let ab = 1 ;
// let bx = ab;

// bx = 5;
// console.log(ab);
// console.log(bx);

// let obj1 = {
//     name:"obj1",
//     age :  21,
// }

// let obj2 = {}
// obj2 = obj1;

// obj2.city = "ballari";
// 

// console.log(obj2);
// console.log(obj1);

// example 2 :
// var a = [1,2,3,4];
// var b = a;
// b.push(10);

// console.log(a);
// console.log();
// console.log(b);
// }


// conditionals :  if else else if


// truthy and falsy


// loops : for for...in , for...of , while , do while 
// {
// for(let i = 0 ;i<20 ;i++ )
// {
//     console.log(i);
// }

// i=1;
// while(i<10)
// {
//     console.log(i);
//     i++;
// }

// let i =1 ;
// do{
//     console.log(i);
//     i++;
// }
// while(i<-1);
// }


// !IMPORTANT : Functions , without args, with args . tell difference between args and parameters
// {
// arguments : the values which we send in function call 
// parameters : the values which arguments values 
// }


// arrays , push , pop , shift , unshift ,splice , slice 
// {
let a = [1, 2 , 3 , 4]
// console.log(a.shift());
// console.log(a);
// console.log(a.unshift(5));
// console.log(a);
// a.splice(0, 3 ,1,2,3,3,44,4,4,5);
// console.log(a);
// const originalArray = [1, 2, 3, 4, 5];
// const slicedArray = originalArray.slice(1, 4);

// console.log(slicedArray); // Output: [2, 3, 4]
// console.log(originalArray); // Output: [1, 2, 3, 4, 5] (original array is unchanged)

// }



