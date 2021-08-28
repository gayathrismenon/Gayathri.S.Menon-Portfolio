$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navpanel').addClass("sticky");
        }
        else{
            $('.navpanel').removeClass("sticky");
        }
    });

    $('.menu-btn').click(function(){
        $('.navpanel .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing animation
    var typed = new Typed(".change", {
        strings: ["Engineering Student", "Content Writer", "Artist"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

});