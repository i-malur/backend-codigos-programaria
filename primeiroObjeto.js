const express = require('express');

//rota
const router = express.Router();

const app = express();
const porta = 3333;

function mostraMulher(request, response) {
    //enviar várias informações pela internet
    response.json({
        nome: 'Maria Luiza',
        imagem: 'https://avatars.githubusercontent.com/u/139374041?v=4',
        minibio: 'técnica em ds'
    })

}

function mostraPorta(){
    console.log('servidor criado e rodando na porta ' + porta);
}
app.use(router.get('/mulher', mostraMulher));
app.listen(porta, mostraPorta);


