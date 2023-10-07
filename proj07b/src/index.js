import express from "express";
import cors from "cors";
import notifier from "node-notifier";
import rotas from "./Rotas.js";
import morgan from "morgan";

const servidor = express()

servidor.use(cors)
servidor.use(express.json())
servidor.use(rotas)
servidor.use(morgan("dev"))

servidor.listen(4000, function(){
    notifier.notify({
        title: "Bagunça no servidor",
        message: "Help-me!!!!! kidnapped me!!!!!",
        icon: "../icon/gato trombone.jpgs"
    })
})