const express = require('express')
const router = express.Router()
const authorize = require('../middleware/authorize')
const { todoSchema } = require('../models/todos')
router.post('/',authorize,async (req,res)=>{
    const todo = new todoSchema({
        title:req.body.title
    }) 
    await todo.save()
    res.send(todo)
})

module.exports = router