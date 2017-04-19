/*
  main script for only runs every function
*/
var lista=$("#listSave");
$(document).ready(function(){
	loadJSON("/books-schema.json",ProcessData);
})
function ProcessData(data){
	var busqueda_save=data.entities.saved;
	var cad="";
	for (var i=0; i< busqueda_save.length; i++)
	{
	    var element = busqueda_save[i];
	    cad=cad+"<li><span>"+element.label+"</span>"+
                	"<div class='option'> <span>Editar</span>|<span onclick='DeleteList(this)'>Eliminar</span></div>"+
              	"</li>";
	}
	lista.html(cad);
}
function DeleteList(element){
	$(element).parent().parent().remove();
}