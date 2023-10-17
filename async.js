// synchronous and asynchronous
// asynchronous actions : actions that we initate now and finish later.

// WHY DO WE NEED ASYNC JS
/* function loadScript(src) {
    // creates a <script> tag and append it to the page
    // this causes the script with given src to start loading and run when complete
    let script = document.createElement('script');
    script.src = src;
    document.head.append(script);
  }

  
loadScript('/my/script.js'); */
// the code below loadScript
// doesn't wait for the script loading to finish
// ...lets assume there is a function used from script.js

// CALL BACKS 
// {
// loadScript("/basic.js",()=>{
//     // the callback runs after the script is loaded 
//     newFunction();
//     ...
// })
// NOTE: That's the idea : the second argument is a function (usually anonymous ) that runs when the action is completed . A function that does something asynchronously should provide a callback argument where we put the function to run after it's complete .
// }

// Handling errors
// In the above examples we didn’t consider errors. What if the script loading fails? Our callback should be able to react on that.

// Here’s an improved version of loadScript that tracks loading errors:


// function loadScript(src, callback) {
//     let script = document.createElement('script');
//     script.src = src;
  
//     script.onload = () => callback(null, script);
//     script.onerror = () => callback(new Error(`Script load error for ${src}`));
  
//     document.head.append(script);
//   }
  

// A BETTER VERSION
// loadScript('/my/script.js', function(error, script) {
//     if (error) {
//       // handle error
//     } else {
//       // script loaded successfully
//     }
//   });

// THE ABOVE CODE IS GOOD FOR MAXIMUM 2 CALLS INSIDE THE FUNCTION . IF IT INCREASE IT ENTERS PYRAMID OF DOOM WHERE MULTIPLE CALLBAKS START TO EXTENED ON THEIR RIGHT SIDE FORIMG OF A TRIANGLE .


// Understanding how callbacks are handled by the event loop and call stack is crucial for understanding asynchronous programming in JavaScript.

// Call Stack:

// The call stack is a data structure in JavaScript that keeps track of function calls in the code. When a function is called, it's added to the top of the call stack.
// When JavaScript starts executing your code, the main function (or global code) is pushed onto the call stack.
// As functions are called within other functions, they are added to the stack, creating a stack of function calls.
// When a function finishes executing, it's removed from the stack.
// The call stack operates in a synchronous manner, meaning it processes function calls one at a time, from top to bottom.
// Event Loop:

// The event loop is a continuously running process that checks the call stack and the message queue (also known as the task queue) for pending tasks.
// When the call stack is empty, the event loop takes the first message from the queue and pushes it onto the call stack, effectively calling the corresponding function.
// This message is usually a callback function, which was registered to handle asynchronous tasks, such as AJAX requests, setTimeout, or event listeners.
// When the callback function is executed, it might initiate further asynchronous tasks. When these tasks are completed, their respective callback functions are placed in the message queue.
// Here's a step-by-step breakdown of how callbacks are handled by the event loop and call stack in JavaScript:

// Synchronous Code Execution:

// Synchronous code is executed line by line, and function calls are added to the call stack.
// If a function contains asynchronous code (e.g., setTimeout), the asynchronous task is offloaded, and the function is removed from the stack.
// Asynchronous Code Execution:

// Asynchronous operations, like setTimeout or AJAX requests, are initiated, and their associated callback functions are registered.
// The asynchronous tasks are handed over to web APIs (provided by the browser) to handle. Meanwhile, the rest of the synchronous code continues executing.
// Task Queue:

// When the asynchronous task completes, its callback function is placed in the task queue.
// Event Loop:

// The event loop constantly monitors the call stack and the task queue.
// When the call stack is empty, the event loop takes the first task from the task queue and pushes the associated callback function onto the call stack.
// Callback Execution:

// The callback function is executed, and any further asynchronous tasks initiated by this function follow the same process, adding their callbacks to the task queue and eventually to the call stack.
// By following this mechanism, JavaScript ensures that asynchronous operations do not block the main thread, allowing the program to remain responsive and handle multiple tasks concurrently.


// PROMISES
// let promise = new Promise(function(resolve,reject){

// })

// So to summarize: the executor runs automatically and attempts to perform a job. When it is finished with the attempt, it calls resolve if it was successful or reject if there was an error.

// The promise object returned by the new Promise constructor has these internal properties:
// state — initially "pending", then changes to either "fulfilled" when resolve is called or "rejected" when reject is called.
// result — initially undefined, then changes to value when resolve(value) is called or error when reject(error) is called.

// promise object
// 1)state : fulfilled bcoz of resolve or rejected bcoz of rej parameter 
// 2)result : first , the result is undefined and later either fulfilled value or error
// let promise = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         rej(new Error("oops!!"),1000);
//     });
// });


// A better version
// let promise = new Promise(function(res,rej){
//     res(123);
// })

// promise.then(
//     function(result) { /* handle a successful result */ },
//     function(error) { /* handle an error */ }
//   );
//   The first argument of .then is a function that runs when the promise is resolved and receives the result.

