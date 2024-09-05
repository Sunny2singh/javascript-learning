
 
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
//console.log(LogginUserMessage())

function calculateCartPrice(val1, val2, ...num1){
    return num1
}
// ... is also called as rest and another name is spread 
console.log(calculateCartPrice(200 , 400, 600, 2000))

// ** how to pass object in function

const User = {
    userName : ("Sunny"),
    Price : 199
}

function handleObject(anyObject){
    console.log(`userName is ${anyObject.userName} and price is ${anyObject.Price}`)
}
//handleObject(User)

// Direct Object Without passing object

handleObject({
    userName:("sunny"),
    Price:299
})

// Direct Array

const newArray = [100 , 300 , 400, 200]

function returnSecondValue(getArray){
    return getArray[3]
}
//console.log(returnSecondValue(newArray));

console.log(returnSecondValue([100, 300, 400, 200]));
