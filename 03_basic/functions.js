function isloggedin(username){
    // if(!username){
    //     console.log("please enter username...");
    //     return ;
    // }
    return `${username} just logged in!!`;
}

// console.log(isloggedin("hitesh"));
// console.log(isloggedin(""));
// console.log(isloggedin());      //undefined


//rest operator = > ...variableName
function calculateCartPrice(...num){
    return num
};
function calculateCartPrice(var1 , var2 , ...num){       // so here var1 = 200,var2 = 400 , num = [500,2000]
    return num
};
console.log(calculateCartPrice(200,400,500,2000));       //  [ 200, 400, 500 ]

const user = {
    username : "Ram",
    price : 199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user);
handleObject({
    username : "Hitesh",
    price : "400"
})

const myArray = [200,400,700,300];
function handleArray(getArray){
    return getArray[1];     //return 2nd value 
}
console.log(handleArray(myArray));
console.log(handleArray([947,373,475,62]));