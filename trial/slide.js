$(document).ready(function()

{
	$("#next").on('click',function()
	{
		

			$(".imageContainer").animate({"margin-left":"-100%"},1000,function()
			{


				$(".imageContainer img:first-child").appendTo(".imageContainer");
				$(".imageContainer").css("margin-left", "0px");		

			});

	});


	$("#prev").on('click',function()
	{
	
			$(".imageContainer img:last-child").prependTo(".imageContainer");
			$(".imageContainer").css("margin-left", "-100%");		
			
			$(".imageContainer").animate({"margin-left":"0px"},1000,function()
			{

				

			});
	});



	





});	


