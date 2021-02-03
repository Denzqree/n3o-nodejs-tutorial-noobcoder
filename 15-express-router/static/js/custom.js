$(document).ready(function() {
    $('#preloader').delay(550).fadeOut(1200);
    $(".navbar-brand").delay(500).fadeIn(1200);
    $(".nav-1").delay(500).fadeIn(2400);
    $(".nav-2").delay(500).fadeIn(2400);

    var loaded = 0;

    $(".navbar-brand").click(function() {
        if (loaded > 1) {
            $("#content").fadeOut(600);
            loaded = 0;
        }
    });

    $(".nav-1").click(function() {
        if (loaded < 1 || loaded > 1) {
            $("#content").fadeOut(600);
            $("#content").delay(600).hide();
            $("#content").empty();
            $('#content').load("public/included/about.html");
            $("#content").fadeIn(600);
            loaded = 1;
        }
    });
    $(".nav-2").click(function() {
        if (loaded < 2 || loaded > 2) {
            $("#content").fadeOut(600);
            $("#content").delay(600).hide();
            $("#content").empty();
            $('#content').load("public/included/about.html");
            $("#content").fadeIn(600);
            loaded = 2;
        }
    });


    $('a[href^="#down"]').click(function() {
        $('.about-content').fadeOut(600);
        $('.about-1').fadeOut(600);
        $('.about-2').delay(600).fadeIn(600);
        $('.about-content').delay(1200).fadeIn(600);
    });

    $('a[href^="#up"]').click(function() {
        $('.about-content').fadeOut(600);
        $('.about-1').fadeOut(600);
        $('.about-2').delay(600).fadeIn(600);
        $('.about-content').delay(1200).fadeIn(600);
    });
});