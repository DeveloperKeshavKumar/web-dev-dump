// DOM API is programming interfce for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents thr document as TREE of objects, each object represnts a part of the page.

function calculateSum(){
    const num1 = document.getElementById("num1").value;
    const num2 = document.querySelector('#num2').value;
    const res = document.getElementById("res-block");

    const sum = parseInt(num1) + parseInt(num2);

    console.log("num1:", num1, " num2: ", num2, " sum :", sum);
    res.innerHTML = "Sum is "+sum;
}

const h2s = document.getElementsByClassName('heading')

// Debouncing => Wait for some time (100 ms) to let the user finish typing then send the request.
let timeout; // let timeout = null
function debounceCalculateSum(){
    // Work :- Call calculateSum if itself not called for 100 ms.
    // or delay the call to caculateSum if I've not been called for 100 ms. & I've been called atleast once
    // setTimeout(calculateSum(),100)   this will send all requests but after 100 ms, the issue still persists.

    // but need to do something that if in 100ms again dCS() is called then clear prev. clock and start new clock.

    // Now main ques, How to cancel a call or clear settimeout => there is cleartimeout like settimeout which does this for us.

    // const timeout = setTimeout(calculateSum(),100)
    // clearTimeout(timeout);

    // Above 2 lines will clear the clock every time, So this will never call to CalculateSum()
    // but we want that if a new call comes then clear only prev clock and start a new clock

    // do one thing reverse the lines
    // let timeout; Why not declared here
    clearTimeout(timeout);
    timeout = setTimeout(()=>calculateSum(), 100)

    // Here are some edge cases too: 
    // 1. if called 1st time, WTH cleartimeout is clearing
    // 2. if the time is passed for any settimeout, then why it calls cleartimeout for expired settimeout

    // if (timeout !== null) clearTimeout(timeout);
    // timeout = setTimeout(() => {
    //     calculateSum();
    //     timeout = null;
    // }, 1000)
}