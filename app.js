(function(){
'use strict';
angular.module('LunchCheck',[])
.controller('LunchCheckController',LunchCheckController);
LunchCheckController.$inject=['$scope'];
function LunchCheckController($scope){
	$scope.list='';
	$scope.message='';
	//var a=$scope.list;
    $scope.count=function(){
		var a=$scope.list.split(',');
		var c=0;
		for(var i=0;i<a.length;i++){
			if(a[i]!=''){
			c=c+1;
		}}
		$scope.message="Please enter data first";

		if(c>3){
			$scope.message="Too much!";
		}
		else if(c<=3 && c>0){
			$scope.message="Enjoy!";
		}
		
	};
}


})();