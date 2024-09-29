const user = {
    username :"hitesh",
    price : "999",
    welcomeMessage : function (){
        console.log(`${this.username}, wecome to website!!`);
        console.log("inside this : ",this);     //this => this current context ki baat krta hai 
    }
}

// user.welcomeMessage();
// user.username = "Mansi";
// user.welcomeMessage();

// console.log(this);      //current context is empty 

// function chai(){
//     let username = "hitesh";
//     console.log(this.username);     //its output is undefined .... this.variableName works only in objects
// }
// chai();


//ARROW FUNCTION

const addTwo = (num1,num2) => {
    return num1+num2;
}
console.log(addTwo(2,3));

//implicit return in arrow function 

const mul = (num1,num2) => (num1*num2);     //agar hmm yaha per curly brackets lgayenge to return keyword ka use krna pdega otherwise agr hmm round brackets ka use krr rahe hai then no need of return keyword 
console.log(mul(3,4));

//how to return objects in implicit arrow functions 
const implicitFunc = () => ({username : "Mansi",age : "18"});       //yaha per curly parenthesis + round brackets are mustttt...
console.log(implicitFunc());