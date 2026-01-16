async function BuscaPokemon() {

    try {

        const resp = await fetch( "https://pokeapi.co/api/v2/pokemon?limit=10" );
        const data = await resp.json();
        const pokemons = data.results;
        return pokemons;

    } catch( err ) { console.error( err ) };

}

async function AddPokemonHTML() {

    const main = document.getElementById( 'listaPok' );
    const pokemons = await BuscaPokemon();

    pokemons.map( ( pok ) => {

        const divPok = document.createElement( 'div' );
        const imgPok = document.createElement( 'img' );
        const namePok = document.createElement( 'p' );

        const url = pok.url.split('/');

        const id_pok = url[url.length -2];

        imgPok.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id_pok}.png`;
        namePok.textContent = pok.name;

        divPok.appendChild( imgPok );
        divPok.appendChild( namePok );

        main.appendChild( divPok );

    } )

}

AddPokemonHTML();