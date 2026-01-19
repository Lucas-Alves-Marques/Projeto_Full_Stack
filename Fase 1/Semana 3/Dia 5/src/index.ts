import {criarTarefa, listarTarefas } from "./Services/tarefasServises";

criarTarefa({ tarefa: 'Regar as plantas', data: '19/01/2026' })
criarTarefa({ tarefa: 'Começar nova Fase do Projeto', data: '19/01/2026' });

console.log('\nTarefas Criadas');

console.log(listarTarefas());
