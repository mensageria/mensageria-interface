angular.module('Mensageria', [])

.run(function ($http) {
  // Sends this header with any AJAX request
  $http.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
  // Send this header only in post requests. Specifies you are sending a JSON object
  $http.defaults.headers.post['dataType'] = 'json'
})

.controller('mensagensCtrl', function($scope, $http) {
    $scope.destinatarios = [];
    $scope.newEmail = "";

    $scope.enviarMensagem = function(titulo, conteudo, destinatarios){

		var data = JSON.stringify({
		  titulo: titulo,
		  conteudo: conteudo,
		  clientes: destinatarios
		});

		console.log(data);

		$http.post('http://10.65.10.18:8080/post', data).success(function(){
			console.log("foi");
		}).error(function(){
			console.log("não foi");
		})

		
    }

    $scope.addTodo = function (newEmail) {
    	console.log("teste");

		$scope.destinatarios.push(newEmail);

	};

	$scope.removeEmail = function(index){
    	$scope.destinatarios.splice(index, 1); 
	}
})