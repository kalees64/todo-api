const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: false,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const todo = mongoose.model("todos", todoSchema);
module.exports = todo;
