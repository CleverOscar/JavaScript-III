/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global object binding:  When using the 'this' keyword in the global scope it will point to the window object which is the browser
* 2. Implicit Binding: when a function is being called/invoked by a period/dot
* 3. New Binding: 'this' points to an object being created by the constructor function with the 'new' keyword
* 4.Explicit Binding: this occurs when .call(), .apply(), or .bind() are used on a function
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function windowBinding(){
  console.log(this);
}

windowBinding();

// Principle 2

// code example for Implicit Binding

const address = {
  city: 'Chicago',
  neighborhood: 'Wicker Park',
  zipcode: 60646,
  fullAddress: function(){
    return `This is where I live:
            City: ${this.city},
            Zipcode: ${this.zipcode},
            Area: ${this.neighborhood}`
  }
}

console.log(address.fullAddress());

// Principle 3

// code example for New Binding

  function Person(name){
    this.name = name.name;
    this.from = name.from;
    this.born = name.born;
  }

  const oscar = new Person({name: 'oscar', from: 'Chicago', born: 'Joliet'});
  console.log(oscar);


// Principle 4

// code example for Explicit Binding

var roboStats = function () {
  console.log("my name is " + this.name + " my iq is " + this.iq);
};
var robot = {
  name: "willbur",
  iq: 195
};
roboStats.call(robot);
