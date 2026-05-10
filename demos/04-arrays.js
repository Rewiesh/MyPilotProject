// ============================================================
// DEMO 04 — Arrays & Transformaties
// ============================================================


// --- 1. Array aanmaken & lezen ---
console.log("--- Array aanmaken ---");

const vruchten = ["appel", "banaan", "kers", "druif"];

console.log(vruchten);
console.log("Lengte:", vruchten.length);
console.log("Index 0:", vruchten[0]);
console.log("Laatste:", vruchten[vruchten.length - 1]);


// --- 2. Toevoegen & verwijderen ---
console.log("\n--- Toevoegen / verwijderen ---");

const getallen = [1, 2, 3];

getallen.push(4);           // toevoegen aan het einde
getallen.unshift(0);        // toevoegen aan het begin
console.log("Na push + unshift:", getallen);

getallen.pop();             // verwijder laatste
getallen.shift();           // verwijder eerste
console.log("Na pop + shift:", getallen);


// --- 3. Loop over een array ---
console.log("\n--- Loop ---");

const kleuren = ["rood", "groen", "blauw"];

// for-loop
for (let i = 0; i < kleuren.length; i++) {
    console.log(`Index ${i}: ${kleuren[i]}`);
}

// for...of (leesbaarder)
for (const kleur of kleuren) {
    console.log("kleur:", kleur);
}


// --- 4. map() — transformeer elk element ---
console.log("\n--- map() ---");

const nummers = [1, 2, 3, 4, 5];

const verdubbeld = nummers.map((n) => n * 2);
console.log("origineel:", nummers);
console.log("verdubbeld:", verdubbeld);

const namen = ["ali", "bo", "chan"];
const metHoofdletter = namen.map((naam) => naam[0].toUpperCase() + naam.slice(1));
console.log("met hoofdletter:", metHoofdletter);


// --- 5. filter() — selecteer elementen ---
console.log("\n--- filter() ---");

const scores = [45, 78, 60, 30, 92, 55];

const geslaagd  = scores.filter((score) => score >= 55);
const gezakt    = scores.filter((score) => score < 55);
console.log("geslaagd:", geslaagd);
console.log("gezakt:", gezakt);


// --- 6. reduce() — combineer tot één waarde ---
console.log("\n--- reduce() ---");

const bedragen = [10, 20, 30, 40];

const totaal = bedragen.reduce((accumulatie, huidig) => accumulatie + huidig, 0);
console.log("totaal:", totaal); // 100

// Maximum vinden met reduce:
const max = bedragen.reduce((max, huidig) => (huidig > max ? huidig : max), 0);
console.log("maximum:", max); // 40


// --- 7. some() en every() ---
console.log("\n--- some() / every() ---");

const temperaturen = [18, 22, 35, 12, 28];

console.log("Boven 30?", temperaturen.some((t) => t > 30));      // true
console.log("Allemaal boven 10?", temperaturen.every((t) => t > 10)); // true
console.log("Allemaal boven 20?", temperaturen.every((t) => t > 20)); // false


// --- 8. find() en findIndex() ---
console.log("\n--- find() / findIndex() ---");

const studenten = [
    { naam: "Mia",   punt: 72 },
    { naam: "Kai",   punt: 45 },
    { naam: "Lena",  punt: 88 },
];

const eersteGoed = studenten.find((s) => s.punt >= 70);
const indexKai   = studenten.findIndex((s) => s.naam === "Kai");

console.log("Eerste met punt >= 70:", eersteGoed);
console.log("Index van Kai:", indexKai);


// --- 9. Combineren: map + filter ---
console.log("\n--- map + filter gecombineerd ---");

const producten = [
    { naam: "laptop",  prijs: 1200 },
    { naam: "muis",    prijs: 25 },
    { naam: "monitor", prijs: 450 },
    { naam: "toetsen", prijs: 80 },
];

const dureNamen = producten
    .filter((p) => p.prijs > 100)
    .map((p) => p.naam);

console.log("Producten boven €100:", dureNamen);
