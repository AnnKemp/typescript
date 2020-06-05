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

let user = new Student("Jane", "M.", "User");

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

// We can mix different types into a union, and
// what we're saying is that the value is one of those types
// Unions can sometimes be undermined by type widening,
// for example:

type WindowStates = "open" | "closed" | "minimized" | string; // als je er in visual studio over WinddowState hovert dan krijg je als type "string" te zien en dat betekent dus dat je hier problemen hebt met widening

// If a union is an OR, then an intersection is an AND.
// Intersection types are when two types intersect to create
// a new type. This allows for type composition.

interface ErrorHandling {
    success: boolean;
    error?: { message: string };
}

interface ArtworksData {
    artworks: { title: string }[];
}

interface ArtistsData {
    artists: { name: string }[];
}

// These interfaces can be composed in responses which have
// both consistent error handling, and their own data.

type ArtworksResponse = ArtworksData & ErrorHandling;
type ArtistsResponse = ArtistsData & ErrorHandling;

// For example:

const handleArtistsResponse = (response: ArtistsResponse) => { // deze vorm moet ik nog eens opzoeken.checken
    if (response.error) {
        console.error(response.error.message);
        return;
    }

    console.log(response.artists);
};

// A mix of Intersection and Union types becomes really
// useful when you have cases where an object has to
// include one of two values:

interface CreateArtistBioBase {
    artistID: string
    thirdParty?: boolean // vraagteken betekent niet verplicht
}

type CreateArtistBioRequest
    = CreateArtistBioBase & { html: string } | { markdown: string } // dit is een interessant voorbeeld!

// Now you can only create a request when you include
// artistID and either html or markdown

const workingRequest: CreateArtistBioRequest = {
    artistID: "banksy",
    markdown: "Banksy is an anonymous England-based graffiti artist..."
}

/* const badRequest: CreateArtistBioRequest = { // deze geeft foutmeldingen omdat er geen markdown bij is.
    artistID: "banksy",
}*/

document.body.textContent = greeter(user);
