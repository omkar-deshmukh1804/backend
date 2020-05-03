const mongoose = require('mongoose');
const express = require('express');
const dotenv = require('dotenv');

//LOAD ENV VARIABLES

dotenv.config({path : "./config/config.env"});

const app = express();


const port = process.env.PORT || 5000;

app.listen(port, (req,res) => {
     console.log(`Server running on port ${port}`)
});