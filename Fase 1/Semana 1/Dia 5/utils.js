export function salvarLocalStorage( chave, valor ) {

    localStorage.setItem(chave, JSON.stringify(valor));

}

export function carregarLocalStorage(chave){

    const dados = localStorage.getItem(chave);

    return dados ? JSON.parse(dados) : [];

}