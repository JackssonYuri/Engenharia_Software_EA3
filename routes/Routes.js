const express = require('express');
const bodyParser = require('body-parser');
//================================
const mongoose = require('mongoose');
var cors = require('cors');

const IRoutes = require('./IRoutes.js');

const app = express();


const config = require('../config.js');

let UserController = require('../controllers/' + config.IUserController);
let userController = new UserController();

let IngredienteController = require('../controllers/' + config.IIngredienteController);
let ingredienteController = new IngredienteController();

let ClienteController = require('../controllers/' + config.IClienteController);
let clienteController = new ClienteController();


class Routes extends IRoutes {

  constructor() {
    super();
    mongoose.connect('mongodb+srv://ifb:ifb123@cluster0.lsybq6n.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(express.static('public'));
  } // finaliza construtor

  get() {
    app.get('/', (req, res) => {
      res.send('Rest API com Polimorfismo');
    });
    app.get('/user', userController.show);

    //Ingrediente
    app.get('/ingrediente/buscar', ingredienteController.buscarIngredientes);


    //Cliente
    app.get('/cliente/buscar/:CPF', clienteController.buscarCliente);

  }
  post() {
    app.post('/user', userController.store);
    // lista user

    //Cliente
    app.post('/cliente', clienteController.criarCliente);
  }
  put(){
    app.put('/cliente/:CPF', clienteController.atualizarCliente);
  }

  listen() {
    app.listen(3000, () => {
      console.log('server started on port 3000')
      console.log('http://localhost:3000')
    });
  }

}
module.exports = Routes;
