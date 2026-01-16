//  EXERCICIO 1

// const promise = new Promise( ( resolve, reject ) => {

//     const sucesso = false;

//     setTimeout( () => {

//         if( sucesso )
//         {

//             resolve( "Operação concluída com sucesso!" );

//         }

//         else
//         {

//             reject( "Algo deu errado..." );
//         }

//     }, 2000 );


// } );

// console.log( "Início" );

// promise
//     .then( ( resp ) => { console.log( "✅", resp ); } )
//     .catch( ( err ) => { console.log( "❌", err ) } )
//     .finally(() => {console.log("🏁 Finalizado")});

// console.log("Fim");

//  EXERCICIO 2

// function buscarUsuarios() {

//     return new Promise( ( resolve ) => {

//         setTimeout( () => resolve( { id: 1, nome: "Lucas Alves" } ), 1000 );

//     } );

// };

// function buscarPedidos( usuarioID ) {

//     return new Promise( ( resolve ) => {

//         setTimeout( () => {

//             resolve( [ "Mouse", "Teclado", "Monitor" ] )

//         }, 1500 );

//     } );

// };

// console.log( "Iniciando..." );

// buscarUsuarios()
//     .then( ( usuario ) => {

//         console.log( "Usuário encontrado:", usuario.nome );
//         return buscarPedidos( usuario.id );

//     } )
//     .then( pedidos => console.log( "Pedidos:", pedidos ) )
//     .catch( err => console.error( "Erro:", err ) )
//     .finally( () => console.log( "Processo encerrado." ) );

//  EXERCICIO 3

// function buscarPedido(id){

//     return new Promise((resolve, reject) => {

//         setTimeout(() => {

//             if(id > 0)  resolve({ id, nome: "Produto X"})

//             else reject("ID Inválido");

//         }, 1000);

//     });


// }

// buscarPedido(0)
//     .then(res => console.log("Produto:", res))
//     .catch(err => console.error("Erro capturado:", err))
//     .finally(() => console.log("Operação finalizada."));

//  DESAFIO

function baixarArquivo() {

    return new Promise( ( resolve, reject ) => {

        setTimeout( () => {

            resolve( { arquivo: 'Exemplo Promisse', tamanho: '5mb' } )

        }, 2000 )

    } )

};

function processarArquivo( arquivo ) {

    return new Promise( ( resolve, reject ) => {

        setTimeout( () => {

            if( arquivo ) resolve( arquivo )

            else reject( "Não há arquvio para ser processado" );

        }, 1500 );

    } );

};

function salvarNoBanco(arquivo) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if(arquivo) resolve("Arquivo Salvo")

            else reject("Não há arquivo para ser salvo");

        }, 1000);

    });

 };

baixarArquivo()
    .then((data) =>  processarArquivo(data) )
    .then((data) => salvarNoBanco(data) )
    .then( () => console.log( "✅ Tudo concluído com sucesso!" ) )
    .catch( err => console.error( "❌ Erro:", err ) )
    .finally( () => console.log( "🏁 Fim do processo." ) )




