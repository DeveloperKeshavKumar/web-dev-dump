/*
    Normal Syntax:
    
    function asyncFunc(){
        return new Promise(function(resolve){
            // do some async logic, but for now simply resolving
            resolve("Done")
        })
    }
    
    function main(){
        asyncFunc().then(function(val){
            console.log(val);
        })
    }
    
    main();
*/


// Async-Await Syntax

function asyncFunc(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("Done")
        }, 3000)
    })
}

async function main(){
    // no callbacks, no .then() syntax
    const val = await asyncFunc();
    console.log("Hello")
    console.log(val);
    //  Now we do not need to write those ugly .then() 

    // Now "Hello" is not printing immediately, as it was in .then()

    //  does it mean, the thread is busy at await for 3 secs and no Async stuff is happening
    // Answer is NO; coz the await is waiting there and the other statement is in the main func too.
    //  And this is bcoz Developer might need the data from this API which will be used later
}

/*
    async function main(){
        asyncFunc().then(function(val){
            console.log(val);
        })
        console.log("Hello2")
    }
*/
main();
// But it we add more lines Here, 
console.log("After Main()"); // it will run, without waiting for the main() to get fully executed.

// clear??


// Why declared main() func. -> coz await is only valid in async func.
// const val = await asyncFunc();
//     console.log("Hello")
//     console.log(val);


// CallBack Syntax, Promise Syntax, Async-Await Syntax All do same thing But People Love last one and is used more. ;) ;)