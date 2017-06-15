const express = require('express');

const router = express.Router();

const queries = require('../db/queries.js');

function isValidMovie(movie){
  const hasTitle = typeof movie.title == 'string' && movie.title.trim() != '';
  const hasGuideboxID = !isNaN(movie.guidebox_id);
  return hasTitle && hasGuideboxID;
}

router.get('/', (req, res)=>{
  queries.getAllMovies().then(movies=>{
    res.json(movies);
  });
});

router.post('/', (req,res)=>{
  console.log(req.body);
  if(isValidMovie(req.body)){
    console.log('was true');
  queries.createMovie(req.body).then(movie=>{
    res.json(movie[0]);
  });
} else{
  console.log('errored out');
  next(new Error('Invalid movie'));
}
});

module.exports = router;
