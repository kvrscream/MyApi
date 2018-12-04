const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({
  username:{
    type: String,
    required: true
  },
  password: {
    type:String,
  },
  name:{
    type: String
  },
  active:{
    type: Number
  }
});

mongoose.model("User", UserSchema);