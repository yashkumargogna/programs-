module.exports = function($scope,$http){

  var retrieve = function(){
    $http.get('/city/city').success(function(response){
      console.log('READ IS SUCCESSFUL');
      $scope.citylist = response;
      $scope.contactcity="";
    });
  };

  retrieve();

  $scope.addcity = function(){
    console.log($scope.contact);
    $http.post('/city/city',$scope.contact).success(function(response){
      console.log(response);
      console.log("CREATE IS SUCCESSFUL");
      retrieve();
    });
  };

  $scope.deletecity = function(a){
    console.log(a._id);
    $http.delete('/city/city/' + a._id).success(function(response){
      console.log(response);
      console.log('Deleted successfully');
      retrieve();
    });
  };

  $scope.editcity = function(a){
    console.log(a);
    $http.get('/city/city/' + a._id).success(function(response){
      $scope.contact=response[0];
    });
  };

$scope.updatecity = function(){
  console.log("Reached Update");
  console.log($scope.contact._id);
  $http.put('/city/city/'+ $scope.contact._id, $scope.contact).success(function(response){
    console.log(response);
    retrieve();
  });
};
};
