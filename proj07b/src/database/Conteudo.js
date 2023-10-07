import mongoose from "mongoose";

const esquema = new mongoose.Schema({
    capa: String,
    video: String,
    titulo: String,
    descricao: String,
    genero: String,
    ano: Number,
    duracao: Number,
    faixa: Number
},
{
    collation: "proj07"
}
)

const conteudo = mongoose.model("conteudo", esquema)

export {conteudo}