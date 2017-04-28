module.exports = function($scope,$http){

  var retrieve = function(){
    $http.get('/theatre/theatre').success(function(response){
      console.log('READ IS SUCCESSFUL');
      $scope.contactlist = response;
      $scope.contact="";
    });
  };

  retrieve();

  $scope.addtheatre = function(){
    console.log($scope.contact);
    $http.post('/theatre/theatre',$scope.contact).success(function(response){
      console.log(response);
      console.log("CREATE IS SUCCESSFUL");
      retrieve();
    });
  };

  $scope.deletetheatre = function(a){
    console.log(a._id);
    $http.delete('/theatre/theatre/' + a._id).success(function(response){
      console.log(response);
      console.log('Deleted successfully');
      retrieve();
    });
    console.log(a);
    $http.delete('/city/city2/' + a.theatrename).success(function(response){
      console.log(response);
      console.log("yipeee");
    });

  };

  $scope.edittheatre = function(a){
    console.log(a);
    $http.get('/theatre/theatre/' + a._id).success(function(response){
      $scope.contact=response[0];
    });
  };

$scope.updatetheatre = function(){
  console.log("Reached Update");
  console.log($scope.contact._id);
  $http.put('/theatre/theatre/'+ $scope.contact._id, $scope.contact).success(function(response){
    console.log(response);
    retrieve();
  });
};
};
