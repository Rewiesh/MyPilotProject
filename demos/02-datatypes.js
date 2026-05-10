// ============================================================
// DEMO 02 — Data Types
// ============================================================

window.demo02 = function() {

// --- 1. Primitieve types ---
console.log("--- Primitieve types ---");

const tekst       = "Hallo wereld";       // String
const getal       = 42;                   // Number
const kommagetal  = 3.14;                 // Number (ook decimalen)
const isWaar      = true;                 // Boolean
const isNiet      = false;                // Boolean
const leeg        = null;                 // null  (bewust leeg)
let   nogNiets;                           // undefined (nog niet toegewezen)
const grootGetal  = 9007199254740993n;    // BigInt
const symbool     = Symbol("uniek");      // Symbol

console.log(tekst, typeof tekst);
console.log(getal, typeof getal);
console.log(kommagetal, typeof kommagetal);
console.log(isWaar, typeof isWaar);
console.log(leeg, typeof leeg);       // let op: typeof null === "object" (historische bug)
console.log(nogNiets, typeof nogNiets);
console.log(grootGetal, typeof grootGetal);
console.log(symbool, typeof symbool);


// --- 2. Object types ---
console.log("\n--- Object types ---");

const persoon = { naam: "Anna", leeftijd: 22 };   // Object
const nummers = [1, 2, 3];                          // Array (ook een object)
const zegHallo = function() { return "hallo"; };   // Function (ook een object)

console.log(persoon, typeof persoon);
console.log(nummers, typeof nummers);
console.log(zegHallo, typeof zegHallo);

// Array herkennen (typeof geeft "object"):
console.log("Is het een array?", Array.isArray(nummers));


// --- 3. Type controle met typeof ---
console.log("\n--- typeof voorbeelden ---");

console.log(typeof "tekst");        // "string"
console.log(typeof 100);            // "number"
console.log(typeof true);           // "boolean"
console.log(typeof undefined);      // "undefined"
console.log(typeof null);           // "object" ⚠️ bekende JavaScript eigenaardigheid
console.log(typeof {});             // "object"
console.log(typeof []);             // "object"
console.log(typeof function(){}); // "function"


// --- 4. Type conversie ---
console.log("\n--- Type conversie ---");

// String → Number
const strGetal = "42";
console.log(Number(strGetal));      // 42
console.log(parseInt("7.9px"));     // 7
console.log(parseFloat("7.9px"));   // 7.9

// Number → String
console.log(String(100));           // "100"
console.log((255).toString(16));    // "ff" (hexadecimaal)

// Naar Boolean
console.log(Boolean(0));            // false
console.log(Boolean(""));          // false
console.log(Boolean("hallo"));     // true
console.log(Boolean(1));            // true
};
