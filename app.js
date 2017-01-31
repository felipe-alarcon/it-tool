var app = angular.module('wordProcessing', []);

app.controller('mainCtrl', mainCtrl);

function mainCtrl($scope){
  
  
  $scope.capitalise = function(value, wordCount){
   
    var arr = value.split(' ');
    
    var caps = [];
    
    for(var i = 0; i < arr.length; i++){
		if(arr[i].length > wordCount){
			caps.push(arr[i].substring(0, 1).toUpperCase() + arr[i].substring(1));
		}
		else{
			caps.push(arr[i]);
		}
	}
    return caps.join(' ');
  }

}


