const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  title:{
    type:String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  user: {
    type:String,
    required: true
  },
  status: {
    type: String,
    default: "Aberto"
  },
  Data: {
    type:Date,
    default: Date.now
  }
});

mongoose.model("Task", TaskSchema);

