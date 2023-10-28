import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Modelo = styled.div`
  background-image: url(${ props => props.fundo });
  background-size: cover;
  height: 100vh;
`

const Barra = styled.div`
  background: linear-gradient(black, transparent);
  padding: 32px;
`

const BarraImagem = styled.img`
  display: block;
  margin: 0 auto;
  height: 48px;
` 

const Mensagem = styled.div`
  margin: 0 auto;
  padding: 64px 0;
  text-align: center;
  width: ${ props => props.tamanho };
`

export default function Principal(props) {
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

  return (
    <Modelo fundo={props.fundo}>
      <Barra>
        <BarraImagem src={imagens[imagemIndex]} alt="logo" />
      </Barra>

      <Mensagem tamanho={props.tamanho}>
        {props.children}
      </Mensagem>
    </Modelo>
  );
}
