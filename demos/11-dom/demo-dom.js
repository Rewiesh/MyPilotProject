// ============================================================
// DEMO 11 — DOM Manipulatie
// ============================================================
// Open demo-dom.html in de browser en bekijk het resultaat.


// ========================
//  1. Elementen selecteren
// ========================

// Eén element op basis van CSS-selector (geeft het eerste terug):
const titel = document.querySelector("#hoofdTitel");
const ondertitel = document.getElementById("ondertitel");

// Meerdere elementen (geeft een NodeList terug):
const alleKnoppen = document.querySelectorAll("button");
const alleKaarten = document.querySelectorAll(".kaart");

console.log("Titel element:", titel);
console.log("Aantal knoppen:", alleKnoppen.length);
console.log("Aantal kaarten:", alleKaarten.length);


// ========================
//  2. Tekst & HTML wijzigen
// ========================

function veranderTitel() {
    // textContent: veilig, behandelt alles als tekst
    titel.textContent = "Titel is gewijzigd! ✅";
    console.log("Titel gewijzigd via textContent");
}


// ========================
//  3. Stijlen wijzigen
// ========================

function verkleurTitel() {
    // Inline stijl instellen via .style
    titel.style.color = titel.style.color === "crimson" ? "#2563eb" : "crimson";
    titel.style.fontStyle = "italic";
    console.log("Kleur gewijzigd via .style");
}


// ========================
//  4. Zichtbaarheid
// ========================

function verbergOndertitel() {
    // Manier 1: classList gebruiken
    ondertitel.classList.add("verborgen");
    console.log("Ondertitel verborgen");
}

function toonOndertitel() {
    ondertitel.classList.remove("verborgen");
    console.log("Ondertitel getoond");
}


// ========================
//  5. CSS-klassen beheren
// ========================

const kaartKlasse = document.getElementById("kaartKlasse");

function activeerKaart() {
    kaartKlasse.classList.add("actief");
}

function deactiveerKaart() {
    kaartKlasse.classList.remove("actief");
}

function toggleKaart() {
    // toggle: voeg toe als niet aanwezig, verwijder als aanwezig
    kaartKlasse.classList.toggle("actief");
    console.log("Klassen:", kaartKlasse.classList.toString());
}


// ========================
//  6. Elementen aanmaken & toevoegen
// ========================

function voegItemToe() {
    const invoer = document.getElementById("invoerVak");
    const tekst = invoer.value.trim();

    if (!tekst) return; // lege invoer overslaan

    // Nieuw element aanmaken:
    const li = document.createElement("li");
    li.textContent = tekst;

    // Verwijderknop toevoegen aan het item:
    const verwijderKnop = document.createElement("button");
    verwijderKnop.textContent = "✕";
    verwijderKnop.style.marginLeft = "8px";
    verwijderKnop.onclick = () => li.remove();

    li.appendChild(verwijderKnop);

    // Aan de DOM toevoegen:
    document.getElementById("dynamischeLijst").appendChild(li);

    // Invoervak leegmaken:
    invoer.value = "";
    invoer.focus();

    console.log(`Item toegevoegd: "${tekst}"`);
}


// ========================
//  7. DOM doorzoeken
// ========================

function zoekAlleKnoppen() {
    const knoppen = document.querySelectorAll("button");
    const uitvoer = document.getElementById("uitvoer");
    uitvoer.textContent = `Er zijn ${knoppen.length} knoppen op de pagina.`;
    console.log("Knoppen gevonden:", knoppen.length);
}


// ========================
//  8. Element-attributen lezen & wijzigen
// ========================

// Voorbeeld: stel een data-attribuut in
titel.setAttribute("data-demo", "dom-manipulatie");
console.log("data-attribuut:", titel.getAttribute("data-demo"));


// ========================
//  9. Elementen verwijderen
// ========================

// Dit kun je in de console proberen:
// document.querySelector("#ondertitel").remove();
