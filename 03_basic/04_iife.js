//Imediately Invoked function Expression (IIFE)

(function chai(){
    //named iife
    console.log(`DB CONNECTED!`);
})();

// (function defintion) (Execution call)

//IIFE USE : jo function immediately execute hojaye + global scope ke pollution se problem hoti hai kayi baar toh global scope ke jo bhi variables hai ya declaration ha unke pollution ko htane ke liye hmne iife ka use kiya 

( () => {
    console.log(`DB connected!!`);
})();

//unnamed iife
( (name) => {
    console.log(`DB connected two ${name}`);
})('Hitesh');

(() => {
    console.log("HELLO EVERYONE!!");
})();