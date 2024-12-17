$(document).ready(function(){


	$('body').mouseover(function(e){

			$('#x').text(e.pageX);

			$('#y').text(e.pageY);
	});

   

$('#apt').click(function(){

        var txt1 = "<p>Text. of txt1</p>";              // Create text with HTML
    var txt2 = $("<p></p>").text("Text. of text2");  // Create text with jQuery
    var txt3 = document.createElement("p");
    txt3.innerHTML = "Text. of txt3";               // Create text with DOM
    $("body").append(txt1, txt2, txt3);     // Append new elements

});




$("#but").click(function(){
    $("img").animate({
        left: '950px',
        opacity: '0.9',
        height: '150px',
        width: '150px',
    },3500);
     $("img").animate({
        left: '150px'
      
    },3500);
});

$("#but1").click(function(){
	var path = "test/one.txt";
 $.get(path, (data)=>{
		console.log(data);
	});
});






//end
});