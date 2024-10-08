import usuariosController from "../controllers/usuario.controller.js";
import express from "express";

const router = express.Router();

router.get("/usuarios", usuariosController.getAllUsuarios);
router.post("/usuarios", usuariosController.postUsuarios)
router.patch("/usuarios/update/:id", usuariosController.patchUsuarios)


export default router;