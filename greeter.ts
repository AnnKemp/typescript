class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}
// when the type can be anything you use any
function debug(value: any){};

debug("a string");
debug(23);
debug({ color: "blue" });

// typescript literals
const helloWorld = "Hello World";
let hiWorld = "Hi World"; // this is a string because it is let

// This function takes all strings
function allowsAnyString(arg: string){};
allowsAnyString(helloWorld);
allowsAnyString(hiWorld);

// This function only accepts the string literal "Hello World"
function allowsOnlyHello(arg: "Hello World"){};
allowsOnlyHello(helloWorld);
//allowsOnlyHello(hiWorld); // this gives an error-message in the terminal

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "User");

document.body.textContent = greeter(user);
