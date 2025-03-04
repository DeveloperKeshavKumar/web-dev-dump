/*
    -> Why Languages?
    -> Interpreted V/S Compiled Languages
    -> Why JS >> Other languages in some use cases
    -> Static v/s Dynamic Languages
    -> Single threaded nature of JS ==> A single core can not run two programs at same time
    -> Variables (var, let, const), Hoisting
    -> Simple primitives in JS (number, strings, boolean) , typeof
    -> Conditionals, == (Checks value only) v/s === (Checks value + dataType), 
    -> Looping structures, for, while, do-while, for-in, for-of, forEach
    -> Complex primitives in JS (arrays, objects)
    -> DRY => DON'T REPEAT YOURSELF
    -> Functions in JS
    -> Some Practice Questions:
            {1.} Wrire a func. tha finds sum of two numbers
            {2.} Write another function that displays output in pretty format
            {3.} Write one more function that displays result in passive form.
            NOTE:- Call only one function in such way that all the above functions be called
*/

/*
    {1.} Create a counter that counts 30 to 0
    {2.} Calculate the time it takes between a setTimeout call and inner call function actually running
    {3.} Create a terminal Clock [HH:MM:SS]
*/

/*
    what happen if we run this program:
    let sum = 0;
    for(let i=0; i<10000000000000; i++){
        sum += i;    
    }

    console.log(sum)
*/

/*
    -> String Methods ==> .length, .indexOf(), .lastIndexOf(), .slice(start, end) => [start, end)
    .substr(start, len) => gives the string from index start and of length = len => outdated now
    .replace(old, new) => if old is not present, it will return same string
    .split(word) => splits string using word as delimeter and returns an array
    .trim() => removes whitespaces from beg and end
    .toUpperCase(), .toLowerCase() => to change the case of string
    .startsWith(), .endsWith()

    // Try to Capitalize a string. 

    const val = "KeshavKumar"
    let ans1 = val.substr(2,5); // shavK
    let ans2 = val.slice(2,5); // sha
*/


/*
    -> Number Methods ==> parseInt(), parseFloat() => global function
        > parseInt("26")   //26
        > parseInt("2ps")  //2
        > parseInt("2.31") //2
        > parseInt("qw2.31qq") //NaN
*/

/*
    -> Arrays Methods ==> .push(elem) => insert at rear, .unshift(elem) => inserts at front, 
    .pop() => deletes from rear/end, .shift() => deletes from front/beg 
    .concat(SecondArray)

    .slice(), .splice(start, delCount, item1, item2 ..... itemN)


    function logthing(str){
        console.log(str)
    }
    .forEach(logthing) => logs to the console for each elem of array
    .join() => 

    function signature => refers to the part of a function that specify how the function is called.

    // map, filter, find, sort 
    arr = [1,2,3,4,5]
    arr.map(elem=>elem*2) -> [2,4,6,8,10]

    function filterLogic(n){
        if(n%2==0) return true;
        else return false;
    }
    arr.filter(filterLogic)
*/



/*
    SOME ADVANCED STUFF IN JS 
    -> Callback Functions, Anonymous Functions,Call stack, Event loop, callback queue, Asynchronous Programming
    -> Callback Hell and Promises, IIFEs
*/

// what does synchronous mean? Together, One after other, Sequential, Only one thing happening at a time.
    // e.g.: Ist boil water, then cut vegeies, then take masala, then add masla, then add vegeies, the add maggie
// what does asynchronous mean? Opposite of Synchronous, Happens in parts, Context Switching between multiple things.
    // e.g.: Boil Water, while water is boiling cut vegeies, add vegies, while vegeies are being cooked, take masala
    //       add masala, add maggie

/* Human brain and body is single threaded
    1. We can only do one thing at a time.
    2. but we can context switch b/w tasks or delegate to other people.

    JS can do same thing using Async Programming
*/


// Until now, we've seen only sync func. means we've to wait for function to compute somehting before going to the next line.
// Let's, introduce Async Func. (setTimeout)

function findSum(n){
    let sum = 0;
    for(let i=1; i<=n; i++){
        sum += i;
    }

    return sum;
}

function findSumTill100(){
    console.log(findSum(100));
}

function syncSleep(){
    // Synchronously, sleeping the thread, Actually it is busy doing some work but still giving hint of sync. sleep.
    let a = 1;
    for(let i=0; i<=1000000000; i++){
        a++
    }
}

// syncSleep(); findSumTill100(); // Synchronous sleep, Umcomment this line and comment the next line to check difference.
setTimeout(findSumTill100, 1000); // calling aysnc func., Now, the control will go to the next line , but after 1000 ms 
// control will come back to this statement and and run the statement. It is like We handed over this task to someone else
//  and he'll sent back do this task after 1sec. But We donot need to wait and watch it for 1sec and then move to the nextLine.
console.log("Hello World");

// Common async func. => setTimeout, setInterval (really??), fs.readFile, Fetch

// Go to Filesystem.js

// Promises => are syntactical sugar that make this code slightly more readable.