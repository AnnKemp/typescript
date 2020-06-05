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

// This lets you declare APIs which use unions to say it
// only accepts a particular literal:
function allowsFirstFiveNumbers(arg: 1 | 2 | 3 | 4 | 5){};
allowsFirstFiveNumbers(1);
//allowsFirstFiveNumbers(10); // this gives an error-message in the terminal

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
// At first glance, this rule isn't applied to complex objects.

const myUser = {
    name: "Sabrina"
};

// See how it transforms `name: "Sabrina"` to `name: string`
// even though it is defined as a constant. This is because
// the name can still change any time:

myUser.name = "Cynthia";

// Because myUser's name property can change, TypeScript
// cannot use the literal version in the type system. There
// is a feature which will allow you to do this however.

const myUnchangingUser = {
    name: "Fatma"
} as const;

// When "as const" is applied to the object, then it becomes
// a object literal which doesn't change instead of a
// mutable object which can.

//myUnchangingUser.name = "Raîssa"; // gives error in the terminal

// "as const" is a great tool for fixtured data, and places
// where you treat code as literals inline. "as const" also
// works with arrays:
const exampleUsers = [{ name: "Brian" }, { name: "Fahrooq" }] as const;

// Type unions are a way of declaring that an object
// could be more than one type.

type StringOrNumber = string | number; // dus het woordje type kan je echt wél expliciet gebruiken om het type te bepalen
type ProcessStates = "open" | "closed"; // een string met voor-bepaalde inhoud, in dit geval zijn allen "open" of "close" toegelaten
type OddNumbersUnderTen = 1 | 3 | 5 | 7 | 9; // een van de volgende getallen is toegelaten
type AMessyUnion = "hello" | 156 | { error: true }; // een string met "hello", het getal 156 of een complex object

let user = new Student("Jane", "M.", "User");

document.body.textContent = greeter(user);
