import usuariosModel from "../models/usuario.model.js";

const getAllUsuarios = async () => {
    return usuariosModel.getAllUsuarios()
}

const postUsuarios =  async (usuario) => {
    return usuariosModel.postUsuarios(usuario)
}

const patchUsuarios =  async (id, data) => {
    return usuariosModel.patchUsuarios(id, data)
}

export default {
    getAllUsuarios,
    postUsuarios,
    patchUsuarios
}