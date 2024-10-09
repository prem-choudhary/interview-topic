class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log('Car started');
    }
}

const myCar = new Car('Toyota', 'Camry', 2020);
myCar.start(); 
// Output: Car started

// const x = 23
const x = 23
console.log(x) //  O/p SyntaxError: Identifier 'x' has already been declared


// Objects:
const car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2020,
    start: function() {
        console.log('Car started');
    }
};
car.start(); 
// Output: Car started


//  Encapsulation:

class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this._balance = balance; 
    }

    deposit(amount) {
        this._balance += amount;
    }

    getBalance() {
        return this._balance;
    }
}

const account = new BankAccount('John', 1000);
account.deposit(500);
console.log(account.getBalance()); // Output: 1500

// Polymorphism:

class Animal {
    speak() {
        console.log('Animal speaks');
    }
}

class Dog extends Animal {
    speak() {
        console.log('Woof!');
    }
}

class Cat extends Animal {
    speak() {
        console.log('Meow!');
    }
}

const animals = [new Dog(), new Cat()];
animals.forEach(animal => animal.speak());
// Output:
// Woof!
// Meow!


//  Inheritance:

