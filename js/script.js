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

    var storage = firebase.storage();
  
var max = angular.module("max", [])
	max.controller("productoCTRL", function ($scope){
			$scope.Producto = {}
		$scope.cargarproductos = function(x){
			$scope.Producto = x
			firebase.database().ref("/Producto").push($scope.Producto)
		}
	})

function archivo(evt) {
      var files = evt.target.files; // FileList object
       
        //Obtenemos la imagen del campo "file". 
      for (var i = 0, f; f = files[i]; i++) {         
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
}
             
      document.getElementById('files').addEventListener('change', archivo, false);

/*function reloadThePage(){
    window.location.reload();
} 
*/
