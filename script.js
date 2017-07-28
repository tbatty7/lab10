var app = angular.module('myModule', []);

app.controller('myController', function($scope){
	$scope.toDo = ["mow lawn", "feed cat", "walk dog", "do dishes", "build awesome app"];

	$scope.addNewItem = function(item) {
		$scope.toDo.push(item);
		$scope.newItem = "";
	}

	$scope.removeListItem = function() {
		$scope.toDo.pop();
		}
})

