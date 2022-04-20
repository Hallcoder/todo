const express = require('express');
const app = express()  
const { validateUser, userSchema} = require('../models/users');
const lodash = require('lodash')
const router = express.Router();

router.post('/', async(req,res)=>{
    const {error}  = validateUser(req.body)
    if(error) return res.send(error.message)
    const result = await userSchema.findById(req.body.id)
     if(result) return res.send('User is already registered')
    try {
        const user = new userSchema({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });
       const token = user.generateToken()
        await user.save()
        res.header('x-token',token).send(user)  
    } catch (error) {
    console.log(error);
      res.send(error.message)  
    }
   
})

module.exports =  router