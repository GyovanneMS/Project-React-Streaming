import React, {useState, useEffect} from "react";
import styled from "styled-components";

const Modelo = styled.div` 
  align-items: center; 
  background: linear-gradient(black, transparent); 
  display: flex; 
  gap: 32px; 
  height: 32px; 
  padding: 32px; 
`

const ModeloImagem = styled.img` 
  height: 48px; 
` 

const ModeloLink = styled.a` 
  color: #fff; 
  text-decoration: none; 
`

export default function Navegacao() {
  const [imagemIndex, setImagemIndex] = useState(0);
  const imagens = ["/logo.png", "/logo 2.png", "/logo 3.png", "/logo 4.png", "/logo 5.png"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImagemIndex(prevIndex => (prevIndex + 1) % imagens.length);
    }, 4000); // Troca de imagem a cada 3 segundos

    return () => {
      clearInterval(intervalId); // Limpa o intervalo quando o componente é desmontado
    };
  }, []); // O array vazio garante que o efeito só é executado após a montagem inicial


    return <Modelo>
        <ModeloImagem src={imagens[imagemIndex]}  alt="logo"/>
        <ModeloLink href="#"> Início </ModeloLink>
        <ModeloLink href="#"> Filmes </ModeloLink>
        <ModeloLink href="#"> Séries </ModeloLink>
        <ModeloLink href="#"> Em alta </ModeloLink>
    </Modelo> 
}