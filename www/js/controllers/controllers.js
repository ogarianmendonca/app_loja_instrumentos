angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, AddSessaoService, $ionicPopup, $timeout) {

  // $scope.loginData = {};

  // $ionicModal.fromTemplateUrl('templates/login.html', {
  //   scope: $scope
  // }).then(function(modal) {
  //   $scope.modal = modal;
  // });

  // $scope.closeLogin = function() {
  //   $scope.modal.hide();
  // };

  // $scope.login = function() {
  //   $scope.modal.show();
  // };

  // $scope.doLogin = function() {
  //   console.log('Doing login', $scope.loginData);

  //   $timeout(function() {
  //     $scope.closeLogin();
  //   }, 1000);
  // };

  $scope.carrinho = AddSessaoService.carrinho;

  $ionicModal.fromTemplateUrl('carrinho.html',{
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(m){
    $scope.data.item = 0;
    $scope.modal = m;
  })

  $scope.abreModalCarrinho = function(){
    if($scope.carrinho.length>0)
      $scope.modal.show();
  }

  $scope.fechaModalCarrinho = function(){
    $scope.modal.hide();
  }

  // Edita itens do carrinho
  $scope.input = {};
  $scope.input.quant = 1;
  $scope.data = {};

  $ionicModal.fromTemplateUrl('modal-editar-item.html',{
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(m){
    $scope.modalNumber = m;
  })

  $scope.editarItem = function(){
    $scope.input.quant = AddSessaoService.carrinho[$scope.data.item].quantidade;
    $scope.modalNumber.show();
  }

  $scope.cancelarEdicao = function(){
    $scope.modalNumber.hide();
    $scope.input.quant = 1;
  }

  $scope.confirmarEdicao = function(){
    AddSessaoService.carrinho[$scope.data.item].quantidade = $scope.input.quant;
    AddSessaoService.carrinho[$scope.data.item].valor = $scope.input.quant * AddSessaoService.carrinho[$scope.data.item].item.preco;
    $scope.modalNumber.hide();
  }

  // Excluir item
  $scope.removerItem = function() {
    var confirmPopup = $ionicPopup.confirm({
      title: 'Excluir Produto',
      template: '<p>Deseja realmente excluir esse produto?</p>',
      cancelText: 'Cancelar', 
      okText: 'Sim'
    });

    confirmPopup.then(function(res) {
      if(res == 1) {
        AddSessaoService.carrinho.splice($scope.data.item,1);
        // console.log('Excluido');
      } else {
        // console.log('Não excluiu');
      }
    });
  };


  // Confirmar e finalizar compra
  $scope.historicoPedidos = AddSessaoService.historicoPedidos;

  $scope.fecharCompra= function(){
    AddSessaoService.historicoPedidos = AddSessaoService.historicoPedidos.concat(AddSessaoService.carrinho);
    AddSessaoService.carrinho.splice(0, AddSessaoService.carrinho.length);
    $scope.historicoPedidos = AddSessaoService.historicoPedidos;
    $scope.modal.hide();
  }

  // Calcula compra
  $scope.conta = {};
  $scope.conta.quantidadeParcelas = 1;

  $scope.calcularConta = function(){
    $scope.conta.total = 0;
    $scope.historicoPedidos.forEach(function(v){
      $scope.conta.total = $scope.conta.total + v.valor;
    })
    $scope.conta.porcentagem = $scope.conta.total * 10/100;
    $scope.conta.subtotal = $scope.conta.total - $scope.conta.porcentagem;
  }
})
