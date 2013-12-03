$(document).ready(function()

{
	

	$("#next").on('click',function()
	{
		var currentMargin = ($(".imageContainer").css("margin-left"));
		currentMargin=currentMargin.replace("px","");
		var finalMargin = parseInt(currentMargin) -275;
		

		
		if(finalMargin > -825)
		{

			$(".imageContainer").animate({"margin-left":finalMargin +"px"},1000,function()
			{
			

			});
		}
	});


	$("#prev").on('click',function()
	{
		var currentMargin = ($(".imageContainer").css("margin-left"));
		currentMargin=currentMargin.replace("px","");
		var finalMargin = parseInt(currentMargin) + 275;
		


		
		if(finalMargin <=0)
		{

			$(".imageContainer").animate({"margin-left":finalMargin +"px"},1000,function()
			{
			

			});
		}
	});



	





});	


