var express = require('express');
var router = express.Router();
bodyparser= require('body-parser');
router.use(bodyparser.urlencoded({ extended: true }))

var mongoose = require('mongoose');


var cityschema = mongoose.Schema({
  //cityname: String

  moviTitle : String,
      TN : [
          {
              name : [
                  {
                      t1 : String,
                      d1 : [
                          String
                        ],
                      tm1 : [
                          String

                      ]
                  }

              ]
          }

      ]









//  moviTitle : String,
  //tn
      // TN : {
      //     name : {
      //        [
      //           {
      //                 "date" : [
      //                     "10-12-2016",
      //                     "12-12-2016"
      //                 ],
      //                 "time" : [
      //                     "2:30",
      //                     "3:30"
      //                 ]
      //             },
      //             {
      //                 "date" : [
      //                     "11-12-2016",
      //                     "14-12-2016"
      //                 ],
      //                 "time" : [
      //                     "12:30",
      //                     "21:30"
      //                 ]
      //             }
      //         ],
      //         "pvr jalandhar" : []
      //     }
      // }






});

var Ci = mongoose.model('Ci', cityschema, 'city');


router.get('/city', function(req,res){
  console.log("REACHED GET FUNCTION ON SERVER");
  Ci.find({}, function(err,docs){
    res.json(docs);
  });
});

router.get('/city1/:b', function(req,res){
  console.log("REACHED GET theatre accd. to movie FUNCTION ON SERVER");
  Ci.find({moviTitle: decodeURIComponent(req.params.b)}, function(err,docs){
    res.json(docs);
  });
});

router.get('/city2/:d/:v', function(req,res){
  //console.log("hello");
  // console.log(req.params.config.params.one);
//  console.log(req.params.v);
  console.log("REACHED GET theatre accd.12345 to movie FUNCTION ON SERVER");
  Ci.find({moviTitle:req.params.d,"TN.name.t1":req.params.v}, function(err,docs){
    res.json(docs);
    //console.log(res.json(docs));
  });
});


var city;
router.post('/city', function(req,res){
  console.log("hello post");
  console.log(req.body);
  //console.log(req.$scope.info);
    var mname = req.body.mm;
    var tname = req.body.tt;
    var dt = req.body.info.date;
    var tm= req.body.info.time;

  //    cityname: name
   city = new Ci({
  moviTitle : mname,
      TN:[
          {
              name : [
                  {
                      t1 : tname,
                      d1 : [
                          dt
                        ],
                      tm1 : [
                          tm

                      ]
                  }

              ]
          }
      ]




   });

  city.save(function(err,docs){
    if(err) throw err;
    console.log("Info Saved Successfully");
    res.json(docs);
  });
});

router.get('/city/:a', function (req, res) {
    console.log("REACHED GET ID FUNCTION ON SERVER");
     Ci.find({_id: req.params.a}, function (err, docs) {
         res.json(docs);

    });
});

router.delete('/city/:a', function(req, res){
   console.log("REACHED Delete FUNCTION ON SERVER");
      Ci.remove({_id:req.params.a}, function(err, docs){
        res.json(docs);
    });
});


router.delete('/city1/:a', function(req, res){
   console.log("REACHED Delete FUNCTION ON SERVER");
      Ci.remove({moviTitle:req.params.a}, function(err, docs){
        res.json(docs);
    });
});

router.delete('/city2/:a', function(req, res){
   console.log("REACHED Delete by theatre FUNCTION ON SERVER");
      Ci.remove({"TN[0].name[0].t1":req.params.a}, function(err, docs){
        res.json(docs);
    });
});


router.put('/city/:a', function(req, res){
    console.log("REACHED PUT123");
  //  console.log(req.body);
    console.log("hello");
    console.log(req.params.a);
    //Ci.findOneAndUpdate({city.TN[0].name[0]._id: req.params.a}, req.body, function (err, data) {
    //  res.json(data);
      console.log("hello123");
    //});
});


module.exports=router;
