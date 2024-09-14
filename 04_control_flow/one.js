// control flow or logical flow

// if
//const isUserLoggedIn =true
//if (isUserLoggedIn) {
// this will execute
//}
   if (false) {
    // this will not execute till scope end
   } 

   // types of comparisons
//    < , > , <=, >= , == , != , === , !==

// const temperature = 29
// if (temperature === 31) {
//     console.log("less than 30"); 
// } else {
//     console.log("temperature is greater than 30");
// }
// console.log("execute");

// const score = 200
// if (score >100) {
//     const power = "fly"
//     console.log(`user power : ${power}`);
// }

// console.log(`user power : ${power}`);

// +++++++++++++++ SHORT HAND NOTESION +++++++++++++++++++

//let balance = 1000
// if (balance > 800) console.log("test"), console.log("test2");

//+++++++++++++++++++NESTED+++++++++++++++++++++

// let balance = 1000
// if (balance < 500) {
//     console.log("less than 500");   
// } else if (balance < 750) {
//     console.log("less than 750");  
// } else if (balance < 900) {
//     console.log("less than 900");  
// }
// else {
//     console.log("less than 1200");  
// }   

// const UserLoggedIn = true
// const debitCard = true

// if (UserLoggedIn && debitCard && 2 ===2) {
//     console.log("allow to purchase");
// }

const loggedInFromGoogle = true
const loggedInFromEmail = true

if (loggedInFromGoogle || loggedInFromEmail || true) {
    console.log("USER LOGGED IN");    
}