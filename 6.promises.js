// Promises declaration


//  3 states => peding, resolved, rejected
let p = new Promise(function(resolve){
    setTimeout(function(){
        resolve("Work Done");
    },1);
    
})

function callback(){
    console.log(p);
}
console.log(p);
p.then(callback);

d = new Promise(function(resolve){
    resolve("Hello"); // Place for the writer of async func.(e.g.: DB call, read a file, getPaneer) to do their magic 
    // and call resolve at the end with the data
})

d.then(function(){
    console.log(d);
    //.then gets called whenever the async function resolves(e.g. after reading file, after DB call etc.)
})

function myAsyncFunc(){
    return new Promise(function(resolve){
        resolve("Hi There!");
    });
}

const val = myAsyncFunc();
val.then(function(data){
    console.log(data);
})