// ============================================================
// DEMO 01 — Variabelen & Scope
// ============================================================
// Hoe uitvoeren: open in browser-console of run met Node.js

window.demo01 = function() {

// --- 1. const vs let ---
const geboortejaar = 1995;   // vaste waarde, kan NIET worden gewijzigd
let leeftijd = 28;            // kan worden gewijzigd
leeftijd = 29;

console.log("geboortejaar:", geboortejaar);
console.log("leeftijd:", leeftijd);

// geboortejaar = 2000; // ❌ TypeError: Assignment to constant variable


// --- 2. var (verouderd, vermijd) ---
var oudGetal = 10;
console.log("var oudGetal:", oudGetal);


// --- 3. Block scope: let vs var ---
console.log("\n--- Block scope ---");

if (true) {
    let blockLet = "alleen hier zichtbaar";
    var blockVar = "zichtbaar buiten het blok!";
    console.log("binnen blok, blockLet:", blockLet);
    console.log("binnen blok, blockVar:", blockVar);
}

// console.log(blockLet); // ❌ ReferenceError
console.log("buiten blok, blockVar:", blockVar); // ✅ werkt door var


// --- 4. Hoisting van var ---
console.log("\n--- Hoisting ---");

console.log("gehoist:", gehoist); // undefined, geen error
var gehoist = "ik ben gehoist";
console.log("na declaratie:", gehoist);

// console.log(letVar); // ❌ ReferenceError: Cannot access before initialization
// let letVar = "let wordt niet gehoist";


// --- 5. Function scope ---
console.log("\n--- Function scope ---");

function toonScope() {
    let lokaal = "ik leef alleen in deze functie";
    console.log("binnenin functie:", lokaal);
}

toonScope();
// console.log(lokaal); // ❌ ReferenceError
};
