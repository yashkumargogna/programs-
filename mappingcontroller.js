module.exports = function($scope,$http){

  var retrieve = function(){


    $http.get('/movie/movie').success(function(response){
      console.log('READ IS SUCCESSFUL');
      $scope.contactlist = response;
      $scope.contact="";
    });
  };
  retrieve();
  var refresh = function(){
    $http.get('/theatre/theatre').success(function(response){
      console.log('READ IS SUCCESSFUL');
      $scope.theatrelist = response;
      $scope.theat="";



    });
  };

  refresh();

  var re= function(){
    $http.get('/city/city').success(function(response){
      console.log('READ IS SUCCESSFUL');
      $scope.citylist = response;
      $scope.contactcity="";
    });
  };

  re();


var today=new Date();
$('#datetimepicker1').multiDatesPicker({
dateFormat: "dd-mm-yy",
minDate:0,
maxDate:7
});


$scope.hr=[ ];
$scope.mn=[ ];
  for(var i=0;i<25;i++){
    $scope.hr.push(i);
   }
   for(var i=0;i<60;i++){
     $scope.mn.push(i);
   }
$scope.opt;
$scope.a;
$scope.gh =  function(){
   var hours = document.getElementById('hrs');
    $scope.opt = hours.options[hours.selectedIndex].text;
   $scope.a=$scope.opt+" hrs:";
};


$scope.opt1;
$scope.b;
$scope.gm =  function(){
  var minutes = document.getElementById('mins');
    $scope.opt1 = minutes.options[minutes.selectedIndex].text;
  $scope.b=$scope.opt1+" mins";
};

$scope.arr=[ ];
$scope.ins = function(){
$scope.c=$scope.a+$scope.b;
    $scope.arr.push($scope.c);
    document.getElementById('comment').innerHTML=$scope.arr;
console.log($scope.arr);
};
$scope.del= function(){
  $scope.arr.pop();
  document.getElementById('comment').innerHTML=$scope.arr;
};


// $scope.info={ };
$scope.ok = function(){
  var d = document.getElementById('datetimepicker1').value;
  $scope.contactcity.info={
    date : d,
    time : $scope.arr
  };
   document.getElementById('comment').innerHTML=$scope.contactcity.info.date+":\r"+$scope.contactcity.info.time;
   //console.log($scope.contactcity);
   console.log($scope.contactcity);
   $http.post('/city/city',$scope.contactcity).success(function(response){
     //console.log(response.TN[0].name[0]._id);
     console.log("CREATE IS SUCCESSFUL");
     console.log(response.TN[0].name[0]._id);
     $scope.p =response._id;
     window.setTimeout(function(){
       alert("Mapped successfully");
     document.getElementById('comment').innerHTML=" ";
     //$scope.info={ };
     document.getElementById('datetimepicker1').value=" ";
     document.getElementById('hrs').value="0";
     document.getElementById('mins').value="0";
     $scope.arr=[ ];
     $scope.contactcity.info={};
     getmapping();
   },2000);
 });


   $scope.addtime = function(){
     console.log("Reached Update");
     console.log($scope.contactcity);
     $http.put('/city/city/'+ $scope.p, $scope.contactcity).success(function(response){
       console.log(response);
     });
};


$scope.cancel= function(){
  document.getElementById('comment').innerHTML=" ";
  $scope.arr=[ ];
  $scope.contactcity.info={ };
  document.getElementById('datetimepicker1').value=" ";
  document.getElementById('hrs').value="0";
  document.getElementById('mins').value="0";
};

};

var getmapping = function(){
  $http.get('/city/city').success(function(response){
    $scope.map = response;
    console.log($scope.map);
  });
};
getmapping();

$scope.deletemapping = function(a){
  console.log(a._id);
  $http.delete('/city/city/' + a._id).success(function(response){
    console.log(response);
    console.log('Deleted successfully');
    getmapping();
  });
};

};
