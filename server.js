function add(a, b) {
    return a + b;
}

class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello ${this.name}`);
    }
}

module.exports = {
    add,
    Person
};