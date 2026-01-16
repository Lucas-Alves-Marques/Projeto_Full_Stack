const produto = { nome: "Notebook Lenovo Ideapad", preco: 3500.00, categoria: "Eletrônicos" };
const { nome, preco } = produto;

// console.log(`O produto ${nome} custa R$ ${preco}.`);

const numeros = [ 5, 10, 15 ];
const copiaNumeros = [ ...numeros ];
const novosNumeros = [ ...numeros, 20, 25, 30 ];
const [ primeiro, ...outros ] = numeros;

// console.log(copiaNumeros);
// console.log(novosNumeros);
// console.log(outros);

const calcularMedia = ( ...notas ) => {

  const soma = notas.reduce( ( acc, valor ) => acc + valor, 0 );

  return soma / notas.length;

}

// console.log(calcularMedia(1,4,6,8));


const pedido = {

  cliente: "Lucas",
  produtos: [
    { nome: "Mouse", preco: 50 },
    { nome: "Teclado", preco: 100 }
  ]

}

const { cliente, produtos } = pedido;
const precos = produtos.map( ( ped ) => ped.preco );
const vlrTotal = precos.reduce( ( acc, valor ) => acc + valor, 0 );

// console.log( `Cliente: ${ cliente }\nTotal do Pedido: R$${ vlrTotal }` );