console.log("Node is working");

const { add, Person } = require("./server");
 

console.log("Addition =", add(3, 4));

const p1 = new Person("ShivamSwaraj");
p1.greet();


