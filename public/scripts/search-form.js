var input=$("#inputSearch");
$(document).ready(function(){
	input.on("keyup",ActiveBoton)
	loadJSON("/books-schema.json",GenerateAutocomplete);
})
function GenerateAutocomplete(data){
	var list_data=data.data;
	var list=[];
	var text = document.getElementById("inputSearch");
	for (var i=0; i< list_data.length; i++)
	{
	    list.push([list_data[i].title,list_data[i].id])

	}
	new Awesomplete(text, {
		list: list,
		minChars: 3,
		maxItems: 7
	});

}
function ActiveBoton(){
	if(input.val().length>=1){
		$("#actionSearch").attr("disabled",false);
	}
	else{
		$("#actionSearch").attr("disabled",true);
	}
}
