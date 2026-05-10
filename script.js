let firstName = "Rewiesh";
let lastName = "Ramcharan";
let age = 25;
let isStudent = true;

let varName = "texval";
let varNumber = 123;
let varBoolean = true;

const testConst = "testConst";

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(isStudent);
console.log("Dit is een log console message.");
console.log("testConst => " + testConst);

console.log(firstName + " " + lastName);

console.log("After change:");
firstName = "John";
lastName = "Doe";

// testConst = "testConst2"; // This will throw an error

console.log(firstName + " " + lastName);


document.getElementById("title").textContent =
  "Mijn naam is " + firstName + " en ik ben " + age;

let exampleArray = ["a", "b", "c"];
let exampleArrayLength = exampleArray.length;
let exampleArrayLastIndex = exampleArrayLength - 1;

console.log(exampleArray);
console.log(exampleArrayLength);

// console.log(exampleArray[0]);
// console.log(exampleArray[1]);
// console.log(exampleArray[2]);
// console.log(exampleArray[exampleArrayLastIndex]);

for (let i = 0; i < exampleArray.length; i++) {
    console.log("Index " + i + " => " + exampleArray[i]);
}


// let exampleArrayPersons = ["John", "Jane", "Jack"];
// console.log(exampleArrayPersons);
// console.log(exampleArrayPersons[0]);
// console.log(exampleArrayPersons[1]);
// console.log(exampleArrayPersons[2]);
// console.log(exampleArrayPersons[exampleArrayPersons.length - 1]);


function sayHello() {
    // alert("Hello!");
    console.log("Hello from sayHello function!");
    // alert("Hello from sayHello function!");

    // Change the title
    document.getElementById("title").textContent = "Hello from sayHello function!";
    document.getElementsByClassName("test")[0].textContent = "Hello from sayHello function!";
}

let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isStudent: false
};


console.log(person);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.isStudent);

let personObjectArray = [person];
console.log(personObjectArray);
console.log(personObjectArray[0]);
console.log(personObjectArray[0].firstName);
console.log(personObjectArray[0].lastName);
console.log(personObjectArray[0].age);
console.log(personObjectArray[0].isStudent);
