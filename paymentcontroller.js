module.exports = function($scope,$http,$location,$route,$window){
  $scope.pay;
  $scope.year=[];
  $scope.cvv;
  $scope.confirmedvalue={};
  $scope.confirmedvalue.nameoncard;
  $scope.confirmedvalue.cno;


  //******************************************************************************
  $scope.confirmedvalue.one= sessionStorage.getItem('confi1');
  $scope.confirmedvalue.two= sessionStorage.getItem('confi2');
  $scope.confirmedvalue.three= sessionStorage.getItem('confi3');
  $scope.confirmedvalue.four= sessionStorage.getItem('confi4');
  $scope.confirmedvalue.five= sessionStorage.getItem('confi5');
  $scope.confirmedvalue.six= sessionStorage.getItem('confi6');
  $scope.confirmedvalue.seven= sessionStorage.getItem('confi7');
  $scope.confirmedvalue.eight= sessionStorage.getItem('confi8');
  console.log($scope.confirmedvalue);
//******************************************************************************

  var getyear = function()
{

  var d=new Date();
  var y=d.getFullYear();


    for(var i=0;i<=10;i++)
  {
    var year=y+i;
    $scope.year.push(year);
  }
}
getyear();

var hide = function(){
  $('#menu1').fadeIn(500).delay(1000);

$('#cash').on('click',function(){
  $('#menu2').fadeOut(500).delay(1000);
  $('#menu1').fadeIn(500).delay(1000);
});

$('#card').on('click',function(){
  $('#menu1').fadeOut(500).delay(1000);
  $('#menu2').fadeIn(500).delay(1000);
})
}
hide();

$scope.paydone =  function(){
  var cardno = $scope.confirmedvalue.cno.toString();
  var cvvno = $scope.cvv.toString();
if(cardno.length>16||cardno.length<16){
  alert("Invalid Card Number!");
  // $('#makepay').attr("href","#/payment");
}
if(cvvno.length>3||cvvno.length<3){
  alert("Invalid CVV Number!");
  // $('#makepay').attr("href","#/payment");
}
else{
  $http.post('/book/book',$scope.confirmedvalue).success(function(response){
    console.log(response);
    $location.path('/confirmpage');
    $window.location.reload();
    sessionStorage.setItem("confi9",  $scope.confirmedvalue.nameoncard);

    //  $('#makepay').attr("href","#/confirmpage");
  })
}
}

// $scope.render =  function(){
// }
};
