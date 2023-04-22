// ASI: Automatic Semicolon Insertion
const cardImage = document.querySelector(".card-image-top");

const pokeName = document.querySelector(".pokeName");

const searchPoke = document.querySelector(".pokeSearch");

function fetchpoke() {

    let valueOfSearch = searchPoke.value;

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