const express = require('express');
const router = express.Router();
// User Model
const User = require('../models/User');
// Todo Model
const Todo = require('../models/Todo');
const { ensureAuthenticated } = require('../config/auth');

//View Todos
router.get('/viewTodo', ensureAuthenticated, async (req, res) => {
    const todos = await Todo.find({userId: req.user._id});
    res.render('todos',{
        todos
    })
});

// Handle Add todo
router.post('/addTodo', ensureAuthenticated, async(req, res) => {
    const newTodo = new Todo();
    newTodo.name = req.body.todoName;
    newTodo.userId = req.user._id
    // newTodo.save().then(() => {
    //     req.flash(
    //         'success_msg',
    //         'Todo Added Succesfully',
    //     );
    //     res.redirect('/todo/viewTodo');
    // })
    // .catch(err => console.log(err));
    await newTodo.save();
    const todos = await Todo.find({userId: req.user._id});
    res.render('todos',{
        todos
    })
});

module.exports = router;
