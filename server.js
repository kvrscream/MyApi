const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());


mongoose.connect("mongodb://localhost:27017/apiextra", {
  useNewUrlParser: true
});

//Registrando Model
require("./src/models/User");
require("./src/models/Task");

app.use(cors());
app.use('/', require('./src/routes'));

app.listen(3001);