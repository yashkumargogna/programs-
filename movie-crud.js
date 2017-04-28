var express = require('express');
var router = express.Router();
bodyparser= require('body-parser');
router.use(bodyparser.urlencoded({ extended: true }))

var mongoose = require('mongoose');


var movieschema = mongoose.Schema({
  movieid: String,
  moviename: String,
  movieyear: String,
  movierelease: String,
  movieruntime: String,
  moviegenre: String,
  moviedirector: String,
  movieactors: String,
  movielanguage: String,
  movieposter: String,
  movieplot: String,
  imdbID: String
});

var Mov = mongoose.model('Mov', movieschema, 'movie');

// var db= mongoose.connection;
// db.once('open', function(){
//   console.log("connected to DB");
// });

router.get('/movie', function(req,res){
  console.log("REACHED GET FUNCTION ON SERVER");
  Mov.find({}, function(err,docs){
    res.json(docs);
  });
});

router.post('/movie', function(req,res){
  console.log(req.body);
  var id = req.body.imdbID;
  var name = req.body.Title;
  var rls = req.body.Released;
  var year = req.body.Year;
  var rt = req.body.Runtime;
  var genre = req.body.Genre;
  var director = req.body.Director;
  var actors = req.body.Actors;
  var lang = req.body.Language;
  var poster = req.body.Poster;
  var plot = req.body.Plot;
  var movie = new Mov({
    imdbID: id,
    moviename: name,
    movieyear: year,
    movierelease: rls,
    movieruntime: rt,
    moviegenre: genre,
    moviedirector: director,
    movieactors: actors,
    movielanguage: lang,
    movieposter: poster,
    movieplot: plot
  });

  movie.save(function(err,docs){
try{


    if(err) throw err;
    console.log("Book Saved Successfully");
    res.json(docs);
    }
    catch(Exception)
    {

    }
  });
});

router.get('/movie/:a', function (req, res) {
    console.log("REACHED GET ID FUNCTION ON SERVER");
     Mov.find({_id: req.params.a}, function (err, docs) {
         res.json(docs);

    });
});

router.get('/movie1/:b', function (req, res) {
    console.log("REACHED GET POSTER FUNCTION ON SERVER");
     Mov.find({movieposter: decodeURIComponent(req.params.b)}, function (err, docs) {
         res.json(docs);

    });
});


router.get('/movie2/:b', function (req, res) {
  console.log(req.params.b);
    console.log("REACHED GET POSTER FUNCTION ON SERVER");
     Mov.find({moviename: req.params.b}, function (err, docs) {
         res.json(docs);

    });
});


router.delete('/movie/:a', function(req, res){
   console.log("REACHED Delete FUNCTION ON SERVER");
      Mov.remove({_id:req.params.a}, function(err, docs){
        res.json(docs);
    });
});

router.put('/movie/:a', function(req, res){
    console.log("REACHED PUT");
    console.log(req.body);
    Mov.findOneAndUpdate({_id:req.params.a}, req.body, function (err, data) {
      res.json(data);
    });
});


module.exports=router;
