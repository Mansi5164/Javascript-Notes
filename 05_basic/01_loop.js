const arr = [1,2,3,4,5];
for (const i of arr) {
    // console.log(i);    
}
const greeting = "hello world!";
for (const i of greeting) {
    // console.log(`Each char is ${i}`);    
}

//Maps
const map = new Map();
map.set('IN','india');
map.set('US','united States of America');
map.set('FR','france');
console.log(map);

for (const key of map) {
    console.log(key);
}
for (const [key,value] of map) {
    console.log(key,":",value);
}


const myObject = {
    "Game1" : "NFS",
    "Game1" : "FF"
};
//for of loop not working on objects 
for(const i of myObject){
    console.log(i);
}