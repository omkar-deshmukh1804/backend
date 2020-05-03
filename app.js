const mongoose = require('mongoose');
const express = require('express');
const dotenv = require('dotenv');
const app = express();
const morgan = require('morgan');
const connectDB = require('./config/db')


//LOAD ENV VARIABLES
dotenv.config({path : "./config/config.env"});

//CONNECT TO DATABASE
connectDB();

//Body Parser
app.use(express.json());

//dev logging middleware
app.use(morgan('dev'));

//ROUtES FILES
const movies = require('./routes/movies');

//MOUNT ROUTERS USING USE
app.use('/api/movies', movies);


const port = process.env.PORT || 5000;

const server = app.listen(port, (req,res) => {
     console.log(`Server running on port ${port}`)
});

//Handle unhandled promise rejection

process.on('unhandledRejection',(err,promise) =>{
        console.log(`Error: ${err.message}`);
        //CLose server if app crashes
        server.close( () => {
                process.exit(1);
        });
});