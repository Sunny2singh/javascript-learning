// Link To Read About Temporal https://tc39.es/proposal-temporal/docs/index.html

let myDate = new Date();

//console.log(myDate.toString());

let anotherDate = new Date("30 august 2024 20:59 GMT");
//console.log(anotherDate);
//console.log(anotherDate.toString);
//console.log(anotherDate.toISOString);
//console.log(anotherDate.toLocaleDateString);
//console.log(anotherDate.toLocaleString);
//console.log(typeof anotherDate );


//let myCreatedDate = new Date(2021, 0, 25)
//let myCreatedDate = new Date(2021, 0, 25, 5, 3)
//let myCreatedDate = new Date("2022-01-21")           ***** YYYY/MM/DD
let myCreatedDate = new Date("09-25-2024")            // ***** MM/DD/YYYY
//console.log(myCreatedDate.toLocaleString());

// TIMESTAMP IS USED FOR EXECUTTING POLES,QUIZEZ,OR USED WHILE MAKING WEBSITE LIKE OYO, AND RESTUARANT FOR KNOWNING EXACT TIME OF ORDER

let MyTimeStamp = Date.now()

console.log(MyTimeStamp);
console.log(myCreatedDate.getTime());

