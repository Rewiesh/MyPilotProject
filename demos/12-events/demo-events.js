// ============================================================
// DEMO 12 — Event Handling
// ============================================================
// Open demo-events.html in de browser.


// ========================
//  Hulpfunctie: log naar het venster op de pagina
// ========================

function log(bericht) {
    const venster = document.getElementById("logVenster");
    venster.textContent += bericht + "\n";
    venster.scrollTop = venster.scrollHeight;
    console.log(bericht);
}

function clearLog() {
    document.getElementById("logVenster").textContent = "";
}


// ========================
//  1. Klik-events met addEventListener
// ========================

let teller = 0;

const knopEen = document.getElementById("knopEen");

// addEventListener(eventType, handlerFunctie)
knopEen.addEventListener("click", (event) => {
    teller++;
    document.getElementById("tellerWeergave").textContent = teller;
    log(`Klik #${teller} op "${event.target.textContent}"`);
});

// Meerdere listeners op hetzelfde element:
const knopTwee = document.getElementById("knopTwee");

knopTwee.addEventListener("click", () => {
    teller++;
    document.getElementById("tellerWeergave").textContent = teller;
    log(`Knop twee geklikt — totaal: ${teller}`);
});

// Event-object bekijken:
knopTwee.addEventListener("click", (event) => {
    log(`  type: ${event.type} | target: ${event.target.tagName}`);
});


// ========================
//  2. Muis-events
// ========================

const muisVak = document.getElementById("muisVak");

muisVak.addEventListener("mouseenter", () => {
    muisVak.textContent = "Muis is binnen! 🐭";
    muisVak.classList.add("hover");
    log("mouseenter: muis is het vak binnengekomen");
});

muisVak.addEventListener("mouseleave", () => {
    muisVak.textContent = "Beweeg je muis hier naartoe";
    muisVak.classList.remove("hover");
    log("mouseleave: muis heeft het vak verlaten");
});

muisVak.addEventListener("mousemove", (event) => {
    muisVak.textContent = `X: ${event.offsetX}  Y: ${event.offsetY}`;
});


// ========================
//  3. Toetsenbord-events
// ========================

const toetsVak = document.getElementById("toetsVak");

toetsVak.addEventListener("keydown", (event) => {
    document.getElementById("toetsInfo").textContent =
        `Ingedrukte toets: ${event.key} (code: ${event.code})`;
    log(`keydown: "${event.key}"`);
});

toetsVak.addEventListener("input", (event) => {
    log(`input: waarde is nu "${event.target.value}"`);
});


// ========================
//  4. Kleur wisselen op klik
// ========================

const kleuren = ["#2563eb", "#16a34a", "#dc2626", "#9333ea", "#ea580c"];
let kleurIndex = 0;

const kleurBlok = document.getElementById("kleurBlok");

kleurBlok.addEventListener("click", () => {
    kleurIndex = (kleurIndex + 1) % kleuren.length;
    const nieuw = kleuren[kleurIndex];
    kleurBlok.style.backgroundColor = nieuw;
    document.getElementById("kleurInfo").textContent = `Huidig: ${nieuw}`;
    log(`Kleur gewijzigd naar ${nieuw}`);
});


// ========================
//  5. Event Delegation
// ========================
// In plaats van een listener op ELKE knop, plaatsen we er één op de CONTAINER.
// Handig als elementen dynamisch worden aangemaakt.

const container = document.getElementById("knoppenContainer");
let knopTeller = 0;

document.getElementById("voegKnopToe").addEventListener("click", () => {
    knopTeller++;
    const knop = document.createElement("button");
    knop.textContent = `Knop ${knopTeller}`;
    knop.dataset.id = knopTeller;  // data-attribuut instellen
    container.appendChild(knop);
    log(`Knop ${knopTeller} toegevoegd aan de container`);
});

// Één listener op de container die klikken op ALLE kindknoppen afvangt:
container.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        const id = event.target.dataset.id;
        document.getElementById("delegatieInfo").textContent =
            `Je klikte op Knop ${id} (via delegation)`;
        log(`Delegation: klik op knop met data-id="${id}"`);
    }
});


// ========================
//  6. Event verwijderen (removeEventListener)
// ========================

function eenmaligeHandler() {
    log("Dit event wordt slechts EENMAAL afgevuurd.");
    knopEen.removeEventListener("click", eenmaligeHandler);
}

knopEen.addEventListener("click", eenmaligeHandler);

// Alternatief: { once: true } optie
knopTwee.addEventListener("click", () => {
    log("once-listener: ook slechts één keer.");
}, { once: true });


// ========================
//  7. Standaard gedrag voorkomen
// ========================
// Voorbeeld: voorkom dat een formulier de pagina ververst
// form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     // verwerk de data zelf
// });
