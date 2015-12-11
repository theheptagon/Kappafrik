// Let the site play ground begin
// ----------------------------------------------------
// 1.0 ============ Main-banner slider initializer

 
 
// 1.0 Main-banner slider initializer
// will slide slider
// ------------------------------------------
var swipers = new Swiper('.main-slider', {
    pagination: '.main-slider .swiper-pagination',

    // Navigation arrows
    nextButton: '.main-slider .swiper-button-next',
    prevButton: '.main-slider .swiper-button-prev',

    paginationClickable: true,
    autoplay: 5000,
    lazyLoading:true,
    speed:500
}); 


// Priority slider on the homepage 
// -------------------------------------------
var swipers = new Swiper('.priority-listing', {
    pagination: '.priority-listing .swiper-pagination',
    effect: 'fade',
    // Navigation arrows
    nextButton: '.priority-listing .swiper-button-next',
    prevButton: '.priority-listing .swiper-button-prev',

    paginationClickable: true,
    autoplay: 5000,
    speed:500
});

// calendar slider on the homepage
// ------------------------------------------
var swipers = new Swiper('.calendar-listing', {
    pagination: '.calendar-listing .swiper-pagination',
    // Navigation arrows
    nextButton: '.calendar-listing .swiper-button-next',
    prevButton: '.calendar-listing .swiper-button-prev',
    slidesPerView: 4,
    paginationClickable: true,
    autoplay: 5000,
    speed:500
});

// menu button triggering 
// --------------------------------------------
$('.menu').click(function(){
    var navigation = $('.page-menu');
    navigation.toggleClass('right'); 
});

$(document).mouseup(function (e) {
    var container = $(".page-menu");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        navigation.removeClass('right'); 
    }
});