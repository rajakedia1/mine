$('.left').css({
            
    'height' : $(window).height() 
});
$('.right .skill').css({
            
    'height' : $(window).height() 
});
$('.right .main').css({
            
    'height' : $(window).height(),
    
});
$('.right .devl').css({
            
    'min-height' : $(window).height(),
    
});
$('.right .proj').css({
            
    'min-height' : $(window).height(),
    
});
$('.right .man').css({
            
    'min-height' : $(window).height(),
    
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
if(wScroll > $('.skill .skillset').offset().top - ($(window).height()/1.2)){  // skill set
        
        $('.skill .skillset li').each(function(i){
            
            setTimeout(function(){
                
                $('.skill .skillset li').eq(i).addClass('is-showing2');
                
            },150 * (i+1));
        });
        
    }
});