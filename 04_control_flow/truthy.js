const userEmail = []

if (userEmail) {
    console.log("Got user email");   
} else {
    console.log("not got user email");
}

// Falsy Values

//  false , 0 , -0 , BigInt 0n , "" , null , undefined , Nan

// Truthy Values

// "false" , "0", " " , [] , {} , function() {}   

// if (userEmail.length === 0) {
//     console.log("araay is empty");  
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("object is empty");
}

/* 
false == 0  =====> true
false == `` =====> true
0 == ``     =====> true */

// Nullish coalescing operator (??) : Null, Undifined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 17
//  val1 = null ?? 17 ?? 20
 val1 = null ?? undefined ?? 20


// console.log(val1);

// Terniary Operator

// Condition ? true : false

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("less than 80") :
 console.log("more than 80");
 
