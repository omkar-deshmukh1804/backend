const mongoose = require('mongoose');

const MoviesSchema = new mongoose.Schema({
    name :
    {
        type : String,
        required:[true, 'Please add movie name'],
        unique : true,
        trim : true,
        maxlength: 100,
    },
    img:
    {
        type : String,
        default:'no-photo.jpg',
    },
    summary :{
        type : String,
        required:[true, 'Please add summary name'],
        unique : true,
        trim : true,
        maxlength: 1000,
    }
    
});
module.exports = mongoose.model('Movies',MoviesSchema);