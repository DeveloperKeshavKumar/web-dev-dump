// function getdata(dataId, getNextData){
//     setTimeout(()=>{
//         console.log("Data found with Id: "+ dataId);
//         if(getNextData) getNextData();
//     }, 2000)
// }

// getdata(1)
// getdata(12)
// getdata(123)

// This will immediately print 1, 12, 123. coz all getData() calls were gone into call stack immediately, and 
// That's why all are executing immediately. But We want that each call run after 2s of prev call.

// This is where callbacks help:
// console.log("Callbacks");
// getdata(1,()=>getdata(12,()=>getdata(123)))

// But if there are a lot of callbacks, then there occurs Callback Hell.
// Callback Hell: Nested callbacks stacked below one another forming a pyramid of DOOM.
// It makes programming difficult to understand and manage.
//  To solve Callback Hell, we use Promises:


// Promise is for "eventual" completion of task either (resolve or successfully)  or (rejected or failed)

// let promise = new Promise(function(resolve, reject){
//     console.log("I am a promise");
//     // resolve("success")
//     // reject("Error Occurred")
//     // Pending
//     // Resolved
//     // Rejected
// })

// console.log(promise)

function getData(dataId ){
    return new Promise(function(resolve, reject){
        setTimeout(()=>{
            console.log("Data found with Id: "+ dataId);
            resolve("Success")
            reject("Error Aa Gaya!")
        }, 2000)
    })
}


// console.log("Fetching data 1 ....")
// let promise = getData(1);
// console.log(promise); // Promise not resolved yet
// promise.then((res)=>console.log(res)).catch(err=>console.log(err)); // Promise is resolved and then .then() is executed
// promise.then(()=>{
//     console.log("Fetching data 2 ....")
//     let p2 = getData(12).then(()=>{
//         console.log("Fetching data 3 ....")
//         getData(123)
// })})

// A Nice way of doing above is

// getData(1).then(()=>getData(2)).then(()=>getData(3)).then(res=> console.log(res));

// Promise Chaining:  res.then().then().then().catch().finally() 

// Async-Await 
// Async func always return a promise
// Await pauses execution of its surrouding async function until the promise is settled

// function hello(){
//     return new Promise(function(resolve, reject){
//         setTimeout(()=>{
//             console.log("Hello!")
//             resolve(200)
//         },2000)
//     })
// }
//  async function getGreet(){
//     await hello();
//     await hello();
// }

// getGreet();

// To implemet async-await for our func. getData()

async function main(){
    await getData(1);
    await getData(12);
    await getData(123);
}

// Much more better way.

// main(); // this is a unnecessary call, I mean we don't actually doing a great thing using this call. 
// To get rid of this unn........ call we use IIFEs.

// IIFE: Immediately Invoked Function Expression => is a func. that is called immediately as soon as it is defined.

(async function(){
    await getData(1);
    await getData(12);
    await getData(123);
})(); // But only one time called, to call again we need to duplicate this.

