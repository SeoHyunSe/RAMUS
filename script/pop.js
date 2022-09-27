$(function(){
    $(".pop").click(function(){
        $(".popup").fadeIn();
    });
    $(".popup a").click(function(){
        $(".popup").fadeOut();
    });
});