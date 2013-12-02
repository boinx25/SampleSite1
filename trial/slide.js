$(document).ready(function()

{
	

	$("#next").on('click',function()
	{
		var currentMargin = ($(".imageContainer").css("margin-left"));
		console.log(currentMargin);
		currentMargin=currentMargin.replace("px","");
		console.log(currentMargin);
		var finalMargin = parseInt(currentMargin);
		var NextMargin = (finalMargin - 275);
		console.log(NextMargin);

		$(".imageContainer").animate({"margin-left":NextMargin +"px"},1000,function()
		{
			// console.log($(this).css("margin-left"));
			


		});
	});

});	


