
$(document).ready (function(){

	// filter function 
	$("#nathan").click (function(){
		$(".box").filter(".nicon").hide(2000);
		$(".nathan").show (2000);
	});

	$("#nicon").click(function(){
		$(".box").filter(".nathan").hide(2000);
		$(".nicon").show(2000);
	});

	$("#all").click(function(){
		$(".box").show(2000);
	});

	// datepicker start 
	  $( "#datepicker_section" ).datepicker();
    

// datepicker end

});

// wow animation er
 new WOW().init();