// ============================================================
// DEMO 09 — Truthy & Falsy waarden
// ============================================================
// In condities zet JavaScript elke waarde om naar true of false.


// --- 1. De 8 falsy waarden ---
console.log("--- Falsy waarden ---");

// Dit zijn de ENIGE falsy waarden in JavaScript:
const falsyWaarden = [false, 0, -0, 0n, "", null, undefined, NaN];

falsyWaarden.forEach((w) => {
    if (w) {
        console.log(`${String(w)} → TRUTHY`);
    } else {
        console.log(`${String(w)} → falsy`);
    }
});


// --- 2. Alles andere is truthy ---
console.log("\n--- Truthy waarden ---");

const truthyWaarden = [true, 1, -1, "0", "false", [], {}, function(){}];

truthyWaarden.forEach((w) => {
    if (w) {
        console.log(`${String(w)} → TRUTHY`);
    } else {
        console.log(`${String(w)} → falsy`);
    }
});

// Verrassende voorbeelden:
console.log("\n⚠️ Verrassende gevallen:");
console.log('"0" is truthy:', Boolean("0"));     // true! (niet-lege string)
console.log('"false" is truthy:', Boolean("false")); // true!
console.log("[] is truthy:", Boolean([]));        // true! (lege array)
console.log("{} is truthy:", Boolean({}));        // true! (leeg object)


// --- 3. Gebruik in if-statements ---
console.log("\n--- Gebruik in if ---");

const gebruikersnaam = "";

if (gebruikersnaam) {
    console.log("Welkom,", gebruikersnaam);
} else {
    console.log("Geen gebruikersnaam opgegeven.");
}

const lijst = [];
if (lijst.length) {
    console.log("Lijst heeft items.");
} else {
    console.log("Lijst is leeg.");
}


// --- 4. Logische operatoren met truthy/falsy ---
console.log("\n--- Logische operatoren ---");

// || (OF): geeft de eerste truthy waarde terug, of de laatste waarde
console.log(null || "standaard");    // "standaard"
console.log("ingelogd" || "gast");   // "ingelogd"
console.log(0 || false || "backup"); // "backup"

// && (EN): geeft de eerste falsy waarde terug, of de laatste waarde
console.log(1 && 2 && 3);           // 3  (alle truthy → laatste)
console.log(1 && null && 3);        // null (eerste falsy)

// Praktisch gebruik: standaardwaarden
function begroet(naam) {
    const weergaveNaam = naam || "Gast";
    console.log(`Hallo, ${weergaveNaam}!`);
}

begroet("Emma");   // Hallo, Emma!
begroet("");       // Hallo, Gast!
begroet();         // Hallo, Gast!


// --- 5. Nullish coalescing ?? (alleen null/undefined) ---
console.log("\n--- Nullish coalescing (??) ---");

const score = 0;

console.log(score || 10);   // 10  ⚠️ want 0 is falsy
console.log(score ?? 10);   // 0   ✅ want 0 is niet null/undefined

const invoer = null;
console.log(invoer ?? "Standaard"); // "Standaard"

const invoer2 = "";
console.log(invoer2 ?? "Standaard"); // ""  (lege string is niet null/undefined)
