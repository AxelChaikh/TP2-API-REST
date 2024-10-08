
const usuarios = [
    {id: 1, nombre: "Axel", edad: 26, nota: 10},
    {id: 2, nombre: "Mateo", edad: 29, nota: 8},
    {id: 3, nombre: "Bru", edad: 26, nota: 7},
    {id: 4, nombre: "Laura",  edad: 30, nota: 9},
    {id: 5, nombre: "Santiago",  edad: 25, nota: 10}
]

const getAllUsuarios = async () => {

    return await usuarios
}

const postUsuarios = async (usuario) => {
    usuario.id = usuarios[usuarios.length - 1].id + 1;
    usuarios.push(usuario)
    return usuarios
}

const patchUsuarios = async (id, data) => {
    const index = usuarios.findIndex((usuario) => usuario.id == id)

    const newUsuario = {...usuarios[index], ...data}
    usuarios.splice(index, 1, newUsuario)

    console.log("Usuario nuevo: ", newUsuario)
    return "Ok"
}


export default {
    getAllUsuarios,
    postUsuarios,
    patchUsuarios
}