const express = require("express");
const todoController = require("../controllers/todoController");

const router = express.Router();

router.get("/tasks", todoController.getAllTodos);
router.get("/tasks/:id", todoController.getTodoById);

router.post("/tasks", todoController.addTodo);

router.patch("/tasks/:id", todoController.updateTodo);

router.delete("/tasks/:id", todoController.deleteTodoById);

module.exports = router;
