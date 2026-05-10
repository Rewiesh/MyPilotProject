// ============================================================
// DEMO 14 — Storage APIs
// ============================================================
// Open demo-storage.html in de browser.
// Tip: open DevTools → Application → Local/Session Storage


// ========================
//  1. localStorage — Thema
// ========================

function stelThemaIn(thema) {
    // Opslaan: alleen strings!
    localStorage.setItem("thema", thema);

    // Thema toepassen op de pagina:
    const pagina = document.getElementById("pagina");
    if (thema === "donker") {
        pagina.classList.add("thema-donker");
    } else {
        pagina.classList.remove("thema-donker");
    }

    document.getElementById("themaInfo").textContent = `Huidig thema: ${thema}`;
    console.log("Thema opgeslagen:", thema);
}

// Thema herstellen bij het laden van de pagina:
function herstelThema() {
    const opgeslagenThema = localStorage.getItem("thema"); // null als niet aanwezig
    if (opgeslagenThema) {
        stelThemaIn(opgeslagenThema);
    } else {
        document.getElementById("themaInfo").textContent = "Huidig thema: licht (standaard)";
    }
}

herstelThema();


// ========================
//  2. localStorage — Naam
// ========================

function slaaNaamOp() {
    const naam = document.getElementById("naamInvoer").value.trim();
    if (!naam) return;

    localStorage.setItem("gebruikersnaam", naam);
    document.getElementById("naamInfo").textContent = `Opgeslagen naam: ${naam}`;
    console.log("Naam opgeslagen:", naam);
}

function verwijderNaam() {
    localStorage.removeItem("gebruikersnaam"); // verwijder één item
    document.getElementById("naamInfo").textContent = "Naam verwijderd.";
    console.log("Naam verwijderd uit localStorage");
}

// Naam laden bij pagina-start:
const opgeslagenNaam = localStorage.getItem("gebruikersnaam");
if (opgeslagenNaam) {
    document.getElementById("naamInfo").textContent = `Opgeslagen naam: ${opgeslagenNaam}`;
}


// ========================
//  3. localStorage — Object opslaan via JSON
// ========================

function slaaProfielOp() {
    const profiel = {
        naam: "Demo Gebruiker",
        leeftijd: 21,
        vakken: ["Wiskunde", "Programmeren"],
        aangemeldOp: new Date().toISOString(),
    };

    // ⚠️ localStorage slaat ALLEEN strings op:
    localStorage.setItem("profiel", JSON.stringify(profiel));

    document.getElementById("profielInfo").textContent =
        "Opgeslagen:\n" + JSON.stringify(profiel, null, 2);
    console.log("Profiel opgeslagen:", profiel);
}

function laadProfiel() {
    const rawData = localStorage.getItem("profiel");

    if (!rawData) {
        document.getElementById("profielInfo").textContent = "Geen profiel gevonden.";
        return;
    }

    // ⚠️ Vergeet JSON.parse niet!
    const profiel = JSON.parse(rawData);
    document.getElementById("profielInfo").textContent =
        "Geladen:\n" + JSON.stringify(profiel, null, 2);
    console.log("Profiel geladen:", profiel);
}

function verwijderProfiel() {
    localStorage.removeItem("profiel");
    document.getElementById("profielInfo").textContent = "Profiel verwijderd.";
}


// ========================
//  4. sessionStorage
// ========================

function slaaSessieOp() {
    const notitie = document.getElementById("sessieInvoer").value.trim();
    if (!notitie) return;

    // sessionStorage: dezelfde API als localStorage
    sessionStorage.setItem("notitie", notitie);
    document.getElementById("sessieInfo").textContent = `Opgeslagen (sessie): "${notitie}"`;
    console.log("sessionStorage opgeslagen:", notitie);
}

function laadSessie() {
    const notitie = sessionStorage.getItem("notitie");
    document.getElementById("sessieInfo").textContent =
        notitie ? `Geladen uit sessie: "${notitie}"` : "Niets in sessionStorage gevonden.";
}


// ========================
//  5. Alles wissen
// ========================

function wisAlles() {
    localStorage.clear();
    console.log("localStorage gewist");
    document.getElementById("themaInfo").textContent  = "localStorage gewist.";
    document.getElementById("naamInfo").textContent   = "localStorage gewist.";
    document.getElementById("profielInfo").textContent = "localStorage gewist.";
    document.getElementById("pagina").classList.remove("thema-donker");
}

function wisSessie() {
    sessionStorage.clear();
    console.log("sessionStorage gewist");
    document.getElementById("sessieInfo").textContent = "sessionStorage gewist.";
}


// ========================
//  Overzicht in de console
// ========================

console.log("localStorage inhoud:");
for (let i = 0; i < localStorage.length; i++) {
    const sleutel = localStorage.key(i);
    console.log(`  ${sleutel}:`, localStorage.getItem(sleutel));
}
