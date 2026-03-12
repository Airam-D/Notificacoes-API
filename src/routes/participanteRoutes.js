const { Router } = require("express");
const router = Router();

// Crie o router, importe o controller, defina as 5 rotas
const ParticipanteController = require("../controllers/ParticipanteController");

// Siga exatamente o padrão do eventoRoutes.js
router.get("/", ParticipanteController.index);
router.get("/:id", ParticipanteController.show);
router.post("/", ParticipanteController.store);
router.put("/:id", ParticipanteController.update);
router.delete("/:id", ParticipanteController.destroy);

module.exports = router;