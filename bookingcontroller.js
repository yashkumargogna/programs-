module.exports =  function($scope,$http){
$scope.n_seat=0;
  var counter = 0;
  $scope.co =0;
  $scope.price=0;

  for(var k=0; k<6; k++){
     if(k==0){
      for(var z=0;z<20;z++){
        $('#i').each(function(i) {
          $(this).append("<i id='chair_"+(counter)+"' class='icon-chair'></i>")
          for(var g=0;g<$scope.n_seat;g++){
          $('#chair_'+counter).on('click',function()
          {
            if( $('#' + this.id).css('color') == 'rgb(0, 0, 0)' )
            {
              $('#' + this.id).css({'color':'rgb(0,255,0)'});
              console.log($scope.n_seat);
              // $scope.co++;
            }
            else
            {
              $('#' + this.id).css({'color':'rgb(0,0,0)'});
              // $scope.co--;
            }
          });
        }


        counter++;

      })
    }
  }
  else{
    for(var x=0;x<20;x++){
      if(x==5||x==6||x==7||x==8||x==9){
        $('#i').each(function(i) {
          $(this).append("\u2007"+"\u2007")
      })
      }
      else{
        $('#i').each(function(i) {
          $(this).append("<i id='chair_"+(counter)+"' class='icon-chair'></i>")
          $('#chair_'+counter).on('click',function()
          {
            if( $('#' + this.id).css('color') == 'rgb(0, 0, 0)' )
            {
              $('#' + this.id).css({'color':'rgb(0,255,0)'});
              $scope.co++;
              if($scope.co>$scope.n_seat){
                $('#' + this.id).css({'color':'rgb(0,0,0)'});
                alert("Reduce the no. of seats.")
              }

            }
            else
            {
              $('#' + this.id).css({'color':'rgb(0,0,0)'});
              $scope.co--;
            }
          });


        counter++;

      })
    }
  }
}
    var newElem = document.createElement("BR");
    var div = document.getElementById("i");
    div.insertBefore(newElem, i[k]);

}


$('<i class="icon-chair"></i>').click(function(){
    $('<i class="icon-chair"></i>').css("color", "red");
});

//***********************************************************

var counter2 = 0;
$scope.seatarr=[];

for(var k=0; k<6; k++){
   if(k==0){
    for(var z=0;z<20;z++){
      $('#i2').each(function(i2) {
        $(this).append("<i id='chair2_"+(counter2)+"' class='icon-chair'></i>")

        $('#chair2_'+counter2).on('click',function(e)
        {             $scope.select();

          if( $('#' + this.id).css('color') == 'rgb(0, 0, 0)' )
          {
            $('#' + this.id).css({'color':'rgb(0,255,0)'});
             $scope.seatarr.push(this.id);
             $scope.price = $scope.price+200;
            //  $scope.select();
            $scope.co++;
            if($scope.co>$scope.n_seat){
               alert($scope.n_seat+" selected.");
               $('#' + this.id).css({'color':'rgb(0,0,0)'});
               var index = $scope.seatarr.indexOf(this.id);
               $scope.seatarr.splice(index,1);
               $scope.co--;
               console.log($scope.seatarr);
               if($scope.price>0){
                 $scope.price = $scope.price-200;
               }
              //  $scope.select();
            }
          }
          else if($('#' + this.id).css('color') == 'rgb(255, 0, 0)'){
            alert("can't book this seat")
          }
          else
          {
            $('#' + this.id).css({'color':'rgb(0,0,0)'});
            var index = $scope.seatarr.indexOf(this.id);
            $scope.seatarr.splice(index,1);
            $scope.co--;
            if($scope.price>0){
              $scope.price = $scope.price-200;
            }
          }
        });



      counter2++;

    })
  }
}
else{
  for(var x=0;x<20;x++){
    if(x==4||x==5||x==14||x==15){
      $('#i2').each(function(i2) {
        $(this).append("\u2007"+"\u2007")
    })
    }
    else{
      $('#i2').each(function(i2) {
        $(this).append("<i id='chair2_"+(counter2)+"' class='icon-chair'></i>")
        $('#chair2_'+counter2).on('click',function()
        {
          if( $('#' + this.id).css('color') == 'rgb(0, 0, 0)' )
          {
            $('#' + this.id).css({'color':'rgb(0,255,0)'});
             $scope.seatarr.push(this.id);
             $scope.price = $scope.price+100;
            $scope.co++;
            if($scope.co>$scope.n_seat){
               alert($scope.n_seat+" selected.");
               $('#' + this.id).css({'color':'rgb(0,0,0)'});
               var index = $scope.seatarr.indexOf(this.id);
               $scope.seatarr.splice(index,1);
               $scope.co--;
               console.log($scope.seatarr);
               if($scope.price>0){
                 $scope.price = $scope.price-100;
               }
            }
          }
          else if($('#' + this.id).css('color') == 'rgb(255, 0, 0)'){
            alert("cant book this seat")
          }
          else
          {
            $('#' + this.id).css({'color':'rgb(0,0,0)'});
            var index = $scope.seatarr.indexOf(this.id);
            $scope.seatarr.splice(index,1);
            $scope.co--;
            if($scope.price>0){
              $scope.price = $scope.price-100;
            }
          }
        });


      counter2++;

    })
  }
}
}
  var newElem = document.createElement("BR");
  var div = document.getElementById("i2");
  div.insertBefore(newElem, i[k]);

}

$('<i class="icon-chair"></i>').click(function(){
  $('<i class="icon-chair"></i>').css("color", "red");
});



//******************************************************************************
$scope.home_obj_movname=sessionStorage.getItem('homemoviename');
// console.log($scope.home_obj);
$scope.home_obj_movimg=sessionStorage.getItem('homemovieposter');
$scope.home_obj_movact=sessionStorage.getItem('homemovieactors');
$scope.home_obj_movgen=sessionStorage.getItem('homemoviegenre');
$scope.home_obj_movdir=sessionStorage.getItem('homemoviedirector');


//***********************************************************
$http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&q='+$scope.home_obj_movname+'trailer'+'&key=AIzaSyC4ZpRRNTE-wQldCPcMSSbSqxtTSWH6r0E')
    .then(response => {
      

var trailer_id=response.data.items[0].id.videoId;

var trailer="https://www.youtube.com/embed/"+trailer_id;


document.getElementById('player').setAttribute("src",trailer);


});

//*******************************************************

//*************************************************************
var refresh = function(){
 var s = $scope.home_obj_movname;
//  var x= encodeURIComponent(s);
// console.log(x);
  $http.get('/city/city1/'+s).success(function(response){
    console.log('READ IS SUCCESSFUL');
    console.log(response);
    $scope.theatrelist = response;
    // console.log($scope.theatrelist);
    $scope.t=[];
    for(var g=0;g<$scope.theatrelist.length;g++){
      $scope.t.push(g);
    }
  });
};
refresh();

//********************************************************
$scope.contactbook;
//********************************************************
$scope.proceed1 = function(){
  var s = $scope.home_obj_movname;
  var y = $scope.contactbook.bthname;
  console.log(y);

  $http.get('/city/city2/'+s+'/'+y).success(function(response){
    console.log(response);
    $scope.dt=response;
    console.log($scope.dt[0].TN[0].name[0].d1[0]);
    $scope.d = $scope.dt[0].TN[0].name[0].d1;
    $scope.tm = $scope.dt[0].TN[0].name[0].tm1;
    console.log($scope.dt[0].TN[0].name[0].tm1[0]);

$scope.lis = $scope.dt[0].TN[0].name[0].tm1[0];
$scope.lis2 = $scope.dt[0].TN[0].name[0].d1[0];
    var removeValue = function(list) {
  separator =  ",";
  list = list.split(separator);
  // console.log(list);
  return list;
}
$scope.lis = removeValue($scope.lis);
console.log($scope.lis);
$scope.lis2 = removeValue($scope.lis2);
console.log($scope.lis2);

  });
}


//******************************************************************************
$scope.myFunction = function() {
  {
$scope.radiodate= $('input[name="optradio1"]:checked').val();
  console.log($scope.radiodate);
  $scope.radiotime= $('input[name="optradio2"]:checked').val();
    console.log("Time" +$scope.radiotime);
  }
  if(($scope.radiodate!=undefined)&&($scope.radiotime!=undefined)){
    console.log("fixseat called");

   fixseat2($scope.radiodate,$scope.radiotime);
 }
}



$scope.select = function(){
  console.log("selecct func");
  console.log($scope.seatarr);
  console.log($scope.price);
}

$scope.validate = function(){
  console.log("validate");
  console.log($scope.contactbook);
  console.log($scope.radiodate);
  console.log($scope.radiotime);
  console.log($scope.seatarr);
  if(($scope.n_seat=="0")||($scope.contactbook==undefined)||($scope.radiodate==undefined)||($scope.radiotime==undefined)||($scope.seatarr.length==0)){
    $('#confirmhref').attr("href","#/booking");
       alert("Enter the Values.")
  }
  else{
      $('#confirmhref').attr("href","#/payment");

  }
};
 // $scope.validate();
//reachignatius@gmail.com



$scope.confirm =  function(){
  // $scope.confirmvalue={};
  console.log("confirm func called");
  // console.log($scope.contactbook.bthname);
  // $scope.confirmvalue.mname=$scope.home_obj_movname;
  sessionStorage.setItem('confi1', $scope.home_obj_movname);
  sessionStorage.setItem('confi2', $scope.home_obj_movimg);
  sessionStorage.setItem('confi3', $scope.contactbook.bthname);
  sessionStorage.setItem('confi4', $scope.radiodate);
  sessionStorage.setItem('confi5', $scope.radiotime);
  sessionStorage.setItem('confi6', $scope.n_seat);
  sessionStorage.setItem('confi7', $scope.seatarr);
  sessionStorage.setItem('confi8', $scope.price);
};

$scope.sli=[];
$scope.list2=[];
$scope.a=0;

var fixseat2 = function (q,w) {

  if($scope.a>0){
    console.log("yoyo");
  for(var q=0;q<$scope.list2.length;q++){
    $('#' +$scope.list2[q]).css({'color':'rgb(0,0,0)'});
    $('#' +$scope.list2[q]).css({'cursor':'default'});
  }
  $scope.list2=[];



}

  $http.get('/book/book1/'+$scope.contactbook.bthname+'/'+$scope.radiodate+'/'+$scope.radiotime).success(function(response){
console.log(response );
console.log($scope.contactbook.bthname);
console.log($scope.radiodate);
console.log($scope.radiotime);
if(response.length!=0){
  for(var i=0;i<response.length;i++){
      var removeValue = function(list) {
    separator =  ",";
    list = list.split(separator);
    return list;
    }
    // removeValue(response[i].seatid);
    $scope.list2=$scope.list2.concat(removeValue(response[i].seatid));
console.log($scope.list2);

console.log("length" +$scope.list2.length);
  }
  for(var q=0;q<$scope.list2.length;q++){
    $('#' +$scope.list2[q]).css({'color':'rgb(255,0,0)'});
    $('#' +$scope.list2[q]).css({'cursor':'no-drop'});
    $scope.a++;

    // if(a<=q)
    // {
    //   console.log("kkkk");
    //   var b=a;
    //   if(b!=$scope.list2.length)
    //   {
    //     for(var q=0;q<$scope.list2.length;q++){
    //       $('#' +$scope.list2[q]).css({'color':'rgb(0,0,0)'});
    //       $('#' +$scope.list2[q]).css({'cursor':'default'});
    //       // $('#' +$scope.list2[q]).on('click');
    //     }
    //     $scope.list2=[];
    //
    //   }
    }
    // $('#' +$scope.list2[q]).off('click');
  // }
  // $scope.list2=[];
  // console.log("alok" + $scope.list2);
}

else {
  // var handler = function(e){
  //   // on('click');
  // }
  for(var q=0;q<$scope.list2.length;q++){
    $('#' +$scope.list2[q]).css({'color':'rgb(0,0,0)'});
    $('#' +$scope.list2[q]).css({'cursor':'default'});
    // $('#' +$scope.list2[q]).on('click');
  }
  $scope.list2=[];



}
});
}

//******************************************************************

// sessionStorage.setItem('homemoviename', minfo.moviename);

}
