/*ajj ki javascript mein or 10 saal pehle likhi gayi javascript mein bhtt difference hai
1. pehle ki javascript mein classes module arrow function ye sab nahi hua krte the lekin abhi hai...
lekin abhi bhi bht saara code purane tarike se likha gaya hai l
javascript ki commity ya jo organization thi vo nahi chahti thi ki purana code khrb hojaye kyoki hmm naya code use krre hai 
toh jab hmm naya code use krre hai toh purana+naya pura code new ki trhh treat kiya jayega by using "use strict"

*/
"use strict"; // treat all js code as a new version

//alert("hello"); // it used in browser for pop up

let name = "Mansi";
let age = 18;
let isloggedIn = false;
let state ;
let CGPA = null;   //null is a object 

// console.log("type of null : ",typeof(null));       //object
// console.log("type of Mansi : ",typeof("Mansi"));    //string
// console.log("type of 18 : ",typeof(18));  //number
// console.log("type of state : ",typeof(state));        //undefined
// console.log("type of undefined : ",typeof(undefined));  //undefined

//number => 2 to the power 53 approximate...like age
//bigInt
//string => ""...like name
//boolean => true OR false ... like isloggedIn
//null => standalone value (representation of empty value)... like CGPA
//undefined => when variable is declared but value is not defined then it prints... like state
//symbol => unique


/*
*********primitive datatypes*********
7 datatypes => string , boolean , number , null ,undefined , symbol, bigInt
*/

const score = 100;
const scoreValue = 100.3 ;
let userEmail;
let ID = Symbol('123');
let anotherID = Symbol('123');

console.log(ID === anotherID);

const bigNumber = 34565438973889013n;

/*
********Reference (Non primitive)*********
Array , objects , functions 
*/

//how to declare an array
const heroes = ["shaktiman","naagraj","jethalal"];

//declaration of object
console.log(heroes);
let marks = {
    "maths" : 87,
    "english" : 89,
    "science" : 90
}
//print objects => key value pairs
console.log(marks);
console.table([marks]);


//making function and store it into a variable
const myFunc  = function(){
    console.log("Hello World!!");
}
console.log(typeof myFunc);
myFunc();


//for more reference 
//https://262.ecma-international.org/5.1/#sec-11.4.3
/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object

*/
