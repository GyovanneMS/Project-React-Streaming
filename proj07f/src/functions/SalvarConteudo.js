import axios from "axios";

export default function SalvarConteudo(conteudo){
    return axios({
        method: "POST",
        url: "http://localhost:4000/contudo",
        data: {
            capa: conteudo.capa,
            trilha: conteudo.trilha,
            titulo: conteudo.titulo,
            descricao: conteudo.descricao,
            genero: conteudo.genero,
            ano: parseInt(conteudo.ano),
            duracao: parseInt(conteudo.duracao),
            faixa: parseInt(conteudo.faixa)
        }
    })
}