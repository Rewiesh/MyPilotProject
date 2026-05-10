// ============================================================
// DEMO 15 — Timers: setTimeout & setInterval
// ============================================================
// Open demo-timers.html in de browser.


// ========================
//  1. setTimeout — Eenmalig na vertraging
// ========================

let timeoutId = null;

function startTimeout() {
    const info = document.getElementById("timeoutInfo");
    info.textContent = "Wachten... (2 seconden)";

    // setTimeout retourneert een ID waarmee je het kunt annuleren
    timeoutId = setTimeout(() => {
        info.textContent = "✅ setTimeout uitgevoerd na 2 seconden!";
        console.log("setTimeout klaar");
        timeoutId = null;
    }, 2000);

    console.log("setTimeout gestart, ID:", timeoutId);
}

function annuleerTimeout() {
    if (timeoutId) {
        clearTimeout(timeoutId); // annuleer het geplande callback
        timeoutId = null;
        document.getElementById("timeoutInfo").textContent = "⛔ setTimeout geannuleerd.";
        console.log("setTimeout geannuleerd");
    }
}


// ========================
//  2. setInterval — Klok
// ========================

let klokIntervalId = null;

function startKlok() {
    if (klokIntervalId) return; // voorkom dubbele interval

    // Direct één keer uitvoeren zodat er geen vertraging is:
    toonTijd();

    // Daarna elke seconde herhalen:
    klokIntervalId = setInterval(toonTijd, 1000);
    console.log("Klok gestart, ID:", klokIntervalId);
}

function stopKlok() {
    if (klokIntervalId) {
        clearInterval(klokIntervalId);
        klokIntervalId = null;
        console.log("Klok gestopt");
    }
}

function toonTijd() {
    const nu = new Date();
    const uren     = String(nu.getHours()).padStart(2, "0");
    const minuten  = String(nu.getMinutes()).padStart(2, "0");
    const seconden = String(nu.getSeconds()).padStart(2, "0");
    document.getElementById("klok").textContent = `${uren}:${minuten}:${seconden}`;
}

// Start de klok meteen bij laden:
startKlok();


// ========================
//  3. Stopwatch
// ========================

let stopwatchIntervalId = null;
let stopwatchMs         = 0;

function startStopwatch() {
    if (stopwatchIntervalId) return;

    stopwatchIntervalId = setInterval(() => {
        stopwatchMs += 100;
        toonStopwatch();
    }, 100);
}

function stopStopwatch() {
    clearInterval(stopwatchIntervalId);
    stopwatchIntervalId = null;
}

function resetStopwatch() {
    stopStopwatch();
    stopwatchMs = 0;
    toonStopwatch();
}

function toonStopwatch() {
    const totaleSec = Math.floor(stopwatchMs / 1000);
    const minuten   = Math.floor(totaleSec / 60);
    const seconden  = totaleSec % 60;
    const tiende    = Math.floor((stopwatchMs % 1000) / 100);

    const mStr = String(minuten).padStart(2, "0");
    const sStr = String(seconden).padStart(2, "0");
    document.getElementById("stopwatch").textContent = `${mStr}:${sStr}.${tiende}`;
}


// ========================
//  4. Afteller met voortgangsbalk
// ========================

let aftellIntervalId  = null;
let aftellSeconden    = 10;
let aftellMax         = 10;

function startAfteller(seconden) {
    stopAfteller();
    aftellSeconden = seconden;
    aftellMax      = seconden;

    updateAfteller();

    aftellIntervalId = setInterval(() => {
        aftellSeconden--;
        updateAfteller();

        if (aftellSeconden <= 0) {
            stopAfteller();
            document.getElementById("aftellInfo").textContent = "⏰ Tijd is om!";
            console.log("Afteller klaar");
        }
    }, 1000);
}

function stopAfteller() {
    clearInterval(aftellIntervalId);
    aftellIntervalId = null;
}

function updateAfteller() {
    document.getElementById("afteller").textContent = aftellSeconden;
    const percentage = ((aftellMax - aftellSeconden) / aftellMax) * 100;
    document.getElementById("voortgang").style.width = `${percentage}%`;
    document.getElementById("aftellInfo").textContent = "";
}


// ========================
//  5. Debounce — zoekvenster
// ========================
// Debounce voorkomt dat een functie te vaak wordt aangeroepen.
// Handig voor zoekvensters, resize-events, enz.

function debounce(fn, vertraging) {
    let timerId;
    return function(...args) {
        clearTimeout(timerId);             // reset de timer bij elke aanroep
        timerId = setTimeout(() => {
            fn.apply(this, args);          // voer de functie pas uit na de vertraging
        }, vertraging);
    };
}

function voerZoekopdragtUit(waarde) {
    document.getElementById("zoekInfo").textContent =
        `🔍 Zoekopdracht verstuurd: "${waarde}"`;
    console.log("Zoekopdracht:", waarde);
}

// Maak een gedebounce versie aan (500ms vertraging):
const gedebounceZoeken = debounce(voerZoekopdragtUit, 500);

document.getElementById("zoekVak").addEventListener("input", (event) => {
    document.getElementById("zoekInfo").textContent = "Aan het typen...";
    gedebounceZoeken(event.target.value);
});
