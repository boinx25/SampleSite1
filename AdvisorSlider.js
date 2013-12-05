$(document).ready(function()

{
        $("#pause").hide(200);
        var autoplay = null;
        var isAutoPlay = false;
        var isHovering= false;
        var totalCount = ($(".banner").length);
        var current = 1;
        $("#counter").text(current + "/" + totalCount);
        
 


        function onNextSlide()
        { 	
        	
        	current++;
        	if(current > totalCount)
        	{

        		current=1;	
        	}

        	$("#counter").text(current + "/" + totalCount);
        		
                        $(".Imageslider").animate({"margin-left":"-100%"},1000,function()
                        {


                                $(".Imageslider img:first-child").appendTo(".Imageslider");
                                $(".Imageslider").css("margin-left", "0px");                

                        });

                      
 						

        }

        function onPreviousSlide()
        {
        	current--; 
        		if(current == 0)
        		{
        		current = totalCount;	
        		}
        		$("#counter").text(current + "/" + totalCount);

                        $(".Imageslider img:last-child").prependTo(".Imageslider");
                        $(".Imageslider").css("margin-left", "-100%");                
                        
                        $(".Imageslider").animate({"margin-left":"0px"},1000);
        }

        function Pause()
        {
                        isAutoPlay = false;
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
                   isAutoPlay = true;
                   isHovering = true;
                   
                   if(!isHovering)
                   {
                   	  
                      clearInterval(autoplay);
                      autoplay = setInterval(onNextSlide,4000);
                    }
                    else
                    {}

           });
        
        $('#pause').click(Pause);


            $('#leftImg').mouseenter(function()
               {
                	isHovering = true;
                    clearInterval(autoplay);
               });

            $('#leftImg').mouseleave(function()
               {
                    isHovering = false;
                    clearInterval(autoplay);
                    if(isAutoPlay)
                        {
                            console.log("hello");
                            autoplay = setInterval(onNextSlide,4000);
                        }	
                        else
                           {
                            console.log("abc");
                           }
                        });

});        