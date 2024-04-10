const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const pokemonWeight = document.getElementById("weight");
const pokemonHeight = document.getElementById("height");
const imageContainer = document.getElementById("image-container");
const pokemonTypes = document.getElementById("types");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");

const fetchData = async () => {
  let searchInputValue = searchInput.value.toLowerCase();
  try {
    const res = await fetch(
      `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${searchInputValue} `
    );
    const data = await res.json();
    console.log("data", data);
    showPokemonInfo(data);
  } catch (err) {
    alert("Pokémon not found");
  }
};

function showPokemonInfo(data) {
  pokemonTypes.innerHTML = "";
  pokemonName.textContent = `${data.name}`;
  pokemonId.textContent = `#${data.id}`;
  pokemonWeight.textContent = `Weight: ${data.weight}`;
  pokemonHeight.textContent = `Height: ${data.height}`;
  imageContainer.innerHTML = `<img src="${data.sprites.front_default}" class="pokemon-img" id="sprite">`;
  data.types.forEach((element) => {
    pokemonTypes.innerHTML += `<span class="type ${element.type.name}">${element.type.name}</span>`;
  });

  hp.textContent = `${data.stats[0].base_stat}`;
  attack.textContent = `${data.stats[1].base_stat}`;
  defense.textContent = `${data.stats[2].base_stat}`;
  specialAttack.textContent = `${data.stats[3].base_stat}`;
  specialDefense.textContent = `${data.stats[4].base_stat}`;
  speed.textContent = `${data.stats[5].base_stat}`;
}

searchButton.addEventListener("click", (event) => {
  event.preventDefault(); // Verhindert das Standardverhalten des Formulars
  fetchData();
});
