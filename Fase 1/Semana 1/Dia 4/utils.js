export function somar( a, b ) {

    return a + b;

};

export function dobrar( numero ) {

    return numero * 2;

};

export function calcularMedia( numeros ) {

    const total = numeros.reduce( ( acc, valor ) => acc + valor, 0 );

    return total / numeros.length;

};

export function aumentarPrecos( produtos, porcentagem ) {

    return produtos.map( ( prod ) => {

        prod.preco = prod.preco + ( prod.preco * ( porcentagem / 100 ) );

        return prod;

    } )

};
