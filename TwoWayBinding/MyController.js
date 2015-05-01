app.controller("TwoWayBindingController", function($scope){
	$scope.number = new number(100 , 20);
	
	$scope.getResult = function(){
		return parseFloat( (parseFloat($scope.number.decimal) *  parseFloat($scope.number.percentValue)) / 100);
	}
});