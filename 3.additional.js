/*
    -> Date Methods ===> Date is global class.
    let date = new Date();
     .getDate(), .getFullYear(), 
     .getMonth() // 0 based indexing so add +1 to get correct month. 
     .getYear()  // returns integer value repesenting local time - 1900 (e.g. 2024 -> 2024-1900 = 124)
     .getHours(), .getMinutes(), .getSeconds(), .getMilliseconds(), 
     .getTime() // returns time in millisecs since 1970


     .setDate(), .setFullYear(), .setMonth(), .setYear(), .setHours(), ..... so on.

     let newDate = new Date(2024, 8, 11)
*/


/*
    -> JSON Methods ===>
        const sampleJsonString = '{"Key":"Value","number":42, "nested":{"nestedKey":"nestedValue"}}'
        const parsedObj = JSON.parse(sampleJsonString);
        console.log("After JSON.parse(): \n", parsedObj);
        const jsonString = JSON.stringify(parsedObj);
        console.log("After JSON.stringify(): \n", jsonString);
        console.log(typeof(parsedObj) +" "+ typeof(jsonString));
*/

/*
    Math Class and its Methods ===> Math.round(value), 
        .ceil(val), .floor(val), .random() => (0,1) both exculded, .max(a,b,c,d,....), Math.min(a,b,c,d,....), .pow(val, 2) => val^2
        .sqrt(4) => 2
*/

/*
    -> Objects Methods ===> Object is a global class.
    Object.keys(obj) => returns array of keys
    Object.values(obj) => returns array of values
    Object.entries(obj) => returns array of [key, value]
    obj.hasOwnProperty(prop) => returns True or False

    Object.assign({}, obj, {key:value}); // Merge 2 objs
*/

const obj = {"Key":"Value","number":42, "nested":{"nestedKey":"nestedValue"}};
// console.log(Object.entries(obj))
// console.log(obj.hasOwnProperty('nestd'));
const obj2 = {"name":"Veer The Robot Boy"}
console.log(Object.assign({}, obj, obj2));