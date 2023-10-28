import React, {useState, useEffect} from "react";
import Destaque from "../components/Destaque";
import Navegacao from "../components/Navegacao";
import Sessao from "../components/Sessao";
import ObterConteudos from "../functions/ObterConteudos";
import ObterGeneros from "../functions/ObterGeneros";


export default function Explorar(){

    const [conteudos, definirConteudos] = useState([])
    const [generos, definirGeneros] = useState([])

    useEffect(function() {
        ObterConteudos()
        .then(function(resposta){
            if(resposta.status == 200)
                definirConteudos(resposta.data)
            else 
                console.log(resposta)
        })
        .catch(function(erro) {
            console.log(erro)
            alert(erro.message)
        })

        ObterGeneros()
        .then(function(resposta){
            if(resposta.status == 200)
                definirGeneros(resposta.data)

            else if(resposta.status == 404)
                alert("nenhum genero encontrado!!!")
            
            else if(resposta.status == 500)
                alert("Problema no servidor, deslogue, seus dados vão ser hackeados, rápido!!!")
            
            else 
                console.log(resposta)
        })
        .catch(function(erro) {
            console.log(erro)
            alert(erro.message)
        })
    }, [])

    return <>
        <Destaque fundo="assistindo.jpg">
            <Navegacao/>
        </Destaque>

        {
            generos.length > 0 && 
            generos.map(function(genero, indice){
                return <Sessao
                    key={indice}
                    genero={genero}
                    conteudos={conteudos}
                />
            })
        }
    </>
}