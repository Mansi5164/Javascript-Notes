const marvel_heros = ["thor","ironman","spiderman"];
const dc_heros = ["superman","flash","batman"];


//by applying push method on marvel heros with dc heros
marvel_heros.push(dc_heros);

console.log(marvel_heros);      //[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
console.log(marvel_heros[3][1]);   //output is flash


// concatenate two arrays : it returns new array
const all_heros = marvel_heros.concat(dc_heros);
console.log(all_heros);


//SPREAD two or more arrays => [...array1Name , ...array2Name ,...so on];
const all_new_heros = [...marvel_heros,...dc_heros];
console.log(all_new_heros);


const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

//flat() : it returns an array with all subarray elements
const real_anotherArray = anotherArray.flat(Infinity) ; 
console.log(real_anotherArray);


//check it is array or not 
console.log(Array.isArray(marvel_heros));  //it return true because it is array
console.log(Array.isArray("Akshay"));       // it returns false because it is not an array


//to convert into array
console.log(Array.from("Akshay"));     //[ 'A', 'k', 's', 'h', 'a', 'y' ]
console.log(Array.from({name : "mansi"}));      //it returns always empty array


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score2));