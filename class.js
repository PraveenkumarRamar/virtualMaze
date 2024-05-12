// Class

// 1 Constructor
// 2 get and set -> Access the instance(obj) variable

class User {

    static numberCounts = 0; //Static oethods only invoked by class Name
    constructor(name, age) {
        // instance(obj) variables
        this.name = name
        this.age = age
        User.numberCounts++
    }

    greet() {
        console.log(`Welcome Buddy ${this.name}`)
    }

    details() {
        console.log(`Name is ${this.name} and Age is ${this.age}`);
    }

    static displayTotalUsers() {
        console.log(`The total number of users is ${this.numberCounts}`);
    }

    get newGreet(){
        return `Hello name has been updated ${this.name}`;
    }
    set newGreet(a){
        return this.name = a
    }
}

let user1 = new User("Praveen", 23) // it constructs a obj only
let user2 = new User("Praveena", 20)
let user3 = new User("Raam", 23)
console.log(user3);

user1.greet()
user1.newGreet = "Praveenram"
console.log(user1.newGreet);

User.displayTotalUsers()


// Inheritance (acquiring properties of base class)


// Parent-child relationship 
// Base class

class ChildUser extends User {
    constructor(name, age) {
        super(name, age)
    }

    // Overriding
    greet() {
        console.log(`Good afternoon ${this.name}`);
        return this
    }
}

let test = new ChildUser("Praveena", 22)
console.log(test);

// method chaning
test.greet().details()


// Prototype

function Proto(name, age) {
    this.name = name;
    this.age = age;
}

Proto.prototype.showDetails = function(){
    console.log(`My Father name is ${this.name} and age of my father is ${this.age}`);
}

// Proto()

let test1 = new Proto("Ramar",56)
console.log(test1);
test1.showDetails();