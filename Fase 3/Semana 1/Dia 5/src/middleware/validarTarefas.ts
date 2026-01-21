import { Response, Request, NextFunction } from "express";

export function validarTarefa(req: Request, res: Response, next: NextFunction){

    if(!req.body.titulo) return res.status(400).json({erro: "Título é obrigatorio"});

    next();

}