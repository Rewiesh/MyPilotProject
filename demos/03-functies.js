// ============================================================
// DEMO 03 — Functies
// ============================================================

window.demo03 = function() {

// --- 1. Function Declaration (hoisted) ---
console.log("--- Function Declaration ---");

console.log(optellen(3, 4)); // ✅ werkt ook vóór de definitie (hoisting)

function optellen(a, b) {
    return a + b;
}

console.log(optellen(10, 5));


// --- 2. Function Expression (niet hoisted) ---
console.log("\n--- Function Expression ---");

// console.log(vermenigvuldig(2, 3)); // ❌ ReferenceError

const vermenigvuldig = function(a, b) {
    return a * b;
};

console.log(vermenigvuldig(4, 5));


// --- 3. Arrow Function ---
console.log("\n--- Arrow Function ---");

const aftrekken = (a, b) => a - b;          // korte notatie (impliciete return)
const kwadraat  = (n) => n * n;
const zegHallo  = () => "Hallo!";            // geen parameters

console.log(aftrekken(10, 3));
console.log(kwadraat(6));
console.log(zegHallo());

// Arrow met meerdere regels (expliciet return nodig):
const beschrijfPersoon = (naam, leeftijd) => {
    const bericht = `${naam} is ${leeftijd} jaar oud.`;
    return bericht;
};

console.log(beschrijfPersoon("Sara", 21));


// --- 4. Parameters & Standaardwaarden ---
console.log("\n--- Standaardwaarden ---");

function begroet(naam = "onbekende") {
    return `Hoi ${naam}!`;
}

console.log(begroet("Carlos"));
console.log(begroet()); // gebruikt standaardwaarde


// --- 5. Higher-Order Functions ---
console.log("\n--- Higher-Order Functions ---");

// Functie die een andere functie als argument ontvangt
function voerUit(getal, bewerkingFn) {
    return bewerkingFn(getal);
}

console.log(voerUit(5, (n) => n * 2));     // 10
console.log(voerUit(5, (n) => n + 100));   // 105

// Ingebouwde higher-order: forEach
["appel", "banaan", "kers"].forEach((fruit) => {
    console.log("Fruit:", fruit);
});


// --- 6. Callback functions ---
console.log("\n--- Callbacks ---");

function tel_af(seconden, klaarFn) {
    console.log(`Tellen van ${seconden} seconden...`);
    // simulatie: in echte code zou hier een timer zijn
    klaarFn();
}

tel_af(3, () => {
    console.log("Klaar! Callback uitgevoerd.");
});


// --- 7. this in arrow vs reguliere functies ---
console.log("\n--- this in functies ---");

const team = {
    naam: "Team Alpha",
    leden: ["Ali", "Bo", "Chan"],

    // Reguliere functie: this verwijst naar het object
    toonLeden: function() {
        this.leden.forEach(function(lid) {
            // ⚠️ this hier is undefined (strict) of window (non-strict)
            // console.log(this.naam, lid); // werkt niet zoals verwacht
        });
    },

    // Arrow function: erft this van de omringende scope
    toonLedenArrow: function() {
        this.leden.forEach((lid) => {
            console.log(`${this.naam}: ${lid}`); // ✅ this werkt correct
        });
    },
};

team.toonLedenArrow();
};
