//+++++++++++++++++++++++++++++++++++ DATES AND TIMES ++++++++++++++++++++++++++++++++++++++
/*SOME POINTS:
1. type of date is 'object'.
2. month is start from 0 in javascript that's why we add 1 to get month number according to real world 
3. by using getTime or by declare Date.now() we get milseconds */

let date = new Date();
var fullmonth = date.toLocaleString('default',{month : 'long'});
var fullday = date.toLocaleString('default',{weekday : 'long'});
var minutes = date.getMinutes();
var seconds = date.getSeconds();
var hours = date.getHours();
var year = date.getFullYear();
var time = date.getTime();
var day = date.getDay();
var month = date.getMonth()+1;
console.log("Date:",date);
console.log("full month :",fullmonth);
console.log("full day:",fullday);
console.log("minutes:",minutes);
console.log("hours:",hours);
console.log("seconds:",seconds);
console.log("year:",year);
console.log("time:",time);
console.log("day:",day);
console.log("month:",month);

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toDateString());
// console.log(typeof myDate);     //object


// agr hmm apnii trff se koi date print krana chahte hai toh
//let d = new Date(2023,0,23);         // ( year , month , date )
let d = new Date("01/14/2023");
//console.log(d.toLocaleDateString());


let myTimestamp = Date.now();
// console.log(myTimestamp);
// console.log(d.getTime());
//to convert miliseconds in seconds
// console.log(Math.floor(myTimestamp/1000));
