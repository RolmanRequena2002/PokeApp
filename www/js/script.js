var pokemon= angular.module("pokemon",[])

pokemon.controller("pokedex", function ($scope, $rootScope, $http){
		$scope.pokedexb= [];

		for (var i = 0; i < 152; i++) {
		
	$http({
		method: "GET",
		url: "https://pokeapi.co/api/v2/pokemon/"+i
	}).then(function callbackSuccess (y){
		console.log(y)
		$scope.pokedexb.push(y);
	})

	}
})