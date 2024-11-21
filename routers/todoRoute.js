const express = require("express");
const todoController = require("../controllers/todoController");

const router = express.Router();

router.get("/todos", todoController.getAllTodos);
router.get("/todos/:id", todoController.getTodoById);

router.post("/todos", todoController.addTodo);

router.patch("/todos/:id", todoController.updateTodo);

router.delete("/todos/:id", todoController.deleteTodoById);

module.exports = router;
