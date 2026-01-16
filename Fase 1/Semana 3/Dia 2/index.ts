// interface Usuario {
//     nome: string;
//     idade?: number; // pode existir ou não
// }

// interface Produto {
//     readonly id: number;
//     nome: string;
//     preco: number;
// }

// interface Pessoa {

//     nome: string;

// }

// interface Funcionario extends Pessoa {

//     cargo: string;

// }

// function identidade<T>(valor: T): T {
//     return valor;
// }

// function primeiroElemento<T>(lista: T []): T | undefined{

//     return lista[0];

// }

// let codigo: string | number;

// const u1: Usuario = { nome: "Lucas" }; // válido
// const u2: Usuario = { nome: "João", idade: 25 }; // válido

// const p: Produto = { id: 1, nome: "Teclado", preco: 199.9 };
// // p.id = 2; ❌ erro

// codigo = "A123";
// codigo = 123; // ambos válidos

// const f: Funcionario = { nome: "Lucas", cargo: "Dev" };

// // console.log(identidade<string>("Lucas"));
// // console.log(identidade<number>(42));

// console.log(primeiroElemento<number>([1, 2, 3])); // 1
// console.log(primeiroElemento<string>(["A", "B", "C"])); // A

// EXERCICIO

type Product = {

    name: string,
    price: number,
    stock: boolean;
};

type OrderStatus = "pendente" | "enviado" | "entregue";

type Order = {

    product: Product,
    amount: number,
    status: OrderStatus;

};

interface ApiResponse<T> {

    message: string,
    dados: T

};

function buscarItem<T>(lista: T[], index: number): T | undefined {

    return lista[index]

};

const produtos: Product[] = [
    { name: "Mouse", price: 59.9, stock: true },
    { name: "Teclado", price: 120, stock: false },
];

const primeiro = buscarItem(produtos, 0);

// console.log(primeiro);


const order: Order = {
    product: { name: "Mouse", price: 59.9, stock: true },
    amount: 2,
    status: "pendente",
};

const productResponse: ApiResponse<Product> = {

    message: "Produto Encontrado",
    dados: {name: 'Monitor', price: 899.90, stock: true}

};

console.log("Produto:", productResponse.dados.name);
console.log("Pedido status:", order.status);
console.log("Primeiro item da lista:", buscarItem(produtos, 0)?.name);




