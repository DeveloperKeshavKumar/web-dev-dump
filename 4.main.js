function sum(a,b){
    let result = a+b;
    return result;
}

function displayResult(data){
    console.log("Result of sum is: "+ data);
}

function displayPassive(data){
    console.log("Sum's result is: "+data);
}

/**  Way 1: 
        let ans = sum(1,2);
        displayResult(ans);

    What if allowed to call only one function and That func. has to call displayResult or displayPassive? 
    How to do this?
    
    Way 2:
        After updating the sum func. 
        sum(a,b, fnToCall){
            let result = a+b;
            return fnToCall(result);
        }

        sum(1,2, displayPassive)
        // Prinitng undefined, but Why??
        console.log(sum(1,2,displayResult));

        Let's Understand
*/


function calculate(a,b,type){
    if (type == 'sum') return a+b;
    else if (type == 'diff') return a-b;
    else if (type == 'mul') return a*b;
    else if (type == 'div') return a/b;
    else return "Out of Basic Arithmetic Operations."
}

function calculateAgain(a,b, fntoCall){
    //  This is how Callback works. 
    // Callback means calling a function in backside, not calling back to user.
    return fntoCall(a,b);
}

function diff(a,b){
    return a-b;
}

function mul(a,b){
    return a*b;
}

function div(a,b){
    return a/b;
}

let ans = calculate(1,2,'mul');
// console.log(ans);

ans = calculateAgain(3,2,div);
// console.log(ans)

// Another try:

function greet(){
    // console.log("Namaste JavaScript");
}
setTimeout(greet, -9);

/** 

    // May be written something like:
    function setTimeout(funcToExecute, time){
        // Some internal implementation 
        sleep(time)
        funcToExecute(); 
    }

    // similarly, SetInterval
    function SetInterval(funcToExecute, duration){
        // Implementation for duration 
        while(true){
            sleep(duration)
            funcToExecute();
        }
    }
*/

function square(n){
    return n*n;
}

function sumOfSquares(a,b){
    let val1 = square(a);
    let val2 = square(b);

    return val1 + val2;
}

// console.log(sumOfSquares(2,4));

function cube(n){
    return n*n*n;
}

function sumOfCubes(a,b){
    let val1 = cube(a);
    let val2 = cube(b);

    return val1 + val2;
}

// console.log(sumOfCubes(2,4));

// Is DRY being voilated here ?

function sumOfSomePower(a,b, callback){
    console.log(callback);
    let val1 = callback(a);
    let val2 = callback(b);

    return val1 + val2;
}

console.log(sumOfSomePower(2,4,square));
console.log(sumOfSomePower(2,4,cube));
console.log(sumOfSomePower(2,4,function /* power4*/ (n){ return n*n*n*n}));

