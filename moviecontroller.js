module.exports = function($scope,$http){

  var retrieve = function(){
    $http.get('/movie/movie').success(function(response){
      console.log('READ IS SUCCESSFUL');
      $scope.contactlist = response;
      $scope.contact="";
    });
  };

  retrieve();

  $scope.addmovie = function(contact){
    console.log($scope.contact);
    $http.get(`http://www.omdbapi.com/?t=${contact.moviename}&plot=short&r=json`).success(function(response){
      var movieobj = {};
      console.log(response);
      for(var key in response){
        if(key=='Title' || key=='Year' || key=='Released' || key=='Runtime' || key=='Genre' || key=='Director' || key=='Actors' || key=='Language' || key=='Poster' || key=='Plot' || key=='imdbID'){
          movieobj[key]=response[key];
        }
      }

    $http.post('/movie/movie', movieobj).success(function(response){
      console.log(response);
      console.log("CREATE IS SUCCESSFUL");
      retrieve();
    });
    });
  };

  $scope.deletemovie = function(a){
    console.log(a._id);
    $http.delete('/movie/movie/' + a._id).success(function(response){
      console.log(response);
      console.log('Deleted successfully');
      retrieve();
    });
    $http.delete('/city/city1/'+a.moviename).success(function(response){
      console.log(response);
    });
  };

  $scope.editmovie = function(a){
    $http.get('/movie/movie/' + a._id).success(function(response){
      $scope.contact=response[0];
    });
  };

$scope.updatemovie = function(){
  console.log("Reached Update");
  console.log($scope.contact._id);
  $http.put('/movie/movie/'+ $scope.contact._id, $scope.contact).success(function(response){
    console.log(response);
    retrieve();
  });
};
};
