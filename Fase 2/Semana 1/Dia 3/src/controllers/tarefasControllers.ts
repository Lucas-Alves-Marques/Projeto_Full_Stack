import { Request, Response } from 'express';

let tarefas = [{ id: 1, titulo: "Estudar Node", concluida: false }];

export class TarefasControllers{

    listar(req: Request, res: Response){

        return res.json(tarefas);
            
    }

    criar(req: Request, res: Response){

        const novaTarefa = {id: tarefas.length +1, ...req.body};

        tarefas.push(novaTarefa);

        return res.status(200).json(novaTarefa);

    }

    deletar(req: Request, res: Response){

        const {id} = req.params;

        tarefas = tarefas.filter(t => t.id !== Number(id));

        return res.status(200).send();
        
    }

};