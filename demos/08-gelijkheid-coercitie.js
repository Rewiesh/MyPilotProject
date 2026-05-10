// ============================================================
// DEMO 08 — Gelijkheid & Type Coercitie
// ============================================================

window.demo08 = function() {

// --- 1. Strikte gelijkheid === (aanbevolen) ---
console.log("--- Strikte gelijkheid (===) ---");

console.log(5 === 5);       // true  — zelfde waarde, zelfde type
console.log(5 === "5");     // false — zelfde waarde, ANDER type
console.log(0 === false);   // false
console.log(null === undefined); // false


// --- 2. Losse gelijkheid == (vermijd dit) ---
console.log("\n--- Losse gelijkheid (==) ---");

console.log(5 == "5");          // true  ⚠️ string wordt omgezet naar number
console.log(0 == false);        // true  ⚠️ false wordt omgezet naar 0
console.log(0 == "");           // true  ⚠️
console.log(null == undefined); // true  ⚠️ speciale regel
console.log(null == 0);         // false (null vergelijkt alleen gelijk met undefined)
console.log([] == false);       // true  ⚠️ lege array → "" → 0 → false


// --- 3. Ongelijkheid: !== vs != ---
console.log("\n--- Ongelijkheid ---");

console.log(5 !== "5");   // true  (strikt: andere types)
console.log(5 != "5");    // false (los: worden gelijk na coercitie)


// --- 4. Type coercitie bij rekenen ---
console.log("\n--- Coercitie bij rekenen ---");

console.log("5" + 3);       // "53"  ⚠️ + doet string concatenatie als één operand een string is
console.log("5" - 3);       // 2     ✅ - converteert altijd naar number
console.log("5" * "2");     // 10    ✅
console.log(true + 1);      // 2     (true → 1)
console.log(false + 1);     // 1     (false → 0)
console.log(null + 1);      // 1     (null → 0)
console.log(undefined + 1); // NaN   (undefined → NaN)


// --- 5. Vergelijkingsoperatoren ---
console.log("\n--- Vergelijkingen ---");

console.log(3 > 2);    // true
console.log(3 >= 3);   // true
console.log("b" > "a"); // true (alfabetisch vergelijken)
console.log("10" > "9"); // false ⚠️ string vergelijking: "1" < "9"
console.log(10 > 9);     // true  ✅ numerieke vergelijking


// --- 6. Samenvatting: gebruik altijd === ---
console.log("\n--- Vuistregel ---");

function controleerGelijkheid(a, b) {
    if (a === b) {
        console.log(`${a} === ${b}: ZELFDE waarde en type`);
    } else {
        console.log(`${a} !== ${b}: NIET gelijk (strikt)`);
    }
}

controleerGelijkheid(42, 42);
controleerGelijkheid(42, "42");
controleerGelijkheid(0, false);
controleerGelijkheid(null, undefined);
};
