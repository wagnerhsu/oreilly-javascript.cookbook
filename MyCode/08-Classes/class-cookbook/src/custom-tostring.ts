class Person {
  constructor(private firstName: string, private lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  toString() {
    return `${this.lastName}, ${this.firstName}`;
  }
}

console.group('custom-tostring');
const newPerson = new Person('Luke', 'Takei');

console.log('Manually call toString():');
console.log(newPerson.toString()); // 'Takei, Luke'

console.log('Show the default console representation:');
console.log(newPerson); // 'Person {firstName: "Luke", lastName: "Takei"}'

console.log('Use string templates and string concatenation:');
console.log(`The person is ${newPerson}`);
console.log(newPerson + ' is the person'); // eslint-disable-line prefer-template
console.groupEnd();

export {};
