angular.module('starter')
.controller('acessoriosCtrl', function($scope, LojaService){

	$scope.pagina = "Acessórios"

	$scope.acessorios = LojaService.getAcessorio();

})