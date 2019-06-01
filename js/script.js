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