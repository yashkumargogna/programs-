var express = require('express');
var router = express.Router();
bodyparser= require('body-parser');
router.use(bodyparser.urlencoded({ extended: true }))

var mongoose = require('mongoose');


var userschema = mongoose.Schema({
username:String,
userpassword:String
});

var user = mongoose.model('user', userschema, 'usermodel');

// var db= mongoose.connection;
// db.once('open', function(){
//   console.log("connected to DB");
// });

router.get('/admin', function(req,res){
  console.log("REACHED GET FUNCTION ON SERVER");
  user.find({}, function(err,docs){
    res.json(docs);
  });
});

router.post('/admin', function(req,res){
  console.log(req.body);
  var un = req.body.adminname;
  var up = req.bodt.adminpass;
  var usermodel = new user({
    username:un,
    userpassword:up
  });

  usermodel.save(function(err,docs){
    if(err) throw err;
    console.log("Admin Saved Successfully");
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

router.delete('/admin/:a', function(req, res){
   console.log("REACHED Delete FUNCTION ON SERVER");
      user.remove({_id:req.params.a}, function(err, docs){
        res.json(docs);
    });
});

router.put('/admin/:a', function(req, res){
    console.log("REACHED PUT");
    console.log(req.body);
    user.findOneAndUpdate({_id:req.params.a}, req.body, function (err, data) {
      res.json(data);
    });
});


module.exports=router;
