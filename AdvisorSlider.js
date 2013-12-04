$(document).ready(function()

{
	$("#pause").hide(200);
	var autoplay = null;
	var isAutoPlay = false;
	var isHovering= false;

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

	function Pause()
	{
			clearInterval(autoplay);
			$('#play').show(100);
			$('#pause').hide(300);
			
	}




	$("#next").click(onNextSlide);
	


	$("#prev").click(onPreviousSlide);



			$('#play').on('click',function()
			{
				$('#pause').show(100);
				$('#play').hide(300);
				
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

	
			$('#pause').click(Pause);


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


