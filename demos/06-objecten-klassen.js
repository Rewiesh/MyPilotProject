// ============================================================
// DEMO 06 — Objecten & Klassen
// ============================================================


// --- 1. Object literal ---
console.log("--- Object literal ---");

const student = {
    naam: "Priya",
    leeftijd: 20,
    vakken: ["Wiskunde", "Programmeren"],
    isIngeschreven: true,
};

console.log(student);
console.log("Naam:", student.naam);              // punt-notatie
console.log("Leeftijd:", student["leeftijd"]);   // haakjes-notatie


// --- 2. Eigenschappen toevoegen & wijzigen ---
console.log("\n--- Wijzigen ---");

student.email = "priya@school.nl"; // nieuwe eigenschap
student.leeftijd = 21;              // bestaande wijzigen
console.log(student);


// --- 3. Methodes in een object ---
console.log("\n--- Methodes ---");

const rekenmachine = {
    resultaat: 0,
    optellen(a, b) {
        this.resultaat = a + b;
        return this;             // method chaining mogelijk
    },
    toon() {
        console.log("Resultaat:", this.resultaat);
        return this;
    },
};

rekenmachine.optellen(5, 3).toon();


// --- 4. Object loop met for...in ---
console.log("\n--- for...in loop ---");

const auto = { merk: "Toyota", model: "Corolla", jaar: 2020 };

for (const sleutel in auto) {
    console.log(`${sleutel}: ${auto[sleutel]}`);
}


// --- 5. Object methodes (Object.*) ---
console.log("\n--- Object.keys / values / entries ---");

console.log(Object.keys(auto));    // ["merk", "model", "jaar"]
console.log(Object.values(auto));  // ["Toyota", "Corolla", 2020]
console.log(Object.entries(auto)); // [["merk","Toyota"], ...]


// --- 6. Klasse (Class) ---
console.log("\n--- Klasse ---");

class Dier {
    constructor(naam, geluid) {
        this.naam   = naam;
        this.geluid = geluid;
    }

    maakGeluid() {
        console.log(`${this.naam} zegt: ${this.geluid}!`);
    }

    toString() {
        return `Dier(${this.naam})`;
    }
}

const kat = new Dier("Kat", "Miauw");
const hond = new Dier("Hond", "Woef");

kat.maakGeluid();
hond.maakGeluid();
console.log(String(kat));


// --- 7. Overerving (extends) ---
console.log("\n--- Overerving ---");

class Huisdier extends Dier {
    constructor(naam, geluid, eigenaar) {
        super(naam, geluid);    // roep de constructor van Dier aan
        this.eigenaar = eigenaar;
    }

    stelVoor() {
        console.log(`Ik ben ${this.naam} en mijn baasje is ${this.eigenaar}.`);
    }
}

const mijnHond = new Huisdier("Rex", "Woef", "Carlos");
mijnHond.maakGeluid(); // geërfd van Dier
mijnHond.stelVoor();   // eigen methode


// --- 8. instanceof controleren ---
console.log("\n--- instanceof ---");

console.log(mijnHond instanceof Huisdier); // true
console.log(mijnHond instanceof Dier);     // true (door overerving)
console.log(kat instanceof Huisdier);      // false
