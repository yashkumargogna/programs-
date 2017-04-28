var express = require('express');
var router = express.Router();
bodyparser= require('body-parser');
router.use(bodyparser.urlencoded({ extended: true }))

var mongoose = require('mongoose');


var bookingschema = mongoose.Schema({
  postersrc:String,
  movie:String,
  seatid: String,
  totalprice: Number,
  theatrename: String,
  date: String,
  time: String,
  numberofseats: Number,
  client:String,
  clientcard:Number
});

var Boo = mongoose.model('Boo', bookingschema, 'bookingmodel');

// var db= mongoose.connection;
// db.once('open', function(){
//   console.log("connected to DB");
// });

router.get('/book', function(req,res){
  console.log("REACHED GET FUNCTION ON SERVER");
  Boo.find({}, function(err,docs){
    res.json(docs);
  });
});

router.get('/book/:b', function (req, res) {
  console.log(req.params.b);
    console.log("REACHED GET POSTER FUNCTION ON SERVER");
     Boo.find({movie: req.params.b}, function (err, docs) {
         res.json(docs);

    });
});

// router.get('/book2/:b/:c/:d', function (req, res) {
//   console.log(req.params.b);
//   console.log(req.params.c);
//   console.log(req.params.d);
//     console.log("REACHED GET POSTER FUNCTION ON SERVER");
//      Boo.find({seatid: req.params.b,client:req.params.c,movie:req.params.d}, function (err, docs) {
//          res.json(docs);
//
//     });
// });


router.get('/book1/:x/:y/:z', function (req, res) {
  console.log(req.params.x);
  console.log(req.params.y);
  console.log(req.params.z);
    console.log("REACHED GET POSTER FUNCTION ON SERVER");
     Boo.find({theatrename: req.params.x,date: req.params.y,time: req.params.z}, function (err, docs) {
         res.json(docs);

    });
});


router.post('/book', function(req,res){
  console.log(req.body);
  var mnaam = req.body.one;
  var picsrc = req.body.two;
  var id = req.body.seven;
  var name = req.body.three;
  var dt = req.body.four;
  var tem = req.body.five;
  var tp = req.body.eight;
  var nos = req.body.six;
  var cli = req.body.nameoncard;
  var clic= req.body.cno;
  var bookingmodel = new Boo({
    postersrc:picsrc,
    movie:mnaam,
    seatid: id,
    totalprice: tp,
    theatrename: name,
    date: dt,
    time: tem,
    numberofseats: nos,
    client: cli,
    clientcard:clic
  });

  bookingmodel.save(function(err,docs){
    if(err) throw err;
    console.log("ticket Saved Successfully");
    res.json(docs);
  });
});

// router.get('/movie/:a', function (req, res) {
//     console.log("REACHED GET ID FUNCTION ON SERVER");
//      Mov.find({_id: req.params.a}, function (err, docs) {
//          res.json(docs);
//
//     });
// });

// router.get('/movie1/:b', function (req, res) {
//     console.log("REACHED GET POSTER FUNCTION ON SERVER");
//      Mov.find({movieposter: decodeURIComponent(req.params.b)}, function (err, docs) {
//          res.json(docs);
//
//     });
// });

router.delete('/book/:a', function(req, res){
   console.log("REACHED Delete FUNCTION ON SERVER");
      Boo.remove({_id:req.params.a}, function(err, docs){
        res.json(docs);
    });
});

// router.put('/movie/:a', function(req, res){
//     console.log("REACHED PUT");
//     console.log(req.body);
//     Mov.findOneAndUpdate({_id:req.params.a}, req.body, function (err, data) {
//       res.json(data);
//     });
// });


module.exports=router;
