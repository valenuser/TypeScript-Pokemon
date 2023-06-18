export default function fetch_pokemon() {
    const url_pokemon = 'https://pokeapi.co/api/v2/pokemon', $pokeBox = document.getElementById('pokeBox'), fragment = document.createDocumentFragment();
    fetch(url_pokemon)
        .then(response => response.json())
        .then((res) => {
        res.results.forEach(pokemon => {
            const $figure = document.createElement('figure'), $img = document.createElement('img'), $figcaption = document.createElement('figcaption'), $namePokemon = document.createTextNode(pokemon.name);
            $img.setAttribute('alt', pokemon.name);
            $img.setAttribute('title', pokemon.name);
            fetch(pokemon.url)
                .then(res => res.json())
                .then((res) => {
                $img.setAttribute('src', res.sprites.front_default);
            });
            $figcaption.appendChild($namePokemon);
            $figure.append($img);
            $figure.append($figcaption);
            fragment.appendChild($figure);
        });
        $pokeBox.appendChild(fragment);
    });
}
