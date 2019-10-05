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


	//imagen del logo a ver si funciona tocad madera...!
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
