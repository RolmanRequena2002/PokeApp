angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($rootScope,$scope,$http) {
  $rootScope.pokedexB;
})

.controller('SearchCtrl', function($rootScope,$scope,$http) {
  var pokemon = angular.module("pokemon",[])
  $rootScope.pokedexB = [];
  for (var i = 0; i <= 50; i++) {
    $http({
      method: "GET",
      url: "https://pokeapi.co/api/v2/pokemon/"+i
    }).then(function callbackSuccess(y){
      $rootScope.pokedexB.push(y);
        if (y.data.id < 10) {
          //01010010 01101111 01101100 01101101 01100001 01101110 00100000 01010010 01100101 01110001 01110101 01100101 01101110 01100001
          y.data.sprites.front_default = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/00"+y.data.id+".png";
        } else if (y.data.id >=10 && y.data.id <100) {
          y.data.sprites.front_default = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/0"+y.data.id+".png";
        } else if (y.data.id >=100) {
          y.data.sprites.front_default = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/"+y.data.id+".png";
        }
    })
  }
})
