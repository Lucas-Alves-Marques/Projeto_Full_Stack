import { Tarefa } from "../Models/tarefa";
import { criarTarefaDTO } from "../DTOs/dtoTarefa";

let banco: Tarefa[] = [];

export function criarTarefa(dados: criarTarefaDTO): Tarefa {

    const nova = {id: banco.length + 1, ...dados};

    banco.push(nova);

    return nova

}
  
export function listarTarefas(): Tarefa[]{

    return banco;

}