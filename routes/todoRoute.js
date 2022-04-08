const express = require("express");
const router = express.Router();
const Todo = require("../models/todoModel");
router.route("/create").post((req, res) => {
  const newTodo = new Todo({
    title: req.body.title,
    description: req.body.description,
    deadline: req.body.deadline,
  });
  console.log("saving");
  newTodo.save();
});
router.route("/todos-list").get((req, res) => {
  Todo.find().then((foundOne) => res.json(foundOne));
});
router.route("/todos-list/:id").get((req, res) => {
  Todo.findById({_id : req.params.id}).then((foundOne) => res.json(foundOne));
});
router.route("/todos-list/:id").delete((req, res) => {
  Todo.findByIdAndDelete({_id : req.params.id}, err=>{if(err) console.log(err)})
}); 

module.exports = router;
