const express = require("express");

const routes = express.Router();
const UserCotroller = require("./controllers/userController");
const TasksController = require("./controllers/tasksController");

//Usuários
routes.get("/", UserCotroller.index);
routes.post("/login", UserCotroller.login);
routes.post("/create", UserCotroller.create);
routes.post("/update/:id", UserCotroller.update);
routes.get("/delete/:id", UserCotroller.delete);

//Tarefas 
routes.post("/tasks", TasksController.index);
routes.post("/tasks/create", TasksController.create);
routes.post("/tasks/update/:id", TasksController.update);
routes.get("/tasks/delete/:id", TasksController.delete);


module.exports = routes;