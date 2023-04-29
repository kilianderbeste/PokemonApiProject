// ASI: Automatic Semicolon
const cardImage = document.querySelector(".card-image-top");

const pokeName = document.querySelector(".pokeName");

const searchPoke = document.querySelector(".pokeSearch");

searchPoke.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        fetchpoke();
    }
})

function fetchpoke() {

    let valueOfSearch = searchPoke.value.trim().toLowerCase();

    if (!valueOfSearch) {
        alert("No Name Given!");
        return;
    }

    const apiEndPunkt = `https://pokeapi.co/api/v2/pokemon/${valueOfSearch}`;


    // alert(valueOfSearch);

    fetch(apiEndPunkt)
        .then((response) => response.json())
        .then((data) => {

            cardImage.src = data.sprites.front_default;

            pokeName.textContent = data.name;

        })
        .catch((error) => { alert("Pokemon not found or Network down", error) })
}

// Wir suchen nach einem Bild - Element auf der Webseite und speichern es in der Variable "cardImage".

// Wir suchen nach einem Text - Element auf der Webseite und speichern es in der Variable "pokeName".

// Wir suchen nach einem Eingabefeld auf der Webseite und speichern es in der Variable "searchPoke".

// Wenn jemand im Eingabefeld eine Taste drückt und loslässt, überprüfen wir, ob es die "Enter" - Taste war.Wenn ja, rufen wir die Funktion "fetchpoke()" auf.

// Die Funktion "fetchpoke()" beginnt hier.

// Wir holen den Text aus dem Eingabefeld, entfernen Leerzeichen am Anfang und am Ende und machen alles zu Kleinbuchstaben.Dann speichern wir das Ergebnis in der Variable "valueOfSearch".

//     Wenn "valueOfSearch" leer ist, zeigen wir eine Meldung "No Name Given!" an und beenden die Funktion.

// Wir erstellen die Internetadresse, von der wir die Pokemon - Informationen abrufen wollen, und speichern sie in der Variable "apiEndPunkt".

// Wir holen die Informationen von der Internetadresse.

// Wenn wir die Informationen erfolgreich erhalten haben, verarbeiten wir sie.

// Wir ändern das Bild - Element, um das Bild des gesuchten Pokemons anzuzeigen.

// Wir ändern das Text - Element, um den Namen des gesuchten Pokemons anzuzeigen.

// Wenn etwas schief geht, zeigen wir eine Meldung "Pokemon not found or Network down" und den Fehler an.