const Movie = require('../models/Movies');

//@desc READ ALL THE MOVIES
//@route GET /api/movies
//@acess PUBLIC

exports.getMovies = async (req,res,next)=>
{   try {
    const displayMovies = await Movie.find();
    res.status(200).json({success : true , data : displayMovies})
} 
    catch (err) {
        res.status(400).json({success : false})
        } 
}

//@desc READ SINGLE MOVIE:id
//@route GET /api/movies/id
//@acess PUBLIC

exports.getMovie =async (req,res,next)=>
{   
    try {
        const singleMovie = await Movie.findById(req.params.id);
        if (!singleMovie) {
            return res.status(400).json({success : false})
        }
        res.status(200).json({success : true , data : singleMovie});
    } catch (err) {
        res.status(400).json({success : false});
    }
    
}
//@desc CREATE MOVIE
//@route POST /api/movies/
//@acess PUBLIC

exports.addMovie = async (req,res,next)=>
{   const newMovie = await  Movie.create(req.body);

    res.status(201).json({
        success: true,
        data : newMovie
    })
}

//@desc UPDATE SINGLE MOVIE:id
//@route GET /api/movies/id
//@acess PUBLIC

exports.updateMovie = async (req,res,next)=>
{   try {
    const updateMovie = await Movie.findByIdAndUpdate(req.params.id, req.body,{
        new : true,
        runValidators:true,
            
    })
    if(!updateMovie)
    {
        res.status(400).json({success : false})
    }
    res.status(200).json({success : true, data : updateMovie})

} catch (err) {
    res.status(400).json({success : false })
}
   
}

//@desc DELETE MOVIE:id
//@route GET /api/movies/id
//@acess PUBLIC

exports.deleteMovie = async(req,res,next)=>
{   try {
        const dm = await Movie.findByIdAndDelete(req.params.id)
        if (!dm){
            res.status(400).json({success : false})
        }
        res.status(200).json({success : true, data : {} })
} catch (error) {
    res.status(400).json({success : false})
}  
}