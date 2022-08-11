const IClienteController = require('./interfaces/IClienteController.js');

const mongoose = require('mongoose');
const Cliente = require('../models/Cliente');

class ClienteController extends IClienteController {
  constructor() {
    super();

  }
  async buscarCliente(req, res) {
    
    let cliente = await Cliente.findOne({ CPF: req.params.CPF });

    return res.json(cliente);

  }
  async criarCliente(req, res) {
    const cliente =  await Cliente.create(req.body);

    return res.json(cliente);
  }
  async atualizarCliente(req, res) {
    let cliente = await Cliente.findOneAndUpdate({ CPF: req.params.CPF }, req.body, {returnDocument: 'after'});
    return res.json(cliente);
  }
}
module.exports = ClienteController;