export function formatarMoeda( valor ) {

    const moeda = parseFloat(valor).toFixed(2);

    return `R$ ${moeda.replace('.', ',')}`;

}

export function filtrarProdutos(produtos, precoMinimo){

    return produtos.filter(prod => prod.preco >= precoMinimo);

}

export function ordenarPorPreco(produtos){

    return [...produtos].sort((a,b) => a.preco - b.preco);

}