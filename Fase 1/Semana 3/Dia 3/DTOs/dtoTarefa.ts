export interface criarTarefaDTO {

    tarefa: string;
    data: string;

}

export interface atualizarTarefaDTO {

    id: number,
    tarefa?: string,
    data?: string;

}