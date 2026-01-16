import { somar, dobrar, calcularMedia, aumentarPrecos } from "./utils.js";
import { formatarMoeda, filtrarProdutos, ordenarPorPreco, } from "./helpers.js";

// console.log(somar(5,8));
// console.log( dobrar( 8 ) );

const numeros = [ 1, 2, 3 ];
const novosNum = [ ...numeros, 4, 5, 6 ];
// console.log(numeros);
// console.log(novosNum);

const notas = [ 8, 7, 9, 10 ];
// console.log("Média:", calcularMedia(notas));

const produtos = [
    { nome: "Mouse", preco: 50 },
    { nome: "Teclado", preco: 100 },
];

const novosProdutos = aumentarPrecos( produtos, 10 );
// console.log("Produtos atualizados:", novosProdutos);

const produtos2 = [
    { nome: "Notebook", preco: 3500.50 },
    { nome: "Mouse", preco: 79.9 },
    { nome: "Teclado", preco: 150 },
    { nome: "Monitor", preco: 1200 },
    { nome: "Headset", preco: 249.99 },
    { nome: "Cadeira Gamer", preco: 899.5 },
    { nome: "Webcam", preco: 220 },
    { nome: "HD Externo", preco: 480 },
    { nome: "Pendrive 64GB", preco: 59.9 },
    { nome: "Impressora", preco: 650 }
];

// Testar formatarMoeda
console.log( formatarMoeda( "1200" ) );     
console.log( formatarMoeda( "79.9" ) );     
console.log( formatarMoeda( "249,99" ) );

// Testar filtrarProdutos
const filtrados = filtrarProdutos( produtos2, 500 );
console.log( "Produtos com preço >= 500:", filtrados );

// Testar ordenarPorPreco
const ordenados = ordenarPorPreco( [ produtos2 ] );
console.log( "Produtos ordenados por preço:", ordenados );

