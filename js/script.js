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


  // Get a non-default Storage bucket
  var storage = firebase.app().storage("gs://maxapp-659bd.appspot.com");
	var file;
	var files;


var max = angular.module("max", [])
	max.controller("productoCTRL", function ($scope){
			$scope.Producto = {}
			$scope.logo = {}


		$scope.cargarproductos = function(x){
			$scope.Producto = x

			storage.ref(file.name).put(file).then(function(snapshot) {
			//console.log('Uploaded a blob or file!');

				var prodRef = storage.ref(file.name);

				prodRef.getDownloadURL().then(function(url) {

					$scope.Producto["foto"] = url;
					
					firebase.database().ref("/Producto").push($scope.Producto);

				})
			})

			//firebase.database().ref("/Producto").push($scope.Producto)
		}

		$scope.cargaproductos = function(z){
			$scope.logo = z

			storage.ref(file.name).put(file).then(function(snapshot){

				var prodRef = storage.ref(file.name);

				prodRef.getDownloadURL().then(function(url){

					$scope.logo["fotoLogo"] = url;

					firebase.database().ref("/logo").push($scope.logo);
				})
			})
		}
	})

//Muestra la imagen de en la ventana de productos
	function archivo(evt) {
		  var files = evt.target.files; // FileList object
		  //Obtenemos la imagen del campo "file". 
		  for (var i = 0, f; f = files[i]; i++) {
				fileName = files[i];


			   //Solo admitimos imágenes.
			   if (!f.type.match('image.*')) {
					continue;
			   }
			   var reader = new FileReader();
			   
			   reader.onload = (function(theFile) {
				   return function(e) {
				   // Creamos la imagen.
						  document.getElementById("list").innerHTML = ['<img class="thumb" src="', e.target.result,'" title="', escape(theFile.name), '"/>'].join('');
				   };
			   })(f);
	 
			   reader.readAsDataURL(f);
		   }
		   file = files[0];
	}
			 
	  document.getElementById('files').addEventListener('change', archivo, false);


	  // imagen dos
	  function archivo(evt) {
		  var files = evt.target.files; // FileList object
		  //Obtenemos la imagen del campo "file". 
		  for (var i = 0, f; f = files[i]; i++) {
				fileName = files[i];


			   //Solo admitimos imágenes.
			   if (!f.type.match('image.*')) {
					continue;
			   }
			   var reader = new FileReader();
			   
			   reader.onload = (function(theFile) {
				   return function(e) {
				   // Creamos la imagen.
						  document.getElementById("list").innerHTML = ['<img class="thumb" src="', e.target.result,'" title="', escape(theFile.name), '"/>'].join('');
				   };
			   })(f);
	 
			   reader.readAsDataURL(f);
		   }
		   file = files[0];
	}
			 
	  document.getElementById('files').addEventListener('change', archivo, false);

