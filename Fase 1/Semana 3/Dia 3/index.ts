import type { Produto } from "./produto.ts";
import { calcularDesconto } from "./produto";
import { atualizarTarefa, criarTarefa, deletarTarefa, listarTarefas } from "./Services/tarefasServises";

const item: Produto = { id: 1, name: 'Monito', preco: 100 };
const novoValor = calcularDesconto(item, 10);

// console.log(`${item.name} com desconto: R$${novoValor}`);

// DTO (Data Transfer Object)

// interface criarUsuarioDTO {

//     name: string,
//     email: string,
//     password: string;

// }

// function cadastrarUsuario(dados: criarUsuarioDTO) {

//     console.log(`Usuário ${dados.name} foi cadastrado com sucesso.`)

// }

// cadastrarUsuario({
//     name: "Lucio",
//     email: "lucio@email.com",
//     password: "12345"
// })

// Exercicio

criarTarefa({ tarefa: 'Regar as plantas', data: '19/01/2026' })
criarTarefa({ tarefa: 'Começar nova Fase do Projeto', data: '19/01/2026' });

console.log('\nTarefas Criadas');

console.log(listarTarefas());

atualizarTarefa({id: 2, data: '20/01/2026'})

console.log('\nTarefa Atualizada');

console.log(listarTarefas());

deletarTarefa(2);

console.log('\nTarefa Excluida');

console.log(listarTarefas());

console.log("\n");


