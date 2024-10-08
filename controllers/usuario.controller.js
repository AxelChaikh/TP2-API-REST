import usuariosService from "../services/usuario.service.js";


const getAllUsuarios =  async (req, res) => {
        const usuarios = await usuariosService.getAllUsuarios();
        res.status(200).send(usuarios);
}

const postUsuarios =  async (req, res) => {

    const usuario = req.body;

    if (req.body == "{}") {
        throw new Error("El objeto no tiene los parametros validos")
    }else {
        const newUsuario = await usuariosService.postUsuarios(usuario)
        res.send(newUsuario)
    }
}

const patchUsuarios =  async (req, res) => {

    const {id} = req.params;
    const data = req.body;
    const patchUsuario = await usuariosService.patchUsuarios(id, data)
    res.send(patchUsuario)
}




export default {
    getAllUsuarios,
    postUsuarios,
    patchUsuarios
}
