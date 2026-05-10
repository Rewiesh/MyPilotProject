// ============================================================
// OEFENINGEN — Programming Fundamentals: JavaScript
// ============================================================
// Instructies:
//   - Vul de TODO-plekken in.
//   - Verwijder NIET de bestaande code, alleen de TODO-regels.
//   - Run met: node oefeningen.js  (of open in de browser-console)
//   - Controleer je antwoorden via console.log()


// ============================================================
//  BLOK 1 — Variabelen & Scope
// ============================================================

console.log("===== BLOK 1: Variabelen =====");

// Oefening 1.1
// Declareer een constante 'land' met de waarde "Suriname"
// en een variabele 'inwoners' met de waarde 600000.
// TODO

// Oefening 1.2
// Verander de waarde van 'inwoners' naar 620000.
// TODO

// Oefening 1.3
// Log beide variabelen naar de console in dit formaat:
// "Land: Suriname | Inwoners: 620000"
// TODO

// Oefening 1.4
// Maak een if-blok aan. Gebruik let om een variabele 'bericht'
// te declareren BINNEN het blok met de waarde "Ik ben lokaal".
// Log 'bericht' binnen het blok.
// Probeer daarna 'bericht' buiten het blok te loggen en leg uit
// wat er gebeurt (schrijf het antwoord als commentaar).
// TODO


// ============================================================
//  BLOK 2 — Data Types
// ============================================================

console.log("\n===== BLOK 2: Data Types =====");

// Oefening 2.1
// Maak voor elk primitief type één variabele aan
// (String, Number, Boolean, null, undefined, BigInt).
// Log het type van elke variabele met typeof.
// TODO

// Oefening 2.2
// Gegeven:
const invoer = "42";
// Converteer 'invoer' naar een Number en sla het op in 'getal'.
// Log het resultaat én typeof getal.
// TODO

// Oefening 2.3
// Wat is het type van null? Leg in een commentaar uit
// waarom dit verrassend is.
// TODO


// ============================================================
//  BLOK 3 — Functies
// ============================================================

console.log("\n===== BLOK 3: Functies =====");

// Oefening 3.1
// Schrijf een function declaration 'kwadraat' die een getal
// als parameter ontvangt en het kwadraat teruggeeft.
// Test: console.log(kwadraat(5)) → 25
// TODO

// Oefening 3.2
// Schrijf dezelfde functie als een arrow function (const kwadraat2).
// TODO

// Oefening 3.3
// Schrijf een functie 'begroet' die een naam en een taal ontvangt.
// Als taal "nl" is, return "Hoi [naam]!"
// Als taal "en" is, return "Hello [naam]!"
// Voor alles anders, return "Hallo [naam]!"
// Standaardwaarde voor taal is "nl".
// Test: console.log(begroet("Sara", "en")) → "Hello Sara!"
// TODO

// Oefening 3.4
// Schrijf een higher-order functie 'verwerk' die een array van
// getallen en een functie ontvangt. Geef een nieuwe array terug
// waarbij de functie op elk getal is toegepast.
// Test: console.log(verwerk([1, 2, 3], (n) => n * 10)) → [10, 20, 30]
// TODO


// ============================================================
//  BLOK 4 — Arrays
// ============================================================

console.log("\n===== BLOK 4: Arrays =====");

const studenten = [
    { naam: "Ali",   punt: 72, vak: "Programmeren" },
    { naam: "Bea",   punt: 45, vak: "Wiskunde"     },
    { naam: "Carlos",punt: 88, vak: "Programmeren" },
    { naam: "Diana", punt: 55, vak: "Wiskunde"     },
    { naam: "Erik",  punt: 93, vak: "Programmeren" },
];

// Oefening 4.1
// Gebruik filter() om alleen de studenten te selecteren die
// geslaagd zijn (punt >= 55). Sla op in 'geslaagd'.
// TODO

// Oefening 4.2
// Gebruik map() om een nieuwe array 'namenGeslaagd' te maken
// met alleen de namen van de geslaagde studenten.
// TODO

// Oefening 4.3
// Gebruik reduce() om de gemiddelde score van ALLE studenten
// te berekenen. Sla op in 'gemiddelde' en log het resultaat.
// TODO

// Oefening 4.4
// Controleer met some() of er een student is met een punt > 90.
// Controleer met every() of alle studenten punt >= 40 hebben.
// Log beide resultaten met een beschrijvende tekst.
// TODO

