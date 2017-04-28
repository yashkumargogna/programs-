module.exports = function($scope,$http,$window,$route,$location){

  function  display()
  {
    console.log("hlooooobffjb");
    var tf=sessionStorage.getItem('t1');
    console.log("hello"+tf);
    // alert(tf);
    sessionStorage.setItem("tfinal",tf);
}
display();

    $scope.contactlist=[];
    var getmapping = function(){
      var promise = $http.get('/city/city').success(function(response){
        $scope.map = response;
        console.log($scope.map);
      });
      promise.then(function(){
        for(var i=0;i<$scope.map.length;i++){
          var s=$scope.map[i].moviTitle;
          console.log($scope.map[i].moviTitle);
        $http.get('/movie/movie2/'+s).success(function(response){
         $scope.contactlist.push(response);
         console.log($scope.contactlist);
      })
    }

    });
    };
    getmapping();


  // $scope.getinfo = function(a){
  //   $http.get('/movie/movie/'+a).success(function(response){
  //     console.log(response);
  //     minfo=response[0];
  //     sessionStorage.setItem('homemoviename', minfo.moviename);
  //     sessionStorage.setItem('homemovieposter', minfo.movieposter);
  //     sessionStorage.setItem('homemovieactors', minfo.movieactors);
  //     sessionStorage.setItem('homemoviegenre', minfo.moviegenre);
  //     sessionStorage.setItem('homemoviedirector', minfo.moviedirector);
  //
  //   })
  // }

  m = function(_src){
  x=_src;
  document.getElementById('image').src=x;
  console.log(x);
  var s= encodeURIComponent(x);

  $http.get('/movie/movie1/'+s).success(function(response){
    console.log(response);
    minfo= response[0];
    console.log(minfo);
    document.getElementById('modaltitle').innerHTML=minfo.moviename;
    document.getElementById('sml').innerHTML=minfo.movieyear+" | "+minfo.movieruntime;
    document.getElementById('para').innerHTML=minfo.movieplot;
    document.getElementById('ir').innerHTML=minfo.movierelease;
    document.getElementById('ac').innerHTML=minfo.movieactors;
    document.getElementById('gn').innerHTML=minfo.moviegenre;
    document.getElementById('lg').innerHTML=minfo.movielanguage;
    sessionStorage.setItem('homemoviename', minfo.moviename);
    sessionStorage.setItem('homemovieposter', minfo.movieposter);
    sessionStorage.setItem('homemovieactors', minfo.movieactors);
    sessionStorage.setItem('homemoviegenre', minfo.moviegenre);
    sessionStorage.setItem('homemoviedirector', minfo.moviedirector);
    // sessionStorage.setItem('homemovieposter', minfo.movieposter);
    // sessionStorage.setItem('homemovieposter', minfo.movieposter);



  });

  }

 $scope.refresh = function(){
  //  console.log("book func");
  //   $scope.bo='#/booking';
    //$window.location.href= $scope.bo;
      // $location.path('/booking');

// $scope.$apply();

      // $location.path('/booking').replace();
    //  $location.path.reload();
    $window.location.reload();
  }


};
