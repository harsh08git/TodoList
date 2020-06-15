//Checking Out specific todos
//Can also be done using toggle
//we wrie ul before in jQuery events can be added only to elements that exist when the code is run for the first time.
// since we are adding list items to ul so we have added li as the selector

$("ul").on("click","li",function(){
	if ($(this).css("color")==="rgb(137, 132, 132)"){
		$(this).css({
		color: "rgb(88, 83, 83)",
		textDecoration: "line-through"
		});	
	}
	else{
		$(this).css({
			color: "rgb(137, 132, 132)",
			textDecoration: "none"	
		})
	}
});

//Deleting Todos

$("ul").on("click","li span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//Creating new todos
let newtodo
//$("input[type='text']")
$("input").keypress(function(event){
	if (event.which===13){
		newtodo=$(this).val()
		$(this).val('')
		$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span>"+newtodo+"</li>" );
	}
});

//Select + to hide show input
$(".fa-plus").click(function(){
	$("input").toggle(500);
});