angular.module('starter')
.controller('finalizarCtrl', function($scope, $state, AddSessaoService, $ionicModal, $ionicPopup, $timeout){
	
	$scope.pagina = "Finalizar Compra";

	$ionicModal.fromTemplateUrl('modal-finalizar-compra.html',{
		scope: $scope,
		animated: 'slide-in-up'
	}).then(function(modal){
		$scope.modalFinalizarCompra = modal;		
	})

	$scope.voltarPagamentoVista = function(){
		$state.go('app.browse');
		location.reload();
	}

	$scope.pagarParcelado = function() {
		var alertPopup = $ionicPopup.alert({
			title: 'Obrigado!',
			template: '<p>Em breve solicitaremos os dados do cartão de crédito.</p>'
		});

		alertPopup.then(function(res) {
			$state.go('app.browse');
			location.reload();
			// console.log('Thank you for not eating my delicious ice cream cone');
		});
	};

	$scope.numeroParcelas = {};
	$scope.numeroParcelas.valor = 1;
	$scope.total = 100.00;

	$scope.onChangeDivisao = function(){
		console.log($scope.numeroParcelas);
		$scope.totalDividido = $scope.total / $scope.numeroParcelas.valor;
	}

	$scope.input = {};
	$scope.input.quant = 1;

	$scope.pagar = function(){
		var valor = -$scope.conta.valorPagar;
		AddSessaoService.historicoPedidos.push({item: {nome: "Pagamento"}, quantidade: 1, valor: valor});
		$scope.modalPagarConta.hide();
	}

	$scope.cancelarCompra = function(){
		var alertPopup = $ionicPopup.alert({
			title: '=(',
			template: '<p>Compra cancelada!</p>'
		});

		alertPopup.then(function(res) {
			$state.go('app.browse');
			location.reload();
		});
	}

});