const express = require('express');
const bodyParser = require('body-parser');
const student = require('./routes/student.route');
const mongoose = require('mongoose');

const app = express();

//database connection
mongoose.connect("mongodb://localhost/studentsDb", {useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>{
    console.log("Connection Successfully");
})
.catch((err)=>{
    console.log('Connection Unsuccessfully!! ',err);
    process.exit();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/students',student);

app.listen(3000, ()=>{
    console.log('Server is running at 3000')
})