//chamando os comandos do express através do require
const express = require('express');

//chamando a função do pacote express que se chama express
const app = express();
const porta = 3333;

function mostraPorta(){
    console.log('servidor criado e rodando na porta ' + porta);
}

//após execução da porta, executa-se a função.
app.listen(porta, mostraPorta);