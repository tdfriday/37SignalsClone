$(document).ready(function(){
    $("#bc").hover(function(){
        $(".header-text-shown").toggle();
        $(".bc-info-hidden").toggle();
    });
    $("#hr").hover(function(){
        $(".header-text-shown").toggle();
        $(".hr-info-hidden").toggle();
    });
    $("#cf").hover(function(){
        $(".header-text-shown").toggle();
        $(".cf-info-hidden").toggle();
    });
});