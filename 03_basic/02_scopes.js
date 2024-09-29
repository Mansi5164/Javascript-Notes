let a = 5;      // working in block scope
const b = 20;
var c = 30;     //var is global datatype

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "hitesh";

    function two(){
        const website = "youtube";
        console.log(username);
    }
    // console.log(website);

    // two();       //error
}
one();

if(true){
    const username = "hitesh";
    if(true){
        const website = " youtube";
        // console.log(username + website);
    }
    // console.log(website);       //throw error
}
// console.log(username);      //throw error



// ++++++++++++++++++++++ INTERESTING ++++++++++++++++++++++++

function addOne(value){     //this function can be accessed anywhere
    return value+1;
}
addOne(5);

const addTwo = function(num){       //we cannot access this function before declaration
    return num+2;
}

addTwo(5);