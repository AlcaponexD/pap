var myApp = angular.module('zrp', []);

myApp.controller('DashboardController', ['$scope','$http', function($scope,$http) {
   setInterval( () => {
    $http({
        method:"GET",
        url: "http://api.achapromo.com.br/api/offers"
    }).then( (response) => {
        console.log(response)
        $scope.offers = response.data.offers;
        
    
      if(response.data.play_sound){
        var audio = new Audio('assets/sounds/01.wav');
        audio.play();
        console.log("é pra tocar som")
      }

        
        //Trata data
        for(var i in $scope.offers){
            var date = $scope.offers[i].created_at.split(' ');
            $scope.offers[i].created_at = date[0]
            $scope.offers[i].hour = date[1]
        }
        $scope.tops = response.data.tops;
        $scope.lowers = response.data.lowers;
    })
   },5000)
}]);