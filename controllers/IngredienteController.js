const IIngredienteController = require('./interfaces/IIngredienteController.js');

const mongoose = require('mongoose');
const Ingrediente = require('../models/Ingrediente');

class IngredienteController extends IIngredienteController{
  constructor(){
    super();
       
  }
  async buscarIngredientes(req, res)
    {
        let ingredientes = await Ingrediente.find();
        return res.json(ingredientes);
    }
}
module.exports = IngredienteController;