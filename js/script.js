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

function readURL(input) {
  if (input.files && input.files[0]) {
    ShowThumbnail(input.files[0], input);
  }
}

$("input.image-url:file").change(function() {
  readerURL(this);
  var i = $("input.image-url:file").files.length;
  console.log(i);
});

$(".preview-image-container").on('dragover', dragover_handler);
$(".preview-image-container").on('dragleave', dragleave_handler);
$(".preview-image-container").on('drop', drop_handler);
$(".image-url-delete").on('click', delete_handler);

$('.preview-image-btn-browse').click(function() {
  $(this).closest('.preview-image-container').find('.image-url').trigger('click');
});

function dragleave_handler(ev) {
  $(ev.target).css("backgroundColor", "");
  $(ev.target).css("cursor", "default");
}

function dragover_handler(ev) {
  // Prevent default select and drag behavior
  ev.preventDefault();
  var dt = ev.originalEvent.dataTransfer;
  dt.dropEffect = "move";

  if (dt.types && (dt.types.indexOf ? dt.types.indexOf('Files') != -1 : dt.types.contains('Files'))) {
    $(ev.target).css("backgroundColor", "#87CEFA");
    $(ev.target).css("cursor", "pointer");
  }
}

function drop_handler(ev) {
  ev.preventDefault();
  var target = $(ev.target);
  target.css("backgroundColor", "inherit");
  target.css("cursor", "default");
  HideInstruction(target);
  // If dropped items aren't files, reject them
  var dt = ev.originalEvent.dataTransfer;
  if (dt.items && dt.items[0]) {
    // Use DataTransferItemList interface to access the file(s)
    if (dt.items[0].kind == "file") {
      var f = dt.items[0].getAsFile();
      ShowThumbnail(f, target);
    }
  } else {
    // Use DataTransfer interface to access the file(s)
    if (dt.files && dt.files[0]) {
      ShowThumbnail(dt.files[0], target);
    }
  }
}


function ShowThumbnail(file, previewDOM) {
  var reader = new FileReader();

  reader.onload = function(e) {
    var imagePreview = $(previewDOM).siblings('.preview-image-url');
    imagePreview.attr('src', e.target.result);
    HideInstruction($(previewDOM).siblings(".preview-image-instruction"));
    ShowDeleteBtn(imagePreview);
  }

  reader.readAsDataURL(file);
}

function HideInstruction(target) {
  $(target).closest(".preview-image-instruction").hide();
}

function ShowInstruction(target) {
  $(target).closest(".preview-image-instruction").show();
}

function ShowDeleteBtn(img) {
  $(img).siblings(".close").show();
}

function HideDeleteBtn(img) {
  $(img).siblings(".close").hide();
}

function delete_handler(ev) {
  var imagePreview = $(ev.target).siblings('.preview-image-url');
  imagePreview.removeAttr('src');
  HideDeleteBtn(imagePreview);
  imagePreview.siblings(".preview-image-instruction").show();
  var fileInput = $(ev.target).siblings("input.image-url:file");

  console.log(fileInput[0].files.length);
  fileInput.val(null);
  console.log(fileInput[0].files.length);
  if ($("input.image-url:file")[0].files.length == 0) {
    console.log("no files selected");
  }
}

// call initialization file
// Is FileAPI available?
if (window.File && window.FileList && window.FileReader) {
  Init();
}

function Init() {

}
