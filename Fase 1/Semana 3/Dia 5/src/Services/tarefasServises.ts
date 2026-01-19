import { Tarefa } from "../Models/tarefa";
import { criarTarefaDTO } from "../DTOs/dtoTarefa";
import { atualizarTarefaDTO } from "../DTOs/dtoTarefa";

let banco: Tarefa[] = [];

export function criarTarefa(dados: criarTarefaDTO): Tarefa {

    const nova = {id: banco.length + 1, ...dados};

    banco.push(nova);

    return nova

}
  
export function listarTarefas(): Tarefa[]{

    return banco;

}

export function atualizarTarefa(dados: atualizarTarefaDTO): atualizarTarefaDTO | null {

    const index = banco.findIndex(t => t.id === dados.id);
  
    if (index === -1) return null;
  
    banco[index] = { ...banco[index], ...dados };
  
    return banco[index];

}

export function deletarTarefa(id: number): boolean {

    const index = banco.findIndex(t => t.id === id);
  
    if (index === -1) return false;
  
    banco.splice(index, 1);

    return true;
  
}