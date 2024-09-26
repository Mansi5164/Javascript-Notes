/*objects declare in two types : 
1. Literals
2. constructor
*/

// jab bhi hmm objects ko literal ki trhh declare krte hai toh kbhi bhi singleton nahi bnta hai or constructor se jab bnega toh hmesha singleton he bnega

//object literals

const mySym = Symbol("key1");
const jsUser = {
    name : "Hitesh",        //key value pairs 
    age : 18,
    [mySym] : "mykey1",
    channel : "Chai aur code",
    email : "hitesh@google.com",
    isLoggedin : false,
    lastLoggginDays : ["Monday","Thursday" ,"Friday","Saturday"]
};

// console.log(jsUser);
// console.log(jsUser.email);
// console.log(jsUser["email"]);    //square brackets ke andr hme string ki trhh he likhna pdega otherwise it thorw an error
// console.log(jsUser[mySym]);      //symbol ko access krne ke liy esquare bracket ka he use krna pdega 

// jsUser.email = "hitesh@chatgpt.com";
// Object.freeze(jsUser);      //is statement ko likhne ke baad abb koi bhi changes propagate nahi honge 
// jsUser.email = "hitesh@microsoft.com";
// console.log(jsUser);

jsUser.greeting = function()
{
    console.log("Hello! JS user");
}
jsUser.greetingTwo = function()
{
    console.log(`Hello! JS user ${this.name}`);     //this keyword yaha per jsUser object ke name ko refer krr raha hai
}

console.log(jsUser.greeting);       //undefined
console.log(jsUser.greeting());
jsUser.greeting();
jsUser.greetingTwo();

