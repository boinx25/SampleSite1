$(document).ready(function()

{
	$("#play").hide(200);
	var autoplay = null;

	function onNextSlide()
	{

			$(".Imageslider").animate({"margin-left":"-100%"},1000,function()
			{


				$(".Imageslider img:first-child").appendTo(".Imageslider");
				$(".Imageslider").css("margin-left", "0px");		

			});

	}

	function onPreviousSlide()
	{
			$(".Imageslider img:last-child").prependTo(".Imageslider");
			$(".Imageslider").css("margin-left", "-100%");		
			
			$(".Imageslider").animate({"margin-left":"0px"},1000);
	}



	$("#next").click(onNextSlide);
	


	$("#prev").click(onPreviousSlide);


	
	autoplay = setInterval(function()
	{
		
			$(".Imageslider").animate({"margin-left":"-100%"},1000,function()
			{


				$(".Imageslider img:first-child").appendTo(".Imageslider");
				$(".Imageslider").css("margin-left", "0px");		

			});

	},4000);


			$('#play').on('click',function()
			{
				$('#pause').show(100);
				$('#play').hide(300);
				
	
			autoplay = setInterval(function()
			{
		
				$(".Imageslider").animate({"margin-left":"-100%"},1000,function()
			{


				$(".Imageslider img:first-child").appendTo(".Imageslider");
				$(".Imageslider").css("margin-left", "0px");		

			});

			},4000);
			});

	
			$('#pause').on('click',function()
				{
					$('#play').show(100);
					$('#pause').hide(300);
					clearInterval(autoplay);
				});





			$('.Imageslider').mouseover(function()
			{
				clearInterval(autoplay);
			});

			$('.Imageslider').mouseleave(function()
			{
				clearInterval(autoplay);
				autoplay = setInterval(function()
			{

			$(".Imageslider").animate({"margin-left":"-100%"},1000,function()
			{

				$(".Imageslider img:first-child").appendTo(".Imageslider");
				$(".Imageslider").css("margin-left", "0px");		

			});

			},4000);
			});

});	


