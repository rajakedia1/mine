$('.left').css({
            
    'height' : $(window).height() 
});
$('.right .skill').css({
            
    'height' : $(window).height() 
});
$('.right .main').css({
            
    'height' : $(window).height()
    
});
$('.right .devl').css({
            
    'min-height' : $(window).height()
    
});
$('.right .proj').css({
            
    'min-height' : $(window).height()
    
});
$('.right .man').css({
            
    'min-height' : $(window).height()
    
});

$('.right .act').css({
            
    'min-height' : $(window).height()
    
});

$('.right .main h1').css({
            
    'padding-top' : ($(window).height()/2) - 130
    
});

$('.right .man .man1 h1').css({
            
    'padding-top' : 30
    
});

$('.right .proj .pro h1').css({
            
    'padding-top' : ($(window).height()/2) - 250
    
});

$('.right .skillset').css({
            
    'padding-top' : ($(window).height()/2) - 260
    
});
$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    
    if(wScroll > $('.act .act1').offset().top - ($(window).height()/1.2)){  // activity

            $('.act .act1 .col1').each(function(i){

                setTimeout(function(){

                    $('.act .act1 .col1').eq(i).addClass('is-showing2');

                },150 * (i+1));
            });
        
            $('.act .act1 .col2').each(function(i){

                setTimeout(function(){

                    $('.act .act1 .col2').eq(i).addClass('is-showing2');

                },150 * (i+1));
            });

        }
        
    
    var bcol = 'red'
    var acol = 'white'
    
    var ts =  $('.right #tech').offset().top - $(window).height();
    var ps =  $('.right #proj').offset().top- $(window).height();
    var ds =  $('.right #devx').offset().top-$(window).height();
    var ms =  $('.right #manage').offset().top-$(window).height();
    var as =  $('.right #activity').offset().top-$(window).height();
    
    if(wScroll <ts){  // activity
        $('.left .bar a#l1').css({'color' : acol});
        $('.left .bar a#l2').css({'color' : acol});
        $('.left .bar a#l3').css({'color' : acol});
        $('.left .bar a#l4').css({'color' : acol});
        $('.left .bar a#l5').css({'color' : acol});
    }else
    if(wScroll > ts && wScroll < ps){  // activity
        $('.left .bar a#l1').css({'color' : bcol});
        $('.left .bar a#l2').css({'color' : acol});
        $('.left .bar a#l3').css({'color' : acol});
        $('.left .bar a#l4').css({'color' : acol});
        $('.left .bar a#l5').css({'color' : acol});
    }else
    if(wScroll > ps && wScroll < ds){  // activity
        $('.left .bar a#l1').css({'color' : acol});
        $('.left .bar a#l2').css({'color' : bcol});
        $('.left .bar a#l3').css({'color' : acol});
        $('.left .bar a#l4').css({'color' : acol});
        $('.left .bar a#l5').css({'color' : acol});
    }else
    if(wScroll > ds && wScroll < ms){  // activity
        $('.left .bar a#l1').css({'color' : acol});
        $('.left .bar a#l2').css({'color' : acol});
        $('.left .bar a#l3').css({'color' : bcol});
        $('.left .bar a#l4').css({'color' : acol});
        $('.left .bar a#l5').css({'color' : acol});
    }else
    if(wScroll > ms && wScroll < as){  // activity
        $('.left .bar a#l1').css({'color' : acol});
        $('.left .bar a#l2').css({'color' : acol});
        $('.left .bar a#l3').css({'color' : acol});
        $('.left .bar a#l4').css({'color' : bcol});
        $('.left .bar a#l5').css({'color' : acol});
    }else
    if(wScroll > as){  // activity
        $('.left .bar a#l1').css({'color' : acol});
        $('.left .bar a#l2').css({'color' : acol});
        $('.left .bar a#l3').css({'color' : acol});
        $('.left .bar a#l4').css({'color' : acol});
        $('.left .bar a#l5').css({'color' : bcol});
    }
});



$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
if(wScroll > $('.skill .skillset').offset().top - ($(window).height()/1.2)){  // skill set
        
        $('.skill .skillset li').each(function(i){
            
            setTimeout(function(){
                
                $('.skill .skillset li').eq(i).addClass('is-showing2');
                
            },150 * (i+1));
        });
        
    }
});