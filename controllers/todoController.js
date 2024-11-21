const TODO = require("../models/todoList");

const getAllTodos = async (req, res) => {
  try {
    const todos = await TODO.find().select("-__v");
    return res.json(todos);
  } catch (error) {
    return res.json(error);
  }
};

const getTodoById = async (req, res) => {
  const { id } = req.params;
  try {
    const todo = await TODO.findOne({ _id: id }).select("-__v");
    return res.json(todo);
  } catch (error) {
    return res.json(error);
  }
};

const addTodo = async (req, res) => {
  const { title, description } = req.body;

  const newTodo = {
    title,
    description,
  };
  try {
    const addTodo = await TODO.insertMany([newTodo]);
    const findTodo = await TODO.findOne({ _id: addTodo[0]._id }).select("-__v");
    return res.json(findTodo);
  } catch (error) {
    return res.json(error);
  }
};

const updateTodo = async (req, res) => {
  const { title, description, _id } = req.body;
  const { id } = req.params;

  try {
    const updateTodo = await TODO.findByIdAndUpdate(id, {
      title: title,
      description: description,
    });
    const findTodo = await TODO.findOne({ _id: id }).select("-__v");
    return res.json(findTodo);
  } catch (error) {
    return res.json(error);
  }
};

const deleteTodoById = async (req, res) => {
  const { id } = req.params;
  try {
    const todo = await TODO.findOne({ _id: id });
    const deleteTodo = await TODO.deleteOne({ _id: id });
    return res.json(todo);
  } catch (error) {
    return res.json(error);
  }
};

module.exports = {
  getAllTodos,
  getTodoById,
  addTodo,
  deleteTodoById,
  updateTodo,
};
