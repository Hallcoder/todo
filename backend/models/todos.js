const mongoose = require('mongoose');
const Joi = require('joi');

const todoSchema  = new mongoose.Schema({
    title:{
        type:String,
        minlength:1,
        maxlength:10,
        required:true
    }
})

module.exports.todoSchema = mongoose.model('todos',todoSchema)