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