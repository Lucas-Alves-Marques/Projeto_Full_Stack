const produtos = [
    { nome: "Notebook", preco: 3500 },
    { nome: "Mouse", preco: 80 },
    { nome: "Teclado", preco: 150 },
    { nome: "Monitor", preco: 1200 },
    { nome: "Headset", preco: 250 },
    { nome: "Cadeira Gamer", preco: 900 },
    { nome: "Webcam", preco: 200 },
    { nome: "HD Externo", preco: 400 },
    { nome: "Pendrive 64GB", preco: 70 },
    { nome: "Impressora", preco: 650 }
];

const acimaPreco = produtos.filter( ( prod ) => prod.preco > 100 );
// console.log(acimaPreco);

// const prodDesconto = produtos.map((prod) => {

//     prod.preco = prod.preco - (prod.preco * 0.1);

//     return prod;

// });
// console.log(prodDesconto);

const precos = produtos.map( ( prod ) => prod.preco );
console.log( precos )
const vlrTotal = precos.reduce( ( acc, valor ) => acc + valor, 0 );
console.log( vlrTotal );
