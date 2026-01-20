import { Router } from 'express';
import { TarefasControllers } from './controllers/tarefasControllers.js';
import { logger } from './middleware/logger.js';
import { validarTarefa } from './middleware/validarTarefas.js';

const router = Router();
const controllers = new TarefasControllers;

router.get("/tarefas", controllers.listar);
router.post("/tarefas", validarTarefa, logger, controllers.criar);
router.delete("/tarefa/:id", validarTarefa, logger, controllers.deletar);

export default router;