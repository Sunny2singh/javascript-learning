//  (IIFE): Immediately Invoked Function Expression.

(function chai () {
    // named iife
    console.log(`DB CONNECTED`);
}) ();


((name) =>{
    console.log(`DB CONNECTED TWO ${name}`);  
})
(`Sunny`)