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
                        $(".Igmageslider").css("margin-left", "-100%");                
                        
                        $(".Imageslider").animate({"margin-left":"0px"},1000);
        }

        function Pause()
        {
        				if(isAutoPlay == isAutoPlay)
        				{
                        clearInterval(autoplay);
                        $('#play').show(100);
                        $('#pause').hide(300);
                    	}else
                    	{}
                        
        }




        $("#next").click(onNextSlide);
        


        $("#prev").click(onPreviousSlide);



        $('#play').on('click',function()
             {
                   $('#pause').show(100);
                   $('#play').hide(300);
                   
                   if(isAutoPlay == isAutoPlay)
                   {

                   
                      clearInterval(autoplay);
                      autoplay = setInterval(function()
                      {
                
                            $(".Imageslider").animate({"margin-left":"-100%"},1000,function()
                        {


                            $(".Imageslider img:first-child").appendTo(".Imageslider");
                            $(".Imageslider").css("margin-left", "0px");                

                        		console.log("abc");
                        });

                      },4000);
                    }
           });
        
                        $('#pause').click(Pause);


                        $('.Imageslider').mouseover(function()
                        {
                                clearInterval(autoplay);
                                $('#play').show(100);
                        		$('#pause').hide(200);
                        });

                        $('#leftImg').mouseleave(function()
                        {
                        		$('#pause').show(100);
                        		$('#play').hide(200);
                                clearInterval(autoplay);
                                if(isAutoPlay !== isAutoPlay, isHovering == isHovering )
                                {
                                	console.log("hello");
                                	autoplay = setInterval(function()
                                	{

                                        $(".Imageslider").animate({"margin-left":"-100%"},1000,function()
                                        {

                                                $(".Imageslider img:first-child").appendTo(".Imageslider");
                                                $(".Imageslider").css("margin-left", "0px");                

                                        });

                                	},4000);
                            	}else
                            	   {
                            		console.log("abc");
                            	   }
                        });

});        