angular.module('starter')
	.service('LojaService', function () {
		var instrumentos = [
			{ 'id': '01', 'titulo': 'Guitarra', 'preco': 950.00, 'descricao': 'Guitarra Jackson', 'imagem': 'img/instrumentos/guitarra.jpg' },
			{ 'id': '02', 'titulo': 'Baixo', 'preco': 1050.00, 'descricao': 'Baixo Jackson', 'imagem': 'img/instrumentos/baixo.jpg' },
			{ 'id': '03', 'titulo': 'Bateria', 'preco': 2250.00, 'descricao': 'Bateria Pearl', 'imagem': 'img/instrumentos/bateria.jpg' }
		]

		var acessorios = [
			{ 'id': '04', 'titulo': 'Cabo', 'preco': 45.00, 'descricao': 'Cabo blindado 5 metros', 'imagem': 'img/acessorios/cabo.jpg' },
			{ 'id': '05', 'titulo': 'Pedal e Efeito', 'preco': 450.00, 'descricao': 'Pedal Distorção', 'imagem': 'img/acessorios/pedal.jpg' },
			{ 'id': '06', 'titulo': 'Baquetas', 'preco': 15.00, 'descricao': 'Par de Baquetas', 'imagem': 'img/acessorios/baqueta.jpg' }
		]

		var amplificadores = [
			{ 'id': '07', 'titulo': 'Cubo', 'preco': 1045.00, 'descricao': 'Cubo Marshall', 'imagem': 'img/amplificadores/cubo.jpg' },
			{ 'id': '08', 'titulo': 'Retorno', 'preco': 750.00, 'descricao': 'Caixa de Som - Retorno', 'imagem': 'img/amplificadores/retorno.jpg' },
			{ 'id': '09', 'titulo': 'Interface', 'preco': 690.00, 'descricao': 'Interface de Áudio', 'imagem': 'img/amplificadores/interface.jpg' }
		]

		this.getInstrumento = function () {
			return instrumentos;
		}

		this.getAcessorio = function () {
			return acessorios;
		}

		this.getAmplificador = function () {
			return amplificadores;
		}

		this.getDetalheItem = function (id, callback) {

			instrumentos.forEach(function (instrumento) {
				if (instrumento.id == id) {
					callback(instrumento);
				}
			})

			acessorios.forEach(function (acessorio) {
				if (acessorio.id == id) {
					callback(acessorio);
				}
			})

			amplificadores.forEach(function (amplificador) {
				if (amplificador.id == id) {
					callback(amplificador);
				}
			})
		}

		callback = function (item) {
			return item;
		}
	});