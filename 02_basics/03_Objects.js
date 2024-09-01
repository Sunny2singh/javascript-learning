// there two type to operate object

// *Singleton (object.create)  &
//*Object literals

const mySmb= Symbol ("key1")

const JsUser = {
    name: "sunny",
    [mySmb]: "key1",
    "full name": "Sunny Singh",
    age : 17,
    location : "mumbai",
    email:"sunny@google.com",
    isloggedIn: false,
    lastloggedinDays: ["tuesady","saturday"]
}

//console.log(JsUser.email)   // not a correct way to access object
//console.log(JsUser["email"]) // correct way to access object
//console.log(JsUser["isloggedIn"]);
//console.log(JsUser["full name"]);
//console.log(  JsUser[mySmb]);

JsUser.email= "sunny@chatgpt.com" // = means to change data
//Object.freeze(JsUser)  // After using freeze data will not change or will not accept
JsUser.email= "sunny@microsoft.com"
//console.log(JsUser);

JsUser.greting = function(){
console.log("Hello JS User");
}
JsUser.gretingtwo = function(){
    console.log(`Hello JS User,${this.name}`);
    }
console.log(JsUser.greting());
console.log(JsUser.gretingtwo());



// first always try to access with e.g: .email,.name etc
