import { listPokemon } from './interface/interface'
import { pokemon } from './interface/interface'
export default function fetch_pokemon(): void{
    const url_pokemon : string= 'https://pokeapi.co/api/v2/pokemon',
     $pokeBox: HTMLElement = <HTMLElement> document.getElementById('pokeBox'),
     fragment: Node = document.createDocumentFragment()


    fetch(url_pokemon)
        .then(response => response.json())
        .then((res: listPokemon)=>{
            res.results.forEach(pokemon =>{
                const $figure: HTMLElement = document.createElement('figure'),
                    $img : HTMLElement = document.createElement('img'),
                    $figcaption : HTMLElement = document.createElement('figcaption'),
                    $namePokemon: Node = document.createTextNode(pokemon.name)

                $img.setAttribute('alt',pokemon.name)
                $img.setAttribute('title',pokemon.name)

                fetch(pokemon.url)
                    .then(res => res.json())
                    .then((res: pokemon) =>{
                        $img.setAttribute('src',res.sprites.front_default)
                    })

                $figcaption.appendChild($namePokemon)
                $figure.append($img)
                $figure.append($figcaption)
                fragment.appendChild($figure)
            })

            $pokeBox.appendChild(fragment)
        })
}