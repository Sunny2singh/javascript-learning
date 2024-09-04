
 
function sayMyName() {
    console.log("S");
    console.log("U");
    console.log("N");
    console.log("N");
    console.log("Y");
}
//sayMyName()

/*function addTwoNumber(number1,number2) {
console.log(number1 + number2);
}*/
//addTwoNumber(4,3)
//const result = addTwoNumber(3,4)
//console.log("Result:", result);   // to fix undefined value 

function addTwoNumber(number1,number2) {
//let result = number1+number2
//return result
//return number1+number2
}

const result = addTwoNumber(3,4)
//console.log("Result:", result);


function LogginUserMessage(username = "tiku"){
if(! undefined){
console.log("please enter a username");
return
}

return `${username} Just logged in`
}

//console.log(LogginUserMessage("sunny"))
console.log(LogginUserMessage())