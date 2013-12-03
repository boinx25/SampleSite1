$(document).ready(function()

{
	

	$("#next").on('click',function()
	{
		var currentMargin = ($(".imageContainer").css("margin-left"));
		// console.log(currentMargin);
		currentMargin=currentMargin.replace("px","");
		// console.log(currentMargin);
		var finalMargin = parseInt(currentMargin);
		var NextMargin = (finalMargin - 275);
		// console.log(NextMargin);

		
		if(NextMargin > -825)
		{

			$(".imageContainer").animate({"margin-left":NextMargin +"px"},1000,function()
			{
			// console.log($(this).css("margin-left"));

			});
		}
	});


	$("#prev").on('click',function()
	{
		var currentMargin = ($(".imageContainer").css("margin-left"));
		// console.log(currentMargin);
		currentMargin=currentMargin.replace("px","");
		// console.log(currentMargin);
		var finalMargin = parseInt(currentMargin);
		var NextMarginPrev = (finalMargin + 275);
		console.log(NextMarginPrev);

		
		if(NextMarginPrev <=0)
		{

			$(".imageContainer").animate({"margin-left":NextMarginPrev +"px"},1000,function()
			{
			// console.log($(this).css("margin-left"));

			});
		}
	});



	





});	


