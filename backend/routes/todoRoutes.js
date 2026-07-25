const express = require("express");
const router = express.Router();

const Todo = require("../models/Todo");

// GET

router.get("/", async(req,res)=>{

    const todos = await Todo.find();

    res.json(todos);

});

// POST

router.post("/", async(req,res)=>{

    const todo = new Todo({
        title:req.body.title
    });

    await todo.save();

    res.json(todo);

});

// UPDATE

router.put("/:id", async(req,res)=>{

    const todo = await Todo.findByIdAndUpdate(

        req.params.id,

        req.body,

        {new:true}

    );

    res.json(todo);

});

// DELETE

router.delete("/:id", async(req,res)=>{

    await Todo.findByIdAndDelete(req.params.id);

    res.json({
        message:"Deleted Successfully"
    });

});

module.exports = router;