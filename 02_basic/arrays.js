const myarr = [0,1,2,3,4,5];
const heroes = ["shaktiman","naagraj"];

console.log(myarr[0]);

//ARRAYS METHODS:

//1. to insert an element at the end of an array
myarr.push(6);
myarr.push(7);
console.log(myarr);

//2. to delete an element from the end of the array
myarr.pop();
console.log(myarr);

//3. add an element at the beginning of the array
myarr.unshift(9);
console.log(myarr);

//4. remove an element at the beginning of the array
myarr.shift();
console.log(myarr);

//5. to check element is present in array or not  =>  its return type is boolean
console.log(myarr.includes(5));

//6. to check index of element 
console.log(myarr.indexOf(5));

//7. to find last index of element
console.log(myarr.lastIndexOf(5));

//to convert array into string we use join method
const newarr = myarr.join();
console.log("typeof 'myarr':",typeof myarr);
console.log(myarr);
console.log("typeof 'newarr':",typeof newarr);
console.log(newarr);


//IMPORTANT CONCEPT OF 'SLICE' AND ' SPLICE'
console.log("before slicing and splicing : ",myarr);
const myn1 = myarr.slice(1,3);    //In slice method start is inclusive where as end is exclusive... or jab hmm slice method ka use krte hai toh hmare original array per koi effect nahi pdta hai (means no manipulation on our original array)
console.log("slice 1-3:",myn1);
console.log("after slice :" ,myarr);

const myn2 = myarr.splice(1,3);    //splice method mein starting or ending dono inclusive hoti hai as well as splice method use krne se hmara original array bhi manipulate hojata hai means ek type se slice nikl krr print hojati hai nd left elements array me rehjate hai
console.log("splice 1-3:",myn2);
console.log("after splice :" ,myarr);
