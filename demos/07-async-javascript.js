// ============================================================
// DEMO 07 — Asynchrone JavaScript
// ============================================================
// JavaScript is single-threaded: één ding tegelijk.
// Asynchrone patronen zorgen dat lang-durende taken
// de rest van de code NIET blokkeren.


// --- 1. Synchrone vs Asynchrone code ---
console.log("--- Volgorde demo ---");

console.log("1: Start");

setTimeout(() => {
    console.log("2: Na 1 seconde (async)");
}, 1000);

console.log("3: Dit wordt EERDER geprint dan de timeout!");
// Uitvoer: 1 → 3 → 2


// --- 2. Callback (oudere aanpak) ---
console.log("\n--- Callback ---");

function laadData(callback) {
    setTimeout(() => {
        const data = { gebruiker: "Lisa", score: 92 };
        callback(data);
    }, 500);
}

laadData((data) => {
    console.log("Data ontvangen via callback:", data);
});


// --- 3. Promise ---
console.log("\n--- Promise ---");

function haalGebruikerOp(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id > 0) {
                resolve({ id, naam: "Marco", email: "marco@school.nl" });
            } else {
                reject(new Error("Ongeldig ID"));
            }
        }, 600);
    });
}

// Promise afhandelen met .then / .catch
haalGebruikerOp(1)
    .then((gebruiker) => {
        console.log("Gebruiker gevonden:", gebruiker);
    })
    .catch((fout) => {
        console.error("Fout:", fout.message);
    });

haalGebruikerOp(-1)
    .then((gebruiker) => console.log(gebruiker))
    .catch((fout) => console.error("Verwachte fout:", fout.message));


// --- 4. Promise.all — meerdere tegelijk ---
console.log("\n--- Promise.all ---");

const belofte1 = Promise.resolve("Resultaat A");
const belofte2 = new Promise((res) => setTimeout(() => res("Resultaat B"), 300));
const belofte3 = Promise.resolve("Resultaat C");

Promise.all([belofte1, belofte2, belofte3]).then((resultaten) => {
    console.log("Alle resultaten:", resultaten);
});


// --- 5. async / await (moderne aanpak) ---
console.log("\n--- async / await ---");

async function toonGebruiker(id) {
    console.log(`Zoeken naar gebruiker ${id}...`);
    try {
        const gebruiker = await haalGebruikerOp(id);
        console.log("Gevonden:", gebruiker.naam);
    } catch (fout) {
        console.error("Fout bij ophalen:", fout.message);
    }
}

toonGebruiker(5);
toonGebruiker(-1);


// --- 6. async functies retourneren altijd een Promise ---
console.log("\n--- async retourneert Promise ---");

async function geefGetal() {
    return 42; // dit wordt automatisch gewrapped in een Promise
}

geefGetal().then((waarde) => console.log("Waarde:", waarde)); // 42


// --- 7. Volgorde van uitvoering (microtasks vs macrotasks) ---
console.log("\n--- Event loop volgorde ---");

console.log("A");

setTimeout(() => console.log("B (setTimeout - macrotask)"), 0);

Promise.resolve().then(() => console.log("C (Promise - microtask)"));

console.log("D");

// Uitvoer: A → D → C → B
// Microtasks (Promise) lopen altijd vóór macrotasks (setTimeout)