// Oefening 4.5
// Gebruik filter() en map() samen om een array te maken van
// de namen van studenten die Programmeren volgen.
// TODO


// ============================================================
//  BLOK 5 — Strings
// ============================================================

console.log("\n===== BLOK 5: Strings =====");

// Oefening 5.1
// Gegeven:
const zin = "  hallo wereld, dit is javascript!  ";
// Verwijder de spaties, maak de eerste letter van elk woord
// een hoofdletter en log het resultaat.
// Verwacht: "Hallo Wereld, Dit Is Javascript!"
// Tip: gebruik trim(), split(), map(), join()
// TODO

// Oefening 5.2
// Gegeven:
const email = "student@school.nl";
// Controleer of het e-mailadres "@" bevat en eindig op ".nl".
// Log een passend bericht.
// TODO

// Oefening 5.3
// Gegeven:
const csv = "Amsterdam,Rotterdam,Utrecht,Den Haag";
// Maak een array van steden en log de steden één voor één
// met hun positie: "1. Amsterdam", "2. Rotterdam", enz.
// TODO

// Oefening 5.4
// Schrijf een functie 'telVoorkomen' die telt hoe vaak een
// bepaald woord (niet hoofdlettergevoelig) in een tekst voorkomt.
// Test: telVoorkomen("de kat zit op de mat, de kat is blij", "de") → 3
// TODO


// ============================================================
//  BLOK 6 — Objecten & Klassen
// ============================================================

console.log("\n===== BLOK 6: Objecten & Klassen =====");

// Oefening 6.1
// Maak een object 'auto' aan met de eigenschappen:
// merk, model, jaar, isElektrisch (boolean).
// Voeg een methode 'beschrijf' toe die een string teruggeeft:
// "[merk] [model] (bouwjaar [jaar])"
// TODO

// Oefening 6.2
// Maak een klasse 'Rechthoek' met:
//   - constructor(breedte, hoogte)
//   - methode oppervlakte() → breedte * hoogte
//   - methode omtrek() → 2 * (breedte + hoogte)
//   - methode toString() → "Rechthoek [b]x[h]"
// Test:
//   const r = new Rechthoek(5, 3);
//   console.log(r.oppervlakte()) → 15
//   console.log(r.omtrek())      → 16
//   console.log(String(r))       → "Rechthoek 5x3"
// TODO

// Oefening 6.3
// Breid de klasse uit: maak een klasse 'Vierkant' die
// erft van Rechthoek. De constructor ontvangt alleen 'zijde'.
// Test: new Vierkant(4).oppervlakte() → 16
// TODO


// ============================================================
//  BLOK 7 — Async JavaScript
// ============================================================

console.log("\n===== BLOK 7: Async =====");

// Oefening 7.1
// Schrijf een functie 'wacht' die een Promise teruggeeft
// die na 'ms' milliseconden resolve met de waarde "Klaar!".
// TODO

// Oefening 7.2
// Gebruik async/await om de volgende stappen uit te voeren:
// 1. Log "Start"
// 2. Wacht 1 seconde (gebruik je 'wacht' functie)
// 3. Log "Na 1 seconde"
// 4. Wacht nog 0.5 seconde
// 5. Log "Einde"
// Verpak dit in een async functie 'volgorde' en roep hem aan.
// TODO

// Oefening 7.3
// Schrijf een async functie 'haalWeer' die een willekeurig
// weersbericht ophaalt. Simuleer dit met een Promise die na
// 800ms resolve met { stad: "Paramaribo", temp: 32, beschrijving: "Zonnig" }.
// Voeg ook foutafhandeling toe met try/catch.
// TODO


// ============================================================
//  BLOK 8 — Gelijkheid & Coercitie
// ============================================================

console.log("\n===== BLOK 8: Gelijkheid =====");

// Oefening 8.1
// Voorspel (zonder te runnen) de uitkomst van elk === en ==.
// Schrijf je antwoord als commentaar, run daarna om te controleren.

console.log(1 == "1");          // jouw antwoord: TODO
console.log(1 === "1");         // jouw antwoord: TODO
console.log(null == undefined); // jouw antwoord: TODO
console.log(null === undefined);// jouw antwoord: TODO
console.log(0 == false);        // jouw antwoord: TODO
console.log(0 === false);       // jouw antwoord: TODO
console.log("" == false);       // jouw antwoord: TODO

// Oefening 8.2
// Schrijf een functie 'zijnGelijk' die twee waarden vergelijkt
// met STRIKTE gelijkheid en een beschrijvend bericht logt:
// "42 en 42 zijn GELIJK (===)" of "42 en '42' zijn NIET gelijk"
// TODO


