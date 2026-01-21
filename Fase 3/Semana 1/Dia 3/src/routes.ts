import { Router } from 'express';
import { TarefasControllers } from './controllers/tarefasControllers.js';

const router = Router();
const controllers = new TarefasControllers;

router.get("/tarefas", controllers.listar);
router.post("/tarefas", controllers.criar);
router.delete("/tarefa/:id", controllers.deletar);

export default router;