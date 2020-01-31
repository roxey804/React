class Person {
  constructor(name) {
    this.name = name;
    //this is like self in python
  }
  greet() {
    //this greet function displays an alert that says hello using the name we have defined in our const below
    alert(`Hello ${this.name}!`);
  }
}
class Student extends Person {
  constructor(name, level) {
    super(name);
    this.level = level;
  }
  greet() {
    console.log(`Hello ${this.name} from ${this.level}`);
  }
}
const o1 = new Person("Max");
const o2 = new Student("Tina", "1st Grade");//passing in arguments 
const o3 = new Student("Mary", "2nd Grade");
o3.greet = () => console.log('I am special!');
o1.greet();
o2.greet();
o3.greet(); //note the greet method for o3 has been specifically defined in line 25 therefore is different to o1+o2's.