import mongoose from "mongoose";
import notifier from "node-notifier";
import "dotenv/config";


const endereco = process.env.MONGOURL

const opcao = {userNewUrlParser:true, useUnifiedTopology:true}

mongoose.connect(endereco, opcao)
.then( function(){
        notifier.notify({
            title: "5 + 5 =/= 25",
            message: "bd lindo maravilhoso",
            icon: "https://media.tenor.com/UxN27en5ihAAAAAM/dance-anime.gif"
        })
    }

)
.catch(function(erro) {
    console.log(erro.message)
}

)