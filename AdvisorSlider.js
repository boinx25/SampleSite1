$(document).ready(function()

{
	$("#next").on('click',function()
	{
		

			$(".Imageslider").animate({"margin-left":"-100%"},1000,function()
			{


				$(".Imageslider img:first-child").appendTo(".Imageslider");
				$(".Imageslider").css("margin-left", "0px");		

			});

	});


	$("#prev").on('click',function()
	{
	
			$(".Imageslider img:last-child").prependTo(".Imageslider");
			$(".Imageslider").css("margin-left", "-100%");		
			
			$(".Imageslider").animate({"margin-left":"0px"},1000,function()
			{

				

			});
	});



	





});	


