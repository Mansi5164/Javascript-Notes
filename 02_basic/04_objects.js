//ojects Constructors

//both are same 
const tinderUser1 = new Object();
const tinderUser2 = {};
tinderUser2.id = "123abc";
tinderUser2.name = "Akshay";
tinderUser2.rollNo = "2310990483"

// console.log(tinderUser1);
// console.log(tinderUser2);


const anotherUser = {
    email : "mansi51@gmail.com",
    fullName : {
        userName : {
            firstName : "Mansi",
            lastName : "Garg"
        }
    }
}
// console.log(anotherUser.fullName);                      //{ userName: { firstName: 'Mansi', lastName: 'Garg' } }
// console.log(anotherUser.fullName.userName);             //{ firstName: 'Mansi', lastName: 'Garg' }
// console.log(anotherUser.fullName.userName.firstName);   //Mansi


const obj1 = {
    1 : "a",
    2 : "b",
    3 : "c"
}
const obj2 = {
    4 : "d",
    5 : "e",
    6 : "f"
}
const obj3 = Object.assign(obj1,obj2);      //agr hmm parenthesis nahi lgayenge toh obj1 source bnjayega yaha per 

// console.log(obj1);      //after assigning obj1 = { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }
// console.log(obj2);      //but obj2 is as in starting = { '4': 'd', '5': 'e', '6': 'f' }

const obj4 = Object.assign({} /*this parenthesis is target*/,obj1,obj2 /*these objects are source */);   // empty parenthesis => it is good representation.. and isse confirmly hmm keh skte hai hmara jo result hai vo new object mein he ayega

// console.log(obj3);          //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }
// console.log(obj4);


//but basically we use spread operator
const obj5 = {...obj1 , ...obj2};
// console.log(obj5);


//jab database se values ayegi
const user = [
    {
        id : "483",
        Name : "Akshay",
        email : "aksh@gmail.com"
    },
    {
        id : "484",
        Name : "Radha",
        email : "radha@gmail.com"
    },
    {
        id : "485",
        Name : "Ram",
        email : "ram@gmail.com"
    }
]

//if you want to print first user name , id and his/her gmail then
// console.log(user[0].Name);
// console.log(user[0].email);
// console.log(user[0].id);

// console.log(Object.keys(tinderUser2));      //it returns keys in array 
// console.log(Object.values(tinderUser2));
// console.log(Object.keys(user));
// console.log(Object.values(user));

// console.log(Object.entries(tinderUser2));       //every key value pair is represented in array 
// console.log(Object.entries(user));


//to check value is present or not
// console.log(tinderUser2.hasOwnProperty('name'));
// console.log(tinderUser2.hasOwnProperty('isloggedin'));

const course = {
    courseName : "JS-IN-HINDI",
    price : "999",
    courseInstructor : "Hitesh"
}

//destructure objects
const {courseInstructor : Instructor,courseName : name} = course;
console.log(Instructor);
console.log(name);

//JSON DATA 
// {
//     "name" :"hitesh",
//     "course ": "javascript",
//     "price" : "free"
// }