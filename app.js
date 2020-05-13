//  Object.prototype
//  Person.prototype

//  Person constructor
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
    /* this.calculateAge = function() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    } */
}

//  Calculate age
Person.prototype.calculateAge = function () {
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

//  Get full name
Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}

//  Gets Married
Person.prototype.getsMarried = function(newLastName) {
    this.lastName = newLastName;
}

const john = new Person('John', 'Wick', '10-26-1962');
const mary = new Person('Mary', 'Johnson', 'Sept 28, 1983');

console.log(mary);
console.log(john.calculateAge());

console.log(mary.getFullName());

mary.getsMarried('Smith');
console.log(mary.getFullName());

console.log(mary.hasOwnProperty('firstName'));
console.log(mary.hasOwnProperty('getFullName'));