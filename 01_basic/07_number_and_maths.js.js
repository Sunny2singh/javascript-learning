const score = 400
console.log(score);


const balance = new Number(200);
//console.log(balance);

//console.log(balance.toString().length);
//console.log(balance.toFixed(2));

const anotherNumber = 234.8878

//console.log(anotherNumber.toPrecision(4)); 

//e.g: 1. if we use precision (3) in anotherNumber the output will be 235 will do round off 
//e.g: 1. if we use precision (4) in anotherNumber the output will be 
// 234.9 will do round off 


const Rupees = 10000000

//console.log(Rupees.toLocaleString(`en-IN`));

// other topic to view *max_value and *min_value and other two

//++++++++++++++++++++++++MATHS++++++++++++++++++++++++++++++++

console.log(Math)
/*
console.log(Math.abs(-4));
console.log(Math.round(4.65));
console.log(Math.ceil(4.1)); 
// ceil always give upper number for e.g:4.1 the output is 5

console.log(Math.floor(4.1)); 
// ceil always give upper number for e.g:4.9 the output is 4

console.log(Math.min(4, 33, 44,77)); //selects minimum value

console.log(Math.max(4, 33, 44,77)); //selects maximum value

console.log(Math.sqrt(25)); // use in removing square root */

console.log(Math.random());  //random always gives value between o to 1
console.log(Math.random()* 10);
console.log(Math.floor(Math.random()* 10)+ 1); 
// after multiplying with 10 and add 1 that will always give value 1 to 10 will not get 0

const min = 10
const max = 20


console.log(Math.floor(Math.random()*(max - min + 1)) + min )

// this formula will avoid 0 in the answer




