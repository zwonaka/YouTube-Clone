r




function throttle(callback, delay) {

  let wait = false;

  return function() {

    if (!wait) {

      callback.apply(null, arguments);

      wait = true;
      setTimeout(function() {

        wait = false;

      }, delay);
    }
  }
}

function onScroll() {
  console.log("Scrolled");
}

window.addEventListener("scroll", throttle(onScroll, 1000));


function Animal(name) {
  this.name = name;
}
Animal.prototype.eat = function() {
  console.log(this.name + " is eating");
}

function Dog(name) {
  Animal.call(this, name);
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

let dog1 = new Dog("Buddy");
dog1.eat(); // Output: "Buddy is eating"



</scrip>