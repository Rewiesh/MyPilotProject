// ============================================================
// DEMO 13 — Fetch API & CRUD
// ============================================================
// Open demo-fetch.html in de browser.
// JSONPlaceholder is een gratis nep-API voor oefeningen.

const BASE_URL = "https://jsonplaceholder.typicode.com";

// Hulpfunctie: toon resultaat in een <pre> element
function toonResultaat(elementId, data) {
    document.getElementById(elementId).textContent = JSON.stringify(data, null, 2);
}

function toonFout(elementId, fout) {
    document.getElementById(elementId).textContent = `❌ Fout: ${fout.message}`;
}


// ========================
//  GET — Één bericht ophalen
// ========================

async function haalBerichtOp() {
    const postId = document.getElementById("getPostId").value;
    const resultaatEl = document.getElementById("getResultaat");
    resultaatEl.textContent = "Laden...";

    try {
        // fetch() stuurt standaard een GET-verzoek
        const response = await fetch(`${BASE_URL}/posts/${postId}`);

        // Controleer altijd of het verzoek gelukt is
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        const data = await response.json(); // JSON omzetten naar een object
        toonResultaat("getResultaat", data);
        console.log("GET bericht:", data);

    } catch (fout) {
        toonFout("getResultaat", fout);
        console.error(fout);
    }
}


// ========================
//  GET — Lijst van berichten
// ========================

async function haalLijstOp() {
    document.getElementById("lijstResultaat").textContent = "Laden...";

    try {
        const response = await fetch(`${BASE_URL}/posts?_limit=5`);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);

        const berichten = await response.json();

        // Alleen relevante velden weergeven
        const samenvatting = berichten.map((b) => ({
            id: b.id,
            titel: b.title,
        }));

        toonResultaat("lijstResultaat", samenvatting);
        console.log("GET lijst:", berichten);

    } catch (fout) {
        toonFout("lijstResultaat", fout);
    }
}


// ========================
//  POST — Nieuw bericht aanmaken
// ========================

async function maakBerichtAan() {
    const titel   = document.getElementById("nieuweTitel").value.trim();
    const inhoud  = document.getElementById("nieuweInhoud").value.trim();
    document.getElementById("postResultaat").textContent = "Versturen...";

    if (!titel || !inhoud) {
        document.getElementById("postResultaat").textContent = "⚠️ Vul alle velden in.";
        return;
    }

    try {
        const response = await fetch(`${BASE_URL}/posts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",  // vertel de server welk formaat we sturen
            },
            body: JSON.stringify({                    // object omzetten naar JSON-tekst
                title: titel,
                body: inhoud,
                userId: 1,
            }),
        });

        if (!response.ok) throw new Error(`HTTP ${response.status}`);

        const nieuwBericht = await response.json();
        toonResultaat("postResultaat", nieuwBericht);
        console.log("POST nieuw bericht:", nieuwBericht);

    } catch (fout) {
        toonFout("postResultaat", fout);
    }
}


// ========================
//  PUT — Volledig vervangen
// ========================

async function vervangBericht() {
    const postId = document.getElementById("updatePostId").value;
    const titel  = document.getElementById("updatedTitel").value.trim() || "Vervangen Titel";
    document.getElementById("updateResultaat").textContent = "Versturen...";

    try {
        const response = await fetch(`${BASE_URL}/posts/${postId}`, {
            method: "PUT",                            // vervangt de hele resource
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                id: Number(postId),
                title: titel,
                body: "Dit bericht is volledig vervangen.",
                userId: 1,
            }),
        });

        if (!response.ok) throw new Error(`HTTP ${response.status}`);

        const bijgewerkt = await response.json();
        toonResultaat("updateResultaat", bijgewerkt);
        console.log("PUT resultaat:", bijgewerkt);

    } catch (fout) {
        toonFout("updateResultaat", fout);
    }
}


// ========================
//  PATCH — Gedeeltelijk bijwerken
// ========================

async function patchBericht() {
    const postId = document.getElementById("updatePostId").value;
    const titel  = document.getElementById("updatedTitel").value.trim() || "Gepatcht Titel";
    document.getElementById("updateResultaat").textContent = "Versturen...";

    try {
        const response = await fetch(`${BASE_URL}/posts/${postId}`, {
            method: "PATCH",                          // werkt alleen opgegeven velden bij
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title: titel }),   // alleen de titel wijzigen
        });

        if (!response.ok) throw new Error(`HTTP ${response.status}`);

        const bijgewerkt = await response.json();
        toonResultaat("updateResultaat", bijgewerkt);
        console.log("PATCH resultaat:", bijgewerkt);

    } catch (fout) {
        toonFout("updateResultaat", fout);
    }
}


// ========================
//  DELETE — Verwijderen
// ========================

async function verwijderBericht() {
    const postId = document.getElementById("deletePostId").value;
    document.getElementById("deleteResultaat").textContent = "Verwijderen...";

    try {
        const response = await fetch(`${BASE_URL}/posts/${postId}`, {
            method: "DELETE",
        });

        if (!response.ok) throw new Error(`HTTP ${response.status}`);

        // DELETE geeft een leeg object {} terug bij JSONPlaceholder
        document.getElementById("deleteResultaat").textContent =
            `✅ Bericht ${postId} verwijderd (status: ${response.status})`;
        console.log("DELETE geslaagd voor post", postId);

    } catch (fout) {
        toonFout("deleteResultaat", fout);
    }
}
