/**
 * Created by Franco on 8/27/15.
 */
/*滑动鼠标显示下拉框*/
    $("#fetured").mouseover(function(){
        $("#m1").slideDown(function(){
            $(this).css("display","block");
        })
        $("#m2").css("display","none");
});
    $("#fetured").mouseleave(function(){
        timer=setTimeout(function(){
            $("#m1").slideUp(function(){
                $(this).css("display","none");
            })
        },3000);
        $("#m1").mouseover(function(){
            clearTimeout(timer);
        });
        $("#m1").mouseout(function(){
            timer=setTimeout(function(){$("#m1").slideUp(function(){
                $(this).css("display","none");
            })
            },3000)
        })
    });

    $("#gallery").mouseover(function(){
        $("#m2").slideDown(function(){
            $(this).css("display","block");
        });
       $("#m1").css("display","none");
    });
    $("#gallery").mouseleave(function(){
    timer=setTimeout(function(){
        $("#m2").slideUp(function(){
            $(this).css("display","none");
        })
    },3000);
    $("#m2").mouseover(function(){
        clearTimeout(timer);
    });

        $("#m2").mouseout(function(){
            timer=setTimeout(function(){
                $("#m2").slideUp(function(){
                    $(this).css("display","none");
                })
            },3000)
        })
});
