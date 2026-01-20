import { Router } from 'express';

const router = Router();

router.get("/tarefas", (req, res) => res.json({ msg: "Listando tarefas" }));
router.post("/tarefas", (req, res) => res.json({ msg: "Tarefa Criada" }));
router.put("/tarefa/:id", (req, res) => res.json({ msg: "Tarefa Atualizada" }));
router.delete("/tarefa/:id", (req, res) => res.json({ msg: "Tarefa Deletada" }));

export default router;