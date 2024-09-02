// const instaUser = new Object() * This is a singleton object
  // Non singleton object
  const instaUser = {}

 instaUser.id = "123abc",
 instaUser.name = "sunny",
 instaUser.isUserloggedIn = false 

//console.log(instaUser);

  const regularUser = {
    email : "sunny@goggle.com",
    fullName: { 
userfullname:{
    firstname: "Sunny",
    lastname : "Singh"
}
    }
  }  
    
 // console.log(regularUser.fullName.userfullname.firstname);
  
const obj1 = { 1: "a", 2:"b" }
const obj2 = { 3: "a", 4:"b" }
const obj3 = { 4: "a", 5:"b" }

//const obj4 = { obj1,obj2,obj3},   // least used
//const obj4 = Object.assign( {}, obj1,obj2,obj3)  //moderate used
//const obj4 = {...obj1,...obj2}  // spread is most used for merging
//console.log(obj4);

const user = [   
    {
        id : 1,
        email : "su@gmail.com",
    } ,
    {
        id : 1,
        email : "su@gmail.com"
    },
    {
        id : 1,
        email : "su@gmail.com"
    }
]
user[1].email
console.log(instaUser);
console.log(Object.keys(instaUser));
console.log(Object.values(instaUser));
console.log(Object.entries(instaUser)); // entries coverts into array and first show key and then value for e.g: name, `sunny`,

console.log(instaUser.hasOwnProperty(`isUserloggedIn`));




