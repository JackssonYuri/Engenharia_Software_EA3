const IUserController = require('./interfaces/IUserController.js');

const mongoose = require('mongoose');
const User = require('../models/User');

class UserController extends IUserController{
  constructor(){
    super();
       
  }
  async index(req,res)
    {
        let users = await User.find(
          { email : req.query.email}
                                   );
        return res.json(users);
    }
  async show(req, res)
    {
        console.log(req.params, "req");
        let users = await User.find();
        return res.json(users);
    }
  async store(req, res)
     {
        const user =  await User.create(req.body);

        return res.json(user);
     }
   async destroy(req,res){
      let user = await 
     User.findByIdAndRemove(req.params.id);
         return res.json(user);
    }
   async update(req,res){
        let user = await 
      User.findByIdAndUpdate(req.params.id,req.body, 
       {new:true}); 
        return res.json(user);
    }
  
}
module.exports = UserController;