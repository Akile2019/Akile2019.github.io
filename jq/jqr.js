
$(document).ready(function(){



    $('p').css({color:"blue",
        fontWeight:"bold",
        });
    // $('#btn').on('mouseover',function(){
    //         $('p').fadeOut(1000).show();
    // }); 

    $('p').on('mousedown', function(){
        $('p').css({color:'green'});
    });

    $('p').on('mouseup', function(){
        $('p').css({color:'blue'});
    });

});
    