// ============================================================
//  BLOK 9 — Truthy & Falsy
// ============================================================

console.log("\n===== BLOK 9: Truthy & Falsy =====");

// Oefening 9.1
// Welke van deze waarden zijn truthy? Schrijf T of F als commentaar.
// Controleer daarna met Boolean().

const waarden = [0, 1, "", "0", null, [], {}, undefined, "false", NaN, -1];
// TODO: schrijf T of F voor elk element als commentaar

// Oefening 9.2
// Schrijf een functie 'isIngevuld' die een waarde ontvangt
// en true teruggeeft als de waarde truthy is, anders false.
// Test het met lege string, null, 0 en een echte waarde.
// TODO

// Oefening 9.3
// Gebruik de || operator om een functie 'geefNaam' te schrijven
// die een optionele parameter 'naam' ontvangt en
// "Gast" gebruikt als standaardwaarde als naam falsy is.
// Doe hetzelfde met de ?? operator in een tweede versie.
// Wat is het verschil als naam = 0 is?
// TODO


// ============================================================
//  BLOK 10 — Destructuring & Spread
// ============================================================

console.log("\n===== BLOK 10: Destructuring & Spread =====");

// Oefening 10.1
// Gegeven:
const punt = [52.3676, 4.9041]; // [latitude, longitude] Amsterdam
// Destructureer naar variabelen 'lat' en 'lon'.
// Log: "Coördinaten: lat=52.3676, lon=4.9041"
// TODO

// Oefening 10.2
// Gegeven:
const product = { naam: "Laptop", prijs: 999, merk: "TechBrand", voorraad: 5 };
// Destructureer naam en prijs. Hernoem prijs naar kostprijs.
// Gebruik een standaardwaarde van "Onbekend" voor garantie.
// Log alle drie variabelen.
// TODO

// Oefening 10.3
// Gegeven twee arrays:
const eersteHelft = ["Jan", "Feb", "Mrt", "Apr", "Mei", "Jun"];
const tweedeHelft = ["Jul", "Aug", "Sep", "Okt", "Nov", "Dec"];
// Gebruik spread om één array 'maanden' te maken.
// TODO

// Oefening 10.4
// Gegeven:
const basisInstelling = { thema: "licht", taal: "nl", lettergrootte: 14 };
// Maak een nieuwe object 'gebruikersInstelling' dat de basis kopieert
// maar thema overschrijft naar "donker" en fontSize toevoegt met waarde 16.
// Het origineel mag NIET worden gewijzigd.
// TODO

// Oefening 10.5 — UITDAGING
// Schrijf een functie 'eersteEnRest' die een array ontvangt
// en een object teruggeeft: { eerste: ..., rest: [...] }
// Test: eersteEnRest([10, 20, 30, 40]) → { eerste: 10, rest: [20, 30, 40] }
// TODO


// ============================================================
//  BONUS — Alles samen
// ============================================================

console.log("\n===== BONUS: Alles samen =====");

// Bonus 1
// Gegeven een lijst van producten:
const winkel = [
    { naam: "Laptop",    prijs: 1200, categorie: "elektronica" },
    { naam: "Boek",      prijs: 25,   categorie: "educatie"    },
    { naam: "Telefoon",  prijs: 800,  categorie: "elektronica" },
    { naam: "Pen",       prijs: 3,    categorie: "educatie"    },
    { naam: "Monitor",   prijs: 450,  categorie: "elektronica" },
    { naam: "Rugzak",    prijs: 60,   categorie: "accessoires" },
];
//
// a) Filter alleen de elektronica-producten.
// b) Bereken de totale prijs van de elektronica.
// c) Geef de namen van de producten onder €100 (alle categorieën),
//    gesorteerd alfabetisch.
// d) Maak een object waarbij de sleutels de categorienamen zijn
//    en de waarden het aantal producten per categorie.
//    Verwacht: { elektronica: 3, educatie: 2, accessoires: 1 }
// TODO


// Bonus 2
// Schrijf een async functie 'laadGebruikersprofiel' die:
// 1. Simuleert dat het profiel wordt geladen (wacht 500ms)
// 2. Teruggeeft: { naam: "Sam", rol: "student", vakken: ["Programmeren", "Wiskunde"] }
// 3. Log elke stap (laden... → geladen!)
// Destructureer naam en vakken uit het resultaat en log ze.
// TODO
