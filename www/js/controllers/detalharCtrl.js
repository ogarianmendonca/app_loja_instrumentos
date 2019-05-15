angular.module('starter')
.controller('detalharCtrl', function($scope, $state, LojaService, $stateParams, AddSessaoService, $ionicModal){

	$scope.pagina = "Detalhes do Item"; 

	$scope.item = {};

	LojaService.getDetalheItem($stateParams.itemID, function(item){
		$scope.item = item;
	})

	// Adicionar item no carrinho
	$scope.input = {};
	$scope.input.quant = 1;
	$scope.modal = {};

	// Abre modal de adicionar carrinho
	$ionicModal.fromTemplateUrl('modal-adicionar-produto.html',{
		scope: $scope,
		animate: 'lide-in-up'
	}).then(function(m){
		$scope.modal = m;
	})

	$scope.abreModalAdicionar = function(){
		$scope.modal.show();
	}

	$scope.fechaModalAdicionar = function(){
		$scope.modal.hide();
	}

	// Função de adicionar no carrinho
	$scope.adicionar =function(){
		AddSessaoService.carrinho.push({item: $scope.item, quantidade: $scope.input.quant, valor: $scope.input.quant * $scope.item.preco});
		$scope.modal.hide();
		$scope.input.quant = 1;
	}


});