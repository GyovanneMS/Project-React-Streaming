import express from "express";
import { conteudo } from "./database/conteudo";
import { Types, isValidObjectId } from "mongoose";
import Joi from "joi";

const rotas = express.Router()

rotas.get("/conteudos", function(req, res){
    conteudo.find()
    .then(function(resultados){
        if(resultados.lengh > 0){
            res.status(200).json(resultados)
        } else {
            res.status(404).json({message: "Nenhum resultado encontrado"})
        }
    }

    ).catch(function(erro){
        res.status(500).json({message: erro.message})
    })
})

rotas.get("/generos", function(req, res){
    conteudo.find()
    .then(function(resultados){
        if(resultados.lengh > 0){
            var lista = new Array
            resultados.map(function(conteudo){
                if (!lista.includes(conteudo.genero))
                return lista.push(conteudo.genero)
            })
            res.status(200).json(lista)
        } else {
            res.status(404).json({message: "Nenhum resultado encontrado"})
        }
    }

    ).catch(function(erro){
        res.status(500).json({message: erro.message})
    })
})

rotas.get("/conteudo/:codigo", function(req, res){
    const { codigo } = req.params;

    if(isValidObjectId(codigo)) {
        conteudo.findById( new Types.ObjectId(codigo))
            .then(function(resultado){
                if(resultado){
                    res.status(200).json(resultado);
                } else {
                    res.status(404).json({ mensagem: "nenhum resultado encontrado" })
                }
            })
            .catch(function(erro){
        res.status(500).json({message: erro.message})
    })
    }
})

rotas.post("/conteudo", async function(req, res){
    const corpo = req.body;

    const esquema = Joi.object({
        capa: Joi.string().url().required(),
        trilha: Joi.string().url().required(),
        titulo: Joi.string().required(),
        descricao: Joi.string(),
        genero: Joi.string().required(),
        ano: Joi.number().required(),
        duracao: Joi.number().required(),
        faixa: Joi.number().required(),
    })

    try {
        const validado = await esquema.validadeAsync(corpo);

        const novoConteudo = conteudo(corpo)

        novoConteudo.save()
            .then(function(resultado){
                res.status(201).json(resultado);
            })
            .catch(function(erro){
                res.status(500).json({message: erro.message})
            });
    }            
    catch(erro){
        res.status(400).json({message: erro.message})
    }
})

export default rotas