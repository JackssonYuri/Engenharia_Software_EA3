const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EnderecoSchema = new Schema(
    {
        CEP: String,
        UF: String,
        cidade: String,
        bairro: String,
        logradouro: String 
    }
);

const TelefoneSchema = new Schema(
    {
        numero: String,
        ddd: Number
    }
);

const ClienteSchema = new Schema(
    {
        nome: String,
        CPF: String,
        endereco: EnderecoSchema,
        telefone: TelefoneSchema
    }
);

module.exports = mongoose.model('Cliente', ClienteSchema);