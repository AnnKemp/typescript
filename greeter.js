var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
// when the type can be anything you use any
function debug(value) { }
;
debug("a string");
debug(23);
debug({ color: "blue" });
// typescript literals
var helloWorld = "Hello World";
var hiWorld = "Hi World"; // this is a string because it is let
// This function takes all strings
function allowsAnyString(arg) { }
;
allowsAnyString(helloWorld);
allowsAnyString(hiWorld);
// This function only accepts the string literal "Hello World"
function allowsOnlyHello(arg) { }
;
allowsOnlyHello(helloWorld);
allowsOnlyHello(hiWorld); // this gives an error-message
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("Jane", "M.", "User");
document.body.textContent = greeter(user);
