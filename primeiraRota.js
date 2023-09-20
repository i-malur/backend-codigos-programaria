const express = require('express');
const router = express.Router();

const app = express();
const porta = 3333;

function mostraPorta(){
    console.log('servidor criado e rodando na porta ' + porta);
}

function mostraOla(request, response) {
    response.send("olá")
}

//endereço para que executar a função 
//método get para pegar as informções
app.use(router.get('/ola',mostraOla));
app.listen(porta, mostraPorta);

//localhost:3333/ola