const mongoose = require("mongoose");

const Task = mongoose.model("Task");

module.exports = {

  async index(req, res){
    const tasks = await Task.find({user: req.body.user});
    return res.json(tasks);
  },

  async single(req, res){
    const tasks = await Task.find({_id: req.params.id});
    return res.json(tasks);
  },

  async create(req, res){
    const tasks = await Task.create(req.body);
    return res.json(tasks);
  },

  async update(req, res){
    const response = await Task.findByIdAndUpdate(req.params.id, req.body, {new:true});
    return res.json(response);
  },

  async delete(req, res){
    await Task.findByIdAndRemove(req.params.id);
    return res.send();
  }

}