const fs = require('fs');

// console.log("Hello, We are opening file")

// fs.readFile("a.txt", "utf-8", function(err, data){
//     console.log(data);
// })

// console.log("Hello, We Opened File")



// let a = 1;
// for(let i=0; i<=1000000000; i++){
//     a++
// }

// console.log("Program Ended");


// Even our Async func. is done, but if the control is doing something it will execute all those tasks then when it become
// idle, it will run the Aysnc. func., Not at the time Async. got resolved.

// latentflip.com/loupe


function ownReadFile(){
    console.log("Inside OwnReadFile");
    return new Promise(function (resolve){
        console.log("Inside promise");
        fs.readFile('a.txt', 'utf-8', function(err, data){
            console.log("Before resolve");
            resolve(data);
            console.log("After resolve")
        });
    });
}

// Monu will Synchronously return the promise immediately, he may or may not resolve this promise in future 
// But the data of the promise comes asyncly. and when it comes It reaches OnDone();

function onDone(data){
    console.log(data);
}

const a = ownReadFile()
console.log(a)
a.then(onDone);