// The second argument of .then is a function that runs when the promise is rejected and receives the error.


// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => reject(new Error("Whoops!")), 1000);
//   });
  
//   // .catch(f) is the same as promise.then(null, f)
//   promise.catch(alert); // shows "Error: Whoops!" after 1 second


// Cleanup: finally
// 
// new Promise((resolve, reject) => {
//     /* do something that takes time, and then call resolve or maybe reject */
//   })
//     // runs when the promise is settled, doesn't matter successfully or not
//     .finally(() => stop loading indicator)
//     // so the loading indicator is always stopped before we go on
//     .then(result => show result, err => show error)
//  .catch(err => alert(err));  // <-- .catch shows the error
// function loadScript(src) {
//   return new Promise(function(resolve, reject) {
//     let script = document.createElement('script');
//     script.src = src;

//     script.onload = () => resolve(script);
//     script.onerror = () => reject(new Error(`Script load error for ${src}`));

//     document.head.append(script);
//   });
// }
// 


// PROMISE CHAINING

// new Promise(function(resolve, reject) {

//   setTimeout(() => resolve(1), 1000);

// }).then(function(result) {

//   alert(result); // 1

//   return new Promise((resolve, reject) => { // (*)
//     setTimeout(() => resolve(result * 2), 1000);
//   });

// }).then(function(result) { // (**)

//   alert(result); // 2

//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(result * 2), 1000);
//   });

// }).then(function(result) {

//   alert(result); // 4

// });


// Error handling with promises

// the execution: catch -> catch
// new Promise((resolve, reject) => {

//   throw new Error("Whoops!");

// }).catch(function(error) { // (*)

//   if (error instanceof URIError) {
//     // handle it
//   } else {
//     alert("Can't handle such error");

//     throw error; // throwing this or another error jumps to the next catch
//   }

// }).then(function() {
//   /* doesn't run here */
// }).catch(error => { // (**)

//   alert(`The unknown error has occurred: ${error}`);
//   // don't return anything => execution goes the normal way

// });






// fetch('/article/promise-chaining/user.json')
//   .then(response => response.json())
//   .then(user => fetch(`https://api.github.com/users/${user.name}`))
//   .then(response => response.json())
//   .then(githubUser => new Promise((resolve, reject) => {
//     let img = document.createElement('img');
//     img.src = githubUser.avatar_url;
//     img.className = "promise-avatar-example";
//     document.body.append(img);

//     setTimeout(() => {
//       img.remove();
//       resolve(githubUser);
//     }, 3000);
//   }))
//   .catch(error => alert(error.message));

// PROMISE API
// promise.all
// let urls = [
//   'https://api.github.com/users/iliakan',
//   'https://api.github.com/users/remy',
//   'https://api.github.com/users/jeresig'
// ];

// // map every url to the promise of the fetch
// let requests = urls.map(url => fetch(url));

// // Promise.all waits until all jobs are resolved
// Promise.all(requests)
//   .then(responses => responses.forEach(
//     response => alert(`${response.url}: ${response.status}`)
//   ));

// 
// Promise.all([
//   new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
//   new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
//   new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
// ]).catch(alert); // Error: Whoops!


// summary of promise API
// //Promise.all(promises) – waits for all promises to resolve and returns an array of their results. If any of the given promises rejects, it becomes the error of Promise.all, and all other results are ignored.
// Promise.allSettled(promises) (recently added method) – waits for all promises to settle and returns their results as an array of objects with:
// status: "fulfilled" or "rejected"
// value (if fulfilled) or reason (if rejected).
// Promise.race(promises) – waits for the first promise to settle, and its result/error becomes the outcome.
// Promise.any(promises) (recently added method) – waits for the first promise to fulfill, and its result becomes the outcome. If all of the given promises are rejected, AggregateError becomes the error of Promise.any.
// Promise.resolve(value) – makes a resolved promise with the given value.
// Promise.reject(error) – makes a rejected promise with the given error.


// PROMISIFICATION

// let loadScriptPromise = function(src) {
//   return new Promise((resolve, reject) => {
//     loadScript(src, (err, script) => {
//       if (err) reject(err);
//       else resolve(script);
//     });
//   });
// };


// ASYNC / AWAIT
// The word “async” before a function means one simple thing: a function always returns a promise. 
// async function f() {

//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("done!"), 1000)
//   });

//   let result = await promise; // wait until the promise resolves (*)

//   alert(result); // "done!"
// }

// f();



// async function showAvatar() {

//   // read our JSON
//   let response = await fetch('/article/promise-chaining/user.json');
//   let user = await response.json();

//   // read github user
//   let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
//   let githubUser = await githubResponse.json();

//   // show the avatar
//   let img = document.createElement('img');
//   img.src = githubUser.avatar_url;
//   img.className = "promise-avatar-example";
//   document.body.append(img);

//   // wait 3 seconds
//   await new Promise((resolve, reject) => setTimeout(resolve, 3000));

//   img.remove();

//   return githubUser;
// }

// showAvatar();