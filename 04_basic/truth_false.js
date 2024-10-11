//falsy values
//false , 0 , -0 ,BigInt 0n , "" , null , undefined , Nan

//Truthy values
// [], "false","0"," ",{} , function(){} , false ==0 , false == '' , 0 == '' 

// const userEmail = "";
// if(userEmail.length === 0){
//     console.log("user email is empty");
// }

// const userObj = {};
// if(Object.keys(userObj).length === 0){
//     console.log("object is empty");
// }

// nullish coalescing operator (??) : null defined 

let val1;
// val1 = 5 ?? 10;  //5
// val1 = null ?? 10;  // 10
// val1 = undefined ?? 15;
val1 = null ?? 10 ?? 10;

// console.log(val1);


//Ternary Operator : condition ? true : false
const iceTeaPrice = 100;
(iceTeaPrice > 80) ? console.log("more than 80") : console.log("less than 80");