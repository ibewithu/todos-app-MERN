const mongoose = require("mongoose");
const todoSchema = {
  title: String,
  description: String,
  deadline: String,
};

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
