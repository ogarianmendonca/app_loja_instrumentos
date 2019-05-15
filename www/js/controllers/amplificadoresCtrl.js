angular.module('starter')
.controller('amplificadoresCtrl', function($scope, LojaService){

	$scope.pagina = "Amplificadores";

	$scope.amplificadores = LojaService.getAmplificador();

})