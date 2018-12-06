const mongoose = require("mongoose");

const User = mongoose.model("User");

module.exports = {

  async index(req, res) {
    const users = await User.find();

    return res.json(users);
  },

  async login(req, res){
    const user = await User.find({username: req.body.username, password: req.body.password});
    
    return res.json(user);
  },

  async create(req, res){
    const response = await User.create(req.body);
    return res.json(response);
  },

  async update(req, res){
    const response = await User.findByIdAndUpdate(req.params.id, req.body, {new:true});
    return res.json(response)
  },

  async delete(req, res){
    const response = await User.findByIdAndRemove(res.params.id);
    return res.send();
  }

}