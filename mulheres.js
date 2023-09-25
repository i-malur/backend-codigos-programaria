const express = require('express');// iniciando express
const router = express.Router(); // iniciando a configuração da primeira parte da rota

const conectaBancoDeDados = require('./bancoDeDados'); //conectado com o arquivo banco de dados
conectaBancoDeDados(); //chamando a função que conecta o bd

const Mulher = require('./mulherModel'); 

const app = express(); // iniciando o app
app.use(express.json());
const porta = 3333; // criando a porta



//GET - MOSTRA OS DADOS
async function mostraMulheres(request,response){
    try{
        const mulheresVindasDoBancoDeDados = await Mulher.find();
        response.json(mulheresVindasDoBancoDeDados);
    }catch(erro){
        console.log(erro)
    }
}

//POST 
async function criaMulher(request,response){
    const novaMulher = new Mulher({
        //escopo do objeto para a criação de novas mulheres
        nome: request.body.nome,
        imagem: request.body.imagem,
        citacao: request.body.citacao,
        minibio: request.body.minibio
    })

    try{
        //salvando nova mulher no bd
        const mulherCriada = await novaMulher.save();
        response.status(201).json(mulherCriada)
    }catch(erro){
        console.log(erro)
    }
}

//PATCH
async function corrigeMulher(request,response){
    try{
        //encontrando a mulher pela url da requisição
        const mulherEncontrada = await Mulher.findById(request.params.id);
        if(request.body.nome){
            mulherEncontrada.nome = request.body.nome;
        }
    
        if(request.body.imagem){
            mulherEncontrada.imagem = request.body.imagem;
        }
    
        if(request.body.minibio){
            mulherEncontrada.minibio = request.body.minibio;
        }

        if(request.body.citacao){
            mulherEncontrada.citacao = request.body.citacao;
        }

        const mulherAtualizadaNoBancoDeDados = await mulherEncontrada.save()
        response.json(mulherAtualizadaNoBancoDeDados);
    }catch(erro){
        console.log(erro)
    }

    

    
}

//DELETE
async function deletaMulher(request,response){
    try{
        await Mulher.findByIdAndDelete(request.params.id);
        response.json({mensagem: 'Mulher deletada com sucesso!'})

    }catch(erro){
        console.log(erro);
    }
}   
app.use(router.get('/mulheres', mostraMulheres)); // configuração rota get /mulheres
app.use(router.post('/mulheres', criaMulher)); // configurando rota post /mulheres
app.use(router.patch('/mulheres/:id', corrigeMulher)); // configurando rota patch /mulheres/:id
app.use(router.delete('/mulheres/:id', deletaMulher)); // configurando rota delete /mulheres/:id

// PORTA
function mostraPorta(){
    console.log('servidor criado e rodando na porta ' + porta);
}

app.listen(porta, mostraPorta); // SERVIDOR OUVINDO A PORTA