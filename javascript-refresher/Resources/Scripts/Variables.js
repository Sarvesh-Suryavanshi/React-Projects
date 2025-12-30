let userMessage = "Hello World";
let _userMessage = "_ Hello World";
let $userMessage = "$ Hello World";
let user_Message = "$ Hello_World";

console.log($userMessage);

$userMessage = "$ New Hello World";

console.log($userMessage);

const greetingMessage = "Have a great day ahead !!";
// greetingMessage = "Hello !!"; // Reassignment Not Allowed

console.log(greetingMessage);

// Objects

const username = "Sam";
const age = 24;

const user = {
  username: "Sam",
  age: 24,
  greet() {
    console.log("Hello !!" + this.username);
  },
};
console.log(user);
console.log(user.age);

// Class (Blueprint of object)

class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("hi !!");
  }
}

const student = new Student("Ram", 22);
console.log(student);
console.log(student.name);

// Arrays
const hobbies = ["running", "hiking", "cooking"];
console.log(hobbies);
console.log(hobbies[1]);
hobbies.push("drawing");

const index = hobbies.findIndex((item) => {
  return item === "cooking";
});

/* can also be written as
const index = hobbies.findIndex((item) => item === "cooking");
*/

console.log("Index - " + index);

const mapResult = hobbies.map((item) => {
  return " I love " + item;
});

console.log("Map Result - " + mapResult);

// Destructuring

const list = ["mango", "onion"];

let fruit = list[0];
let onion = list[1];

// or

const [firstname, lastname] = ["Arnav", "Surya"];
console.log(firstname);

const teacher = {
  teacherName: "Sarasvati",
  teacherAge: 34,
  subject: "Maths",
};

const tName = teacher.teacherName;
const tAge = teacher.teacherAge;

const { teacherName: teacherFullName, teacherAge } = teacher;

console.log(teacherFullName);
console.log(teacherAge);

// Function Argument Destructuring

function printTeacherDetails(teacher) {
  console.log("Teacher Name : " + teacher.teacherName);
  console.log("Teacher Age : " + teacher.teacherAge);
  console.log("Subject : " + teacher.subject);
}

function printTeacherDestructuredDetails({ teacherName, teacherAge, subject }) {
  console.log("Teacher Name : " + teacherName);
  console.log("Teacher Age : " + teacherAge);
  console.log("Subject : " + subject);
}

printTeacherDetails(teacher);
printTeacherDestructuredDetails(teacher);
