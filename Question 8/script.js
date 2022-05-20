// Ex.8
// Write a program with the constructor called Student that includes the name and gender
// fields of the fields
// 1. Create the studObj variable from the new Student and add the age field with the
// prototype
// 2. Create the studObj1 variable from the studObj2 and change value age field to 20
// with the prototype

function Student(name, gender, field) {
  this.name = name;
  this.gender = gender;
  this.field = field;
  Student.prototype.addAge = (newAge) => {
    this.age = newAge;
  };
}

const studObj1 = new Student("Maryam", "female", "math");
studObj1.addAge(27);
console.log(studObj1); //27

const studObj2 = Object.create(studObj1);
studObj1.addAge(20);
console.log(studObj2); //20
