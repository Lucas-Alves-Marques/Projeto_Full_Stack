type name  = string;
type phone = number;
type enablad = boolean; 

const names: string[] = ["Lucas", "Alan", "Gabriel"]; 

type User = {

    name: string,
    age: number,
    enablad: boolean;

};

interface Produto {

    name: string;
    price: number;

};

function saudacaoUser(user: User){

    console.log(`Olá ${user.name}, o sistema registrou sua idade como ${user.age} anos.`);

};

function calcularDesconto(produto: Produto, percentual: number){

    produto.price  = produto.price + (produto.price * (percentual / 100));

    console.log(`O novo preço do produto ${produto.name} é de R$ ${produto.price}`);

};

// saudacaoUser({name: 'Lucas Alves', age: 22, enablad: true});

// calcularDesconto({name: 'Batata', price: 5.80}, 5);