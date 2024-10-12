// const mynums = [1,2,3,4,5,6,7,8,9,10];

//foreach loop does not return anything 
// const value = mynums.forEach( (item) => {
    // console.log(item);
//     return item;
// } )
// console.log(value);

const mynums = [1,2,3,4,5,6,7,8,9,10];

// const nums = mynums.filter( (num) => num > 4 );
// console.log(nums);

const nums = [];

mynums.forEach( (num) => {
    if(num > 4){
        nums.push(num);
    }
} )
// console.log(nums);


const arr= [1,2,3,4,5,6,7,8,9];
let newnums = arr.map( (num) => num+=10);
console.log(newnums);