const person = {
  name: "Anna",
  age: 42,
  status: "offline"
};
const { name, age } = person;
console.log(name, age);

// ----------------------------------

const person2 = {
  name: "Gino",
  age: 12,
  status: "offline"
};

const { name: name2, age: age2 } = person2; // How would I do this?
console.log(name2, age2);

// ----------------------------------
// Object deconstructing
let users;
let count;

const response = { users: [1, 2], count: 2 };

if (response) {
  users = response.users; // alternative?
  count = response.count;
}

console.log(count, users);

// const names = ['Jamie', 'Alex'];
// const allNames = ['Lucy', ...names];
