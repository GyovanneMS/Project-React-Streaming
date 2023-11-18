import mongoose from "mongoose";

const esquema = new mongoose.Schema({
    email: String,
    senha: String,
},
{
    collation: "Usuarios"
}
)

const usuario = mongoose.model("usuario", esquema)

export {usuario}