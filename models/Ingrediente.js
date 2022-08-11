const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IngredienteSchema = new Schema(
    {
        codigo: Number,
        nome: String,
        quantidade: Number
    }
);

module.exports = mongoose.model('Ingrediente', IngredienteSchema);