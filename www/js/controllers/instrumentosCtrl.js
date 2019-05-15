angular.module('starter')
.controller('instrumentosCtrl', function($scope, LojaService){

	$scope.pagina = "Instumentos";

	$scope.instrumentos = LojaService.getInstrumento();

});