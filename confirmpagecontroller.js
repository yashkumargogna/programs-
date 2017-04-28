module.exports = function($scope,$location,$window,$http){
  $scope.confirmedvalue={};
  $scope.confirmedvalue.one= sessionStorage.getItem('confi1');
  $scope.confirmedvalue.two= sessionStorage.getItem('confi2');
  $scope.confirmedvalue.three= sessionStorage.getItem('confi3');
  $scope.confirmedvalue.four= sessionStorage.getItem('confi4');
  $scope.confirmedvalue.five= sessionStorage.getItem('confi5');
  $scope.confirmedvalue.six= sessionStorage.getItem('confi6');
  $scope.confirmedvalue.seven= sessionStorage.getItem('confi7');
  $scope.confirmedvalue.eight= sessionStorage.getItem('confi8');
  $scope.confirmedvalue.nine= sessionStorage.getItem('confi9');
  $scope.render = function(){
    $location.path('/home');
    $window.location.reload();
  }
  // $scope.getid=function(){
  //   $http.get('/book/book1/'+$scope.confirmedvalue.seven+'/'+$scope.confirmedvalue.nine+'/'+$scope.confirmedvalue.one).success(function(response){
  //     console.log(response);
  //     $scope.ticketid=response._id;
  //   });
  // }
  // $scope.getid();
  $scope.random = function(){
    $scope.abcd=Math.floor((Math.random() * 100) +1);
  }
  $scope.random();

}
