$(document).ready(function(){
    scrollWindow();
});

$(window).scroll(function(){
    scrollWindow();
}); 
   

function scrollWindow(){
    var navbarHeight = $('.navbar').height(); 
    
     if ($(window).scrollTop() >= navbarHeight ) {
         $('.navbar').addClass('drop-menu');
         $('.navbar.navbar-light .nav-link').addClass('nav-link-hover');
         $('.navbar .navbar-brand').addClass('navbar-brand-hover');
    } else {
        $('.navbar').removeClass('drop-menu');
        $('.navbar.navbar-light .nav-link').removeClass('nav-link-hover');
        $('.navbar .navbar-brand').removeClass('navbar-brand-hover');
    }
};
    
