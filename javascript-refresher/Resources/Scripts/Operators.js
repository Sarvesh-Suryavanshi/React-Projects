console.log(10 + 2);
console.log(10 / 2);
console.log(10 * 2);
console.log(10 - 2);

console.log("hello" + " " + "world");

// === is used to check equality. Returns boolean value
console.log(10 === 2);
console.log(2 === 2);

console.log(10 > 2);
console.log(10 < 2);

// Spread operator

const hobbies = ["cooking", "hiking", "dancing"];
const newHobbies = ["drawing"];
// using ... spread operator below
const mergedHobbies = [...hobbies, ...newHobbies];
console.log(mergedHobbies);

const user = {
  name: "Sam",
  age: "Age",
};
const extendedUser = {
  isActive: true,
  ...user,
};
console.log(extendedUser);
