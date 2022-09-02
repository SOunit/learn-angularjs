var Person = function (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
};

// logPerson function depends on Person constructor function
function logPerson() {
  var john = new Person("John", "Doe");
  console.log(john);
}

function logPersonDI(person) {
  console.log(person);
}

// dependency
logPerson();

// Dependency Injection
var john = new Person("John", "Doe");
logPersonDI(john);
