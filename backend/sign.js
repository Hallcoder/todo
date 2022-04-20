const mongoose = require('mongoose')
const express = require('express')
const app = express();
const config = require('config')
const cors = require('cors')
const notes = require('../backend/routes/notes')
const bodyParser = require('body-parser')
const signup = require('./routes/signup');
const { exist } = require('joi');
const URL =  'mongodb://localhost:27017/TodoUsers'
mongoose.connect(URL)
 .then(_ => console.log('Db connected'))
 .catch(err  => console.log(err.message))
app.use(express.json())
app.use(bodyParser.json())
app.use(cors());
app.use('/signup',signup)
app.use('/notes',notes)
app.get('/',(req,res)=>{
    res.send('Hello world')
})
if(!config.get('jwtPrivateKey')){
    console.error('Error: The key is not defined');
    process.exit(1);
}
app.listen(5000,()=>{
    console.log('Listening on port 5000');
})