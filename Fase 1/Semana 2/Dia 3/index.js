async function baixarArquivo() {

    console.log( "Baixando Arquivo..." )

    const resp = await new Promise( ( resolve, reject ) => {

        setTimeout( () => {

            resolve( { arquivo: 'Exemplo Promisse', tamanho: '5mb' } )

            // reject("Falha no download");

        }, 2000 )

    } )

    console.log( "DownLoad Concluido" );

    return resp;

};

async function processarArquivo( arquivo ) {

    console.log( "Processando o Arquivo..." )

    const resp = await new Promise( ( resolve, reject ) => {

        setTimeout( () => {

            if( arquivo ) resolve( arquivo )

            else reject( "Não há arquvio para ser processado" );

        }, 1500 );

    } );

    console.log( "Arquivo Processado" );

    return resp;

};

async function salvarNoBanco( arquivo ) {

    console.log( "Arquivo sendo Salvo..." );

    const resp = await new Promise( ( resolve, reject ) => {

        setTimeout( () => {

            if( arquivo ) resolve( "Arquivo Salvo" )

            else reject( "Não há arquivo para ser salvo" );

        }, 1000 );

    } );

    return resp;

};

async function executarProcesso() {

    try
    {

        const arquivo = await baixarArquivo();
        const arqProcess = await processarArquivo( arquivo );
        const arqSalvo = await salvarNoBanco( arqProcess );

        console.log( arqSalvo );

    }
    catch( err )
    {

        console.error( "Erro:", err );

    }
    finally
    {

        console.log( "Fim do Processo." );

    }

}

executarProcesso();