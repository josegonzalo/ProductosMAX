 var firebaseConfig = {
    apiKey: "AIzaSyBWaIas-guCZ9IGjCdMfbkVJNoOSpTtRz8",
    authDomain: "maxapp-659bd.firebaseapp.com",
    databaseURL: "https://maxapp-659bd.firebaseio.com",
    projectId: "maxapp-659bd",
    storageBucket: "maxapp-659bd.appspot.com",
    messagingSenderId: "537653727870",
    appId: "1:537653727870:web:9466a59097b32b88"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
var max = angular.module("max", [])
	max.controller("productoCTRL", function ($scope){
			$scope.Producto = {}
		$scope.cargarproductos = function(x){
			$scope.Producto = x
			firebase.database().ref("/Producto").push($scope.Producto)
		}
	})


 angular.module('appFilereader', []).directive('appFilereader', function($q) {
    var slice = Array.prototype.slice;

    return {
        restrict: 'A',
        require: '?ngModel',
        link: function(scope, element, attrs, ngModel) {
                if (!ngModel) return;

                ngModel.$render = function() {};

                element.bind('change', function(e) {
                    var element = e.target;

                    $q.all(slice.call(element.files, 0).map(readFile))
                        .then(function(values) {
                            if (element.multiple) ngModel.$setViewValue(values);
                            else ngModel.$setViewValue(values.length ? values[0] : null);
                        });

                    function readFile(file) {
                        var deferred = $q.defer();

                        var reader = new FileReader();
                        reader.onload = function(e) {
                            deferred.resolve(e.target.result);
                        };
                        reader.onerror = function(e) {
                            deferred.reject(e);
                        };
                        reader.readAsDataURL(file);

                        return deferred.promise;
                    }

                }); //change

            } //link
    }; //return
});