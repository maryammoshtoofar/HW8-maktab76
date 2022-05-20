// Ex.7
// Create an object named dog from the sample object below using the prototype
// inheritance

let animal = {
  speaks: true,
  walk() {
    console.log("Animal walks");
  },
};

const dog = Object.create(animal);
console.log(dog);
