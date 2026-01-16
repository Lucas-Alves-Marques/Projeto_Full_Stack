async function buscarPokemons( limit ) {

    try
    {
        let resp;

        if( limit ) resp = await fetch( 'https://pokeapi.co/api/v2/pokemon?limit=20' );

        else resp = await fetch( 'https://pokeapi.co/api/v2/pokemon?limit=10' );

        if( !resp.ok ) throw new Error( `Erro HTTP: ${ resp.status }` );

        const data = await resp.json();

        return data.results;

    } catch( err )
    {

        console.error( "Falha ao buscar lista:", err.message );

        return [];

    }

}

async function buscarDetalhesPokemon( pokemon ) {

    try
    {
        const resp = await fetch( pokemon.url );

        if( !resp.ok ) throw new Error( "Erro ao buscar detalhes" );

        const data = await resp.json();

        return {

            nome: data.name,
            img: data.sprites.front_default,
            tipo: data.types.map( t => t.type.name ).join( ", " )

        }

    } catch( err )
    {

        console.error( `Erro ao carregar ${ pokemon.name }:`, err.message );

        return null;

    }

}

async function carregarPokedex( limit ) {

    const container = document.getElementById( 'listaPok' );

    const busca = document.getElementById( 'busca' );

    const button = document.createElement( 'button' );

    try
    {
        const lista = await buscarPokemons( limit );

        if( lista.length == 0 ) throw new Error( 'Erro na geração da lista' );

        const detalhes = await Promise.all( lista.map( buscarDetalhesPokemon ) );

        if( detalhes.length == 0 ) throw new Error( 'Erro na geração dos detalhes' );

        while( container.firstChild )
        {

            container.removeChild( container.firstChild );
        }

        detalhes
            .filter( Boolean )
            .forEach( p => {

                if( p.nome.toLowerCase().includes( busca.value.toLowerCase() ) )
                {

                    const card = document.createElement( "div" );

                    card.classList.add( "pokemon" );

                    card.innerHTML = `
            
                        <img src="${ p.img }" alt="${ p.nome }">
                        <h3>${ p.nome.toUpperCase() }</h3>
                        <p>${ p.tipo }</p>
            
                    `;

                    container.appendChild( card );


                }

            } )


    } catch( err )
    {

        console.error( 'Erro ao Carragar Pokedex:', err );

        const alert = document.createElement( 'div' );
        const txt_alert = document.createElement( 'p' );

        txt_alert.textContent = 'Não foi posssivel realizar a busca pelos pokemons';
        alert.classList.add( 'msgAlert' );

        alert.appendChild( txt_alert );
        container.appendChild( alert );

    }

}

let maxLimit = false;

function mudarLimite() {

    const button = document.getElementById( 'verMais' );

    if( !maxLimit ) button.textContent = 'Ver Menos';

    else button.textContent = 'Ver Mais';

    carregarPokedex( !maxLimit );

    maxLimit = !maxLimit;

}

document
    .getElementById( 'busca' )
    .addEventListener( 'change', carregarPokedex );

document
    .getElementById( 'verMais' )
    .addEventListener( 'click', mudarLimite );



carregarPokedex();

