$(document).ready(function()

{	

	$("#next").on('click',function()
	{
		var currentMargin = ($(".Imageslider").css("margin-left"));
		console.log(currentMargin);
		currentMargin=currentMargin.replace("px","");
		var finalMargin = parseInt(currentMargin) - 672;
		

		
		 if(finalMargin > - 2016)
		 {

			$(".Imageslider").animate({"margin-left":finalMargin +"px"},1000,function()
			{
			

			});
			 }
	});


	$("#prev").on('click',function()
	{
		var currentMargin = ($(".Imageslider").css("margin-left"));
		currentMargin=currentMargin.replace("px","");
		var finalMargin = parseInt(currentMargin) + 672;
		


		
		if(finalMargin <=0)
		{

			$(".Imageslider").animate({"margin-left":finalMargin +"px"},1000,function()
			{
			

			});
		}
	});



	





});	


