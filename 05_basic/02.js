const myObject = {
    js : "javascript",
    cpp : "c++",
    RB : "Ruby",
    swift : "swift by apple"
}
for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["cpp","js","ruby","java","py"];
// for (const key in programming) {
//     // console.log(programming[key]);
// }

const map = new Map();
map.set('IN','india');
map.set('US','united States of America');
map.set('FR','france');
// console.log(map);
//not working this loop on map
for (const key in map) {
    console.log(key);
}