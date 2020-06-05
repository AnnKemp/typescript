var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
var user = new Student("Jane", "M.", "User");
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
//allowsOnlyHello(hiWorld); // this gives an error-message in the terminal
// This lets you declare APIs which use unions to say it
// only accepts a particular literal:
function allowsFirstFiveNumbers(arg) { }
;
allowsFirstFiveNumbers(1);
//allowsFirstFiveNumbers(10); // this gives an error-message in the terminal
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
// At first glance, this rule isn't applied to complex objects.
var myUser = {
    name: "Sabrina"
};
// See how it transforms `name: "Sabrina"` to `name: string`
// even though it is defined as a constant. This is because
// the name can still change any time:
myUser.name = "Cynthia";
// Because myUser's name property can change, TypeScript
// cannot use the literal version in the type system. There
// is a feature which will allow you to do this however.
var myUnchangingUser = {
    name: "Fatma"
};
// When "as const" is applied to the object, then it becomes
// a object literal which doesn't change instead of a
// mutable object which can.
//myUnchangingUser.name = "Raîssa"; // gives error in the terminal
// "as const" is a great tool for fixtured data, and places
// where you treat code as literals inline. "as const" also
// works with arrays:
var exampleUsers = [{ name: "Brian" }, { name: "Fahrooq" }];
// For example:
var handleArtistsResponse = function (response) {
    if (response.error) {
        console.error(response.error.message);
        return;
    }
    console.log(response.artists);
};
// Now you can only create a request when you include
// artistID and either html or markdown
var workingRequest = {
    artistID: "banksy",
    markdown: "Banksy is an anonymous England-based graffiti artist..."
};
var badRequest = {
    artistID: "banksy"
};
document.body.textContent = greeter(user);
