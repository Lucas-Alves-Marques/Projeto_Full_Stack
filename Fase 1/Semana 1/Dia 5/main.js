import { salvarLocalStorage, carregarLocalStorage } from "./utils.js";

const app = {

    tarefas: carregarLocalStorage( "tarefas" ),

    init() {

        this.renderizar();
        document.getElementById( "adicionar" ).addEventListener( "click", () => this.adicionar() );

    },

    adicionar() {

        const input = document.getElementById( "novaTarefa" );
        const texto = input.value.trim();

        if( !texto ) return;

        this.tarefas = [...this.tarefas, {id: Date.now(), texto}];

        salvarLocalStorage("tarefas",this.tarefas);

        input.value = "";

        this.renderizar();

        console.log("Ta Salvo")

    },

    remover(id) {

        this.tarefas = this.tarefas.filter( ( t ) => t.id !== id );
        salvarLocalStorage( "tarefas", this.tarefas );
        this.renderizar();
    },

    renderizar() {

        const lista = document.getElementById( "listaTarefas" );

        lista.innerHTML = "";

        this.tarefas.forEach( tarefa => {

            const li = document.createElement( "li" );

            li.textContent = tarefa.texto;

            const botaoRemover = document.createElement( "button" );

            botaoRemover.textContent = "❌";

            botaoRemover.addEventListener( "click", () => this.remover( tarefa.id ) );

            li.appendChild( botaoRemover );

            lista.appendChild( li );

        } );

    }

};

app.init();
