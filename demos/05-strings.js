// ============================================================
// DEMO 05 — Strings & Tekstmanipulatie
// ============================================================


// --- 1. String aanmaken ---
console.log("--- String aanmaken ---");

const enkelQuote  = 'Hallo wereld';
const dubbelQuote = "Hallo wereld";
const backtick    = `Hallo wereld`;   // template literal

console.log(enkelQuote, dubbelQuote, backtick);


// --- 2. Template Literals ---
console.log("\n--- Template Literals ---");

const naam     = "Fatima";
const leeftijd = 20;

// Oude manier (string concatenation):
console.log("Hoi, ik ben " + naam + " en ik ben " + leeftijd + " jaar.");

// Moderne manier (template literal):
console.log(`Hoi, ik ben ${naam} en ik ben ${leeftijd} jaar.`);

// Expressies in template literals:
console.log(`Over 10 jaar ben ik ${leeftijd + 10} jaar.`);

// Meerdere regels:
const gedicht = `
Regel één,
Regel twee,
Regel drie.
`;
console.log(gedicht);


// --- 3. String lengte & indexering ---
console.log("--- Lengte & indexering ---");

const woord = "JavaScript";

console.log("Lengte:", woord.length);       // 10
console.log("Index 0:", woord[0]);          // "J"
console.log("Laatste:", woord[woord.length - 1]); // "t"


// --- 4. Veelgebruikte methodes ---
console.log("\n--- Methodes ---");

const zin = "  JavaScript is Geweldig!  ";

console.log(zin.trim());               // spaties verwijderen aan begin/eind
console.log(zin.trimStart());          // alleen links
console.log(zin.toLowerCase());        // kleine letters
console.log(zin.toUpperCase());        // hoofdletters

console.log(zin.trim().includes("JavaScript")); // true: bevat het?
console.log(zin.trim().startsWith("Java"));     // true
console.log(zin.trim().endsWith("!"));          // true

console.log(zin.trim().replace("Geweldig", "Fantastisch")); // vervangen
console.log(zin.trim().replaceAll("a", "@"));               // alles vervangen

// Herhalen:
console.log("ha".repeat(3)); // "hahaha"


// --- 5. slice() en substring() ---
console.log("\n--- slice() / substring() ---");

const tekst = "Programmeren is leuk!";

console.log(tekst.slice(0, 12));       // "Programmeren"
console.log(tekst.slice(-5));          // "leuk!" (negatief telt vanaf het einde)
console.log(tekst.substring(14, 16)); // "is"


// --- 6. split() en join() ---
console.log("\n--- split() / join() ---");

const csv = "appel,banaan,kers,druif";
const fruitLijst = csv.split(",");
console.log(fruitLijst); // ["appel", "banaan", "kers", "druif"]

const terugNaarString = fruitLijst.join(" - ");
console.log(terugNaarString); // "appel - banaan - kers - druif"

// Zin splitsen op woorden:
const woorden = "Hallo mooie wereld".split(" ");
console.log(woorden); // ["Hallo", "mooie", "wereld"]


// --- 7. indexOf() ---
console.log("\n--- indexOf() ---");

const tekst2 = "JavaScript is super, JavaScript is geweldig";

console.log(tekst2.indexOf("JavaScript"));      // 0 (eerste voorkomen)
console.log(tekst2.lastIndexOf("JavaScript")); // 21 (laatste voorkomen)
console.log(tekst2.indexOf("Python"));          // -1 (niet gevonden)


// --- 8. Strings zijn immutable ---
console.log("\n--- Strings zijn immutable ---");

let s = "hallo";
s.toUpperCase(); // ❌ verandert s NIET
console.log(s);  // "hallo"

s = s.toUpperCase(); // ✅ sla de nieuwe waarde op
console.log(s);  // "HALLO"
