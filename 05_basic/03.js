const coding = ["js","cpp","java","py"];
// coding.forEach(function(value){
//     console.log(value);
// })
// coding.forEach( (value) => {
//     console.log(value);
// })

// function printMe(value){
//     console.log(value);
// }
// coding.forEach(printMe);

// coding.forEach( (item,index,arr) => {
//     console.log(item,index,arr);
// })

const myCoding = [
    {languagName : "javascript",fileName : "js"},
    {languagName : "C++",fileName : "cpp"},
    {languagName : "python",fileName : "py"}
]
// myCoding.forEach( (item) => {
//     console.log(item);
//     console.log(` languageName : ${item.languagName} , filename : ${item.fileName}`);
// })
myCoding.forEach( (item) => {
    console.log(item.fileName);
})