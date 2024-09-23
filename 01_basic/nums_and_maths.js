const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);
console.log(balance.toFixed(2));   //fix two digits after decimal
console.log(balance.toString());   //it converts number to a string 

const num1 = 23.8954;
console.log(num1.toPrecision(3));

const num2 = 100000;
console.log(num2.toLocaleString());
console.log(num2.toLocaleString('en-IN'));  //it gives output with comma seperated according to india

console.log(num2.MIN_VALUE);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER);



// ++++++++++++++++++++++   MATHS  +++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-8));       //negative to positive
console.log(Math.round(4.6));
console.log(Math.ceil(4.3));    //top value
console.log(Math.floor(4.3));    //bottom value
console.log(Math.min(8,9,3,5,1)); //gives minimum value
console.log(Math.max(8,9,3,5,1)); //gives maximum value


console.log(Math.random());  //gives values between 0 to 1
console.log((Math.random()*10)+1);  //gives values between 1 to 9
console.log(Math.floor(Math.random()*10)+1);

const min = 10;
const max = 20;

//we wants to print any random number between 10 and 20
console.log(Math.floor((Math.random() * (max - min+1)) + min));