var express = require('express');
var router = express.Router();
bodyparser= require('body-parser');
router.use(bodyparser.urlencoded({ extended: true }))

var mongoose = require('mongoose');


var theatreschema = mongoose.Schema({
  theatrename: String,
  theatrelocation: String,
  // theatreseats: String,
  theatrestates: String,
});

var Th = mongoose.model('Th', theatreschema, 'theatre');


router.get('/theatre', function(req,res){
  console.log("REACHED GET FUNCTION ON SERVER");
  Th.find({}, function(err,docs){
    res.json(docs);
  });
});

router.post('/theatre', function(req,res){
  console.log("hello post");
  console.log(req.body);
   var name = req.body.theatrename;
   var location = req.body.theatrelocation;
   var seats = req.body.theatreseats;
   var states = req.body.theatrestates;
   var theatre = new Th({
     theatrename: name,
     theatrelocation: location,
    //  theatreseats: seats,
     theatrestates: states
   });

  theatre.save(function(err,docs){
    if(err) throw err;
    console.log("Book Saved Successfully");
    res.json(docs);
  });
});

router.get('/theatre/:a', function (req, res) {
    console.log("REACHED GET ID FUNCTION ON SERVER");
     Th.find({_id: req.params.a}, function (err, docs) {
         res.json(docs);

    });
});

router.delete('/theatre/:a', function(req, res){
   console.log("REACHED Delete FUNCTION ON SERVER");
      Th.remove({_id:req.params.a}, function(err, docs){
        res.json(docs);
    });
});

router.put('/theatre/:a', function(req, res){
    console.log("REACHED PUT");
    console.log(req.body);
    Th.findOneAndUpdate({_id:req.params.a}, req.body, function (err, data) {
      res.json(data);
    });
});


module.exports=router;
