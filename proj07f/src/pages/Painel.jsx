import React from "react";
import Principal from "../components/Principal";
import Formulario from "../components/Formulario";

export default function Painel() {
    return <>
      <Principal fundo="bgcine.jpg" tamanho="488px">
        <Formulario/>
      </Principal>
    </>
}