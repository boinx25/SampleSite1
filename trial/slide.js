$(document).ready(function()

{
		$('#pause').hide(200);
		var autoplay = null;

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


	$('#play').on('click',function()
	{
		$('#pause').show(100);
		$('#play').hide(300);
	
			autoplay = setInterval(function()
	{
		
			$(".imageContainer").animate({"margin-left":"-100%"},1000,function()
			{


				$(".imageContainer img:first-child").appendTo(".imageContainer");
				$(".imageContainer").css("margin-left", "0px");		

			});

	},4000);
	});

	$('#pause').on('click',function()
	{
		$('#play').show(100);
		$('#pause').hide(300);
		clearInterval(autoplay);
	});


});	


