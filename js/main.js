$(document).ready(function () {

    
   

    /*========================== FadeIn Checkout Div & FadeOut Login-Contain Div ==================================================*/
    $("#go-registe").click(function () {
        $(".checkout").fadeIn(2000);
        $(".login-contain").fadeOut(2000);

    });


    /*========================== FadeIn Login-Contain Div & FadeOut  Checkout Div ==================================================*/

    $("#log").click(function () {
        $(".login-contain").fadeIn(2000);
        $(".checkout").fadeOut(2000);
    });


    /*========================== Toggle password Icon to show password text or hide it ==================================================*/
    $('.fa-eye').click(function () {
        
        
            $('.myinput').attr('type','text');
            $('.fa-eye').hide();
            $('.fa-eye-slash').show();
    });
    $('.fa-eye-slash').click(function () {
        
        $('.myinput').attr('type','password');
        $('.fa-eye-slash').hide();
        $('.fa-eye').show();
    });

    /*========================== Toggle Search button  ==================================================*/
    $('.fa-search').click(function() {
    $('input').toggleClass('search-hide');
    });

    /*========================== features for scrolling & loading & count  ==================================================*/

    $(window).scroll(function(){
      
       if($(this).scrollTop()>=2950)
       {
           $(".count").countTo();
       }
        else
        {
             $(".count").countTo('restart');
        }
    });
  

    $(window).scroll(function(){
        $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);

    });



    $(window).load(function()
    { 
        $(".loading-page .sk-cube-grid").fadeOut(500,
        function(){
            $(".loading-page").fadeOut(50);
        });
    });
    
    
    var scrollButton =$(".Scroll-up");
    $(window).scroll(function(){
      
       if($(this).scrollTop()>=500)
       {
           scrollButton.show();
       }
        else
        {
            scrollButton.hide();
        }
    });
  scrollButton.click(function(){
  $("html,body").animate({scrollTop:0},3000);
  });


});

