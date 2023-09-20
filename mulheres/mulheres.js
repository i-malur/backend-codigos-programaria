const express = require('express');
const router = express.Router();

const app = express();
const porta = 3333;

const mulheres  = [
    //criando objetos
    {
        nome: 'Dua Lipa',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpt.wikipedia.org%2Fwiki%2FDua_Lipa&psig=AOvVaw21aiTotbxwzMksbe9wmDPa&ust=1695168844231000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCODSypiytYEDFQAAAAAdAAAAABAM',
        minibio: 'Cantora e compositora'
    },
    {
        nome: 'Miley Cyrus',
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Miley_Cyrus_Primavera19_-226_%2848986293772%29_%28cropped%29.jpg',
        minibio: 'Cantora, atriz e compositora'
    },
    {
        nome: 'Taylor Swift',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fvalor.globo.com%2Fpolitica%2Fnoticia%2F2023%2F08%2F25%2Ftaylor-swift-vai-virar-lei-no-brasil-entenda.ghtml&psig=AOvVaw2J651ucJ-QEX78ew9dEU7U&ust=1695169053971000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKDszvyytYEDFQAAAAAdAAAAABAI',
        minibio: 'Cantora, diretora, atriz e compositora'
    },

]

function mostraMulheres(request,response) {
    response.json(mulheres);
}

function mostraPorta(){
    console.log('servidor criado e rodando na porta ' + porta);
}
app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta);