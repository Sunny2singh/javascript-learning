//********************** this is outdated******************************

const name = "SunnySingh"; 
const repoCount = " 50";

//console.log(name + repoCount + " value");

//********************** SECOND WAY ***************************************

console.log(`My Name Is ${name} And My Repo Count is ${repoCount}`);

const gameName =  new String("sunny")

//console.log(gameName[0]);
//console.log(gameName.__proto__);
//console.log(gameName.toUpperCase());
//console.log(gameName.length);
//console.log(gameName.charAt(`4`));
//console.log(gameName.indexOf(`y`));

const newString = gameName.substring(0,3)
console.log(newString);

const anotherString = gameName.slice(-3,4)
console.log(anotherString);

const newStringOne = "    hello world!     "
console.log(newStringOne.trim( "    hello world!     "));

const url = "https://sunnysingh.com/sunny%50singh"

console.log(url.replace(`%50`,`-`));

console.log(gameName.split(`-`));

