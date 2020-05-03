const mongoose = require('mongoose');
const express = require('express');

const router = express.Router();

const {getMovie,getMovies,addMovie,updateMovie,deleteMovie,} = require('../controllers/movies');

router.route('/').get(getMovies).post(addMovie);

router.route('/:id').get(getMovie).put(updateMovie).delete(deleteMovie);


//EXPORT MODULE
module.exports = router;