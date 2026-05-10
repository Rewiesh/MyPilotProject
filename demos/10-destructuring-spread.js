// ============================================================
// DEMO 10 — Destructuring, Spread & Rest
// ============================================================


// --- 1. Array destructuring ---
console.log("--- Array destructuring ---");

const kleuren = ["rood", "groen", "blauw", "geel"];

const [eerste, tweede] = kleuren;
console.log(eerste, tweede); // "rood" "groen"

// Element overslaan:
const [, , derde] = kleuren;
console.log(derde); // "blauw"

// Met standaardwaarde:
const [a = "standaard", b = "standaard", c = "standaard", d = "standaard", e = "paars"] = kleuren;
console.log(e); // "paars" (index 4 bestaat niet → standaardwaarde)

// Variabelen wisselen (swap):
let x = 1, y = 2;
[x, y] = [y, x];
console.log("na swap:", x, y); // 2 1


// --- 2. Object destructuring ---
console.log("\n--- Object destructuring ---");

const gebruiker = {
    naam: "Tariq",
    leeftijd: 23,
    stad: "Amsterdam",
    rol: "student",
};

const { naam, leeftijd } = gebruiker;
console.log(naam, leeftijd);

// Met hernaming:
const { naam: volledigeNaam, rol: functie } = gebruiker;
console.log(volledigeNaam, functie);

// Met standaardwaarde:
const { email = "geen e-mail" } = gebruiker;
console.log(email); // "geen e-mail"

// In functieparameters:
function toonGebruiker({ naam, leeftijd, stad = "onbekend" }) {
    console.log(`${naam} (${leeftijd}) woont in ${stad}`);
}

toonGebruiker(gebruiker);
toonGebruiker({ naam: "Lena", leeftijd: 19 }); // stad → "onbekend"


// --- 3. Genest destructuring ---
console.log("\n--- Genest destructuring ---");

const bestelling = {
    id: 101,
    klant: {
        naam: "Wei",
        adres: { stad: "Utrecht", postcode: "3512AB" },
    },
};

const { klant: { naam: klantNaam, adres: { stad } } } = bestelling;
console.log(klantNaam, stad);


// --- 4. Rest in destructuring ---
console.log("\n--- Rest ---");

const getallen = [1, 2, 3, 4, 5];
const [hoofd, ...rest] = getallen;
console.log("hoofd:", hoofd);  // 1
console.log("rest:", rest);    // [2, 3, 4, 5]

const { naam: uNaam, ...overige } = gebruiker;
console.log("naam:", uNaam);
console.log("overige:", overige); // leeftijd, stad, rol


// --- 5. Spread operator (...) ---
console.log("\n--- Spread ---");

// Arrays samenvoegen:
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const gecombineerd = [...a1, ...a2];
console.log(gecombineerd); // [1, 2, 3, 4, 5, 6]

// Array kopiëren (shallow):
const kopie = [...a1];
kopie.push(99);
console.log("origineel:", a1);  // ongewijzigd
console.log("kopie:", kopie);

// Objecten samenvoegen:
const basis = { thema: "licht", taal: "nl" };
const extra = { taal: "en", meldingenAan: true };
const instellingen = { ...basis, ...extra };
console.log(instellingen); // taal → "en" (extra overschrijft basis)

// Object kopiëren met wijziging:
const bijgewerkt = { ...gebruiker, leeftijd: 24, email: "tariq@school.nl" };
console.log(bijgewerkt);


// --- 6. Spread in functies ---
console.log("\n--- Spread in functieaanroepen ---");

function som(a, b, c) {
    return a + b + c;
}

const waarden = [10, 20, 30];
console.log(som(...waarden)); // 60

const max = Math.max(...[3, 1, 7, 4]);
console.log("max:", max); // 7
