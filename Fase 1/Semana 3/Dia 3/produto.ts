export type Produto = {

    id: Number,
    name: string,
    preco: number

};

export function calcularDesconto(produto: Produto, percentual: number) {

    return produto.preco - produto.preco * (percentual / 100);

};

