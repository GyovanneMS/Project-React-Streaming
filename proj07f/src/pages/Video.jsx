import React, {useState, useEffect} from "react";
import ObterUnicoConteudo from "../functions/ObterUnicoConteudo";
import {useParams} from "react-router-dom"
import Reprodutor from "../components/Reprodutor";
import Principal from "../components/Principal"

export default function Video() {

    const {codigo} = useParams()
    const [ conteudo, definirConteudo ] = useState({})

    useEffect(function() {
        ObterUnicoConteudo(codigo)
        .then(function(resposta) {
            if(resposta === 200)
                definirConteudo(resposta.data)
            else 
                console.log(resposta)
        .catch(function(erro){
            console.log(erro)
        })
        })
    }, [])

    return<>
        {   conteudo &&
            <Principal fundo={conteudo.capa} tamanho="700px">
                <Reprodutor conteudo={conteudo} />
            </Principal>
        }
    </>
}