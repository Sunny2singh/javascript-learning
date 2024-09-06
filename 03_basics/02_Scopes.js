//var c = 300
//let a =300
if(true) {
    let a = 10
    const b = 20
  //console.log("INNER :", a);
  
}
//console.log(a);
//console.log(b);
//console.log(c);

//+++++++++++++++ NESTED SCOPE++++++++++++++++++

function one(){
   const userName = "Sunny"

   function two(){
    const website = "Youtube"
    //console.log(userName);
   }
   //console.log(website);
   two()
}
one()

if(true){
  const userName = "Sunny"

  if (userName === "Sunny") {
    const website = "youtube" 
    //console.log(  website +  userName);
    
  }
  //console.log(website);
 
}
//console.log(userName);

//++++++++++++++++++INTERESTING+++++++++++++++++++

console.log(addone(19))
function addone(num){
  return num + 1
}


const addtwo = function (num){
  return num + 2
}
console.log(addtwo(18))
