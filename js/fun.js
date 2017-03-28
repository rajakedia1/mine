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
            
    'padding-top' : ($(window).height()/2) - $('.right .main p').height() + 20
    
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
        
    
    var bcol = '#ff0000'
    var acol = 'white'
    var af = 25
    var bf = 18
    
    var ts =  $('.right #tech').offset().top - $(window).height();
    var ps =  $('.right #proj').offset().top- $(window).height();
    var ds =  $('.right #devx').offset().top-$(window).height();
    var ms =  $('.right #manage').offset().top-$(window).height();
    var as =  $('.right #activity').offset().top-$(window).height();
    var cs =  $('.right #course').offset().top-$(window).height();
    
    if(wScroll <=ts){  // activity
        $('.left .bar a#l1').css({'color' : acol, 'font-size' : bf});
        $('.left .bar a#l2').css({'color' : acol, 'font-size' : bf});
        $('.left .bar a#l3').css({'color' : acol, 'font-size' : bf});
        $('.left .bar a#l4').css({'color' : acol, 'font-size' : bf});
        $('.left .bar a#l5').css({'color' : acol, 'font-size' : bf});
        $('.left .bar a#l6').css({'color' : acol, 'font-size' : bf});
    }else
    if(wScroll > ts && wScroll <= ps){  // tech
        $('.left .bar a#l1').css({'color' : bcol, 'font-size' : af});
        $('.left .bar a#l2').css({'color' : acol, 'font-size' : bf});
        $('.left .bar a#l3').css({'color' : acol, 'font-size' : bf});
        $('.left .bar a#l4').css({'color' : acol, 'font-size' : bf});
        $('.left .bar a#l5').css({'color' : acol, 'font-size' : bf});
        $('.left .bar a#l6').css({'color' : acol, 'font-size' : bf});
    }else
    if(wScroll > ps && wScroll <= ds){  // pro
        $('.left .bar a#l1').css({'color' : acol, 'font-size' : bf});
        $('.left .bar a#l2').css({'color' : bcol, 'font-size' : af});
        $('.left .bar a#l3').css({'color' : acol, 'font-size' : bf});
        $('.left .bar a#l4').css({'color' : acol, 'font-size' : bf});
        $('.left .bar a#l5').css({'color' : acol, 'font-size' : bf});
        $('.left .bar a#l6').css({'color' : acol, 'font-size' : bf});
    }else
    if(wScroll > ds && wScroll <= ms){  // dev
        $('.left .bar a#l1').css({'color' : acol, 'font-size' : bf});
        $('.left .bar a#l2').css({'color' : acol, 'font-size' : bf});
        $('.left .bar a#l3').css({'color' : bcol, 'font-size' : af});
        $('.left .bar a#l4').css({'color' : acol, 'font-size' : bf});
        $('.left .bar a#l5').css({'color' : acol, 'font-size' : bf});
        $('.left .bar a#l6').css({'color' : acol, 'font-size' : bf});
    }else
    if(wScroll > ms && wScroll <= as){  // manage
        $('.left .bar a#l1').css({'color' : acol, 'font-size' : bf});
        $('.left .bar a#l2').css({'color' : acol, 'font-size' : bf});
        $('.left .bar a#l3').css({'color' : acol, 'font-size' : bf});
        $('.left .bar a#l4').css({'color' : bcol, 'font-size' : af});
        $('.left .bar a#l5').css({'color' : acol, 'font-size' : bf});
        $('.left .bar a#l6').css({'color' : acol, 'font-size' : bf});
    }else
    if(wScroll > as && wScroll <= cs){  // activity
        $('.left .bar a#l1').css({'color' : acol, 'font-size' : bf});
        $('.left .bar a#l2').css({'color' : acol, 'font-size' : bf});
        $('.left .bar a#l3').css({'color' : acol, 'font-size' : bf});
        $('.left .bar a#l4').css({'color' : acol, 'font-size' : bf});
        $('.left .bar a#l5').css({'color' : bcol, 'font-size' : af});
        $('.left .bar a#l6').css({'color' : acol, 'font-size' : bf});
    }
    else
    if(wScroll > cs){  // cou
        $('.left .bar a#l1').css({'color' : acol, 'font-size' : bf});
        $('.left .bar a#l2').css({'color' : acol, 'font-size' : bf});
        $('.left .bar a#l3').css({'color' : acol, 'font-size' : bf});
        $('.left .bar a#l4').css({'color' : acol, 'font-size' : bf});
        $('.left .bar a#l5').css({'color' : acol, 'font-size' : bf});
        $('.left .bar a#l6').css({'color' : bcol, 'font-size' : af});
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