const mongoose = require('mongoose');
require('dotenv').config();


//javascript assincrono
async function conectaBancoDeDados(){
    try {
        console.log('Conexão com bd iniciou');
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Conexão com bd realizada com sucesso ');
    } catch(erro){
        console.log(erro)
    }
    
}

module.exports = conectaBancoDeDados;