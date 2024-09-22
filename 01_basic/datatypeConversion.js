let score = "33abc";

console.log(typeof score);
console.log(typeof(score));

let valueInnumber = Number(score);
console.log(typeof valueInnumber);
console.log(valueInnumber);

// "33" => 33(number)
//"33abc" => Nan
// "true" => boolean (1)
//null => object(0)

let isloggedIn = true;

let booleanisloggedIn = Boolean(isloggedIn);
console.log(typeof booleanisloggedIn);

// 1=> true;  0 => false;
// "" => false;
// "hitesh" => true


let someNumber = 33;

let stringNumber = String(someNumber);
console.log(typeof stringNumber);
console.log(stringNumber);