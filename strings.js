const name = "hitesh";  
const repoCount = 50;

//console.log(name+repoCount+"repo");

console.log(`Hello, My name is ${name} and my repo count is ${repoCount}`);    //this method is called string interpolation

const gameName = new String('Mansi');
console.log(gameName[0]);
console.log(gameName,__proto__);

// how to find length of a string
const UniName = "Chitkara University";
let len = UniName.length;
console.log(len);

// uppercase all alphabets of a string
console.log("University name in uppercase :",UniName.toUpperCase());

//to check at a given position which character is present 
console.log("Character at 5 is :",UniName.charAt(5));

//to check character is present at which position
console.log("Index of U is:",UniName.indexOf('U'));

//tolowercase a string
const lower = "CHITKARA UNIVERSITY";
console.log(lower.toLowerCase());

//use of substring => variableName.substring(start POS , end POS)
console.log(lower.substring(2,14)); //start is inclusive end is exclusive

// use of slice
console.log(lower.slice(0,7));

//use of trim
const newStringOne = "    Mansi     ";
console.log(newStringOne);
console.log(newStringOne.trim());

//replace 
let url = "https://login.chitkara%20testpad.com";
console.log(url.replace('%20' , '-'));

//to check anything is present in string or not
console.log(url.includes('chitkara'));

//split function => split(seperator)
const forsplit = "chitkara-university-rajpura";
console.log(forsplit.split('-'));