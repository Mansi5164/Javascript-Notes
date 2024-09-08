//how to declare constants 
const accountId = 144553
// accountId = 2;  //not allowed
// console.log(accountId); //it gives an error because we can not change constant value

//let is global variable
let accountEmail = "mansi123@gmail.com"

//var datatype --> its validity is only in curly braces because of issue in block scope and functional scope
var accountPass = "12345"
accountCity = "Jaipur"

//when are only declare variable and no any value is assigned to variable then it prints 'undefined'
let accountState;

accountEmail = "mgupta1234@gmail.com"
accountPass = "21212121"
accountCity = "Punjab"


//to print data in tabular form
console.table([accountId,accountEmail,accountPass,accountCity,accountState])