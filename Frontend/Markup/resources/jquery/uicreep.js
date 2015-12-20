// Let the site play ground begin
// ----------------------------------------------------
// 1.0 ============ Main-banner slider initializer

 
 
// 1.0 Main-banner slider initializer
// will slide slider
// ------------------------------------------
var swipers = new Swiper('#page-banner .swiper-container', {
    pagination: '#page-banner .swiper-pagination',

    // Navigation arrows
    nextButton: '#page-banner .swiper-button-next',
    prevButton: '#page-banner .swiper-button-prev',

    paginationClickable: true,
    autoplay: 5000,
    lazyLoading:true,
    speed:500
});

// slider for news thumb
// ------------------------------------------
var swipers = new Swiper('.section-thumb .swiper-container', {
    pagination: '.news-thumb .swiper-pagination',

    // Navigation arrows
    nextButton: '.section-thumb .swiper-button-next',
    prevButton: '.section-thumb .swiper-button-prev',

    paginationClickable: true,
    autoplay: 5000,
    lazyLoading:true,
    speed:500
});



// small fix for tabs to remove active class from siblings 
// --------------------------------------------
$('.nav-tabs li a').click(function(){
   $(this).parent().parent().siblings().find('li').removeClass('active'); 
});

//$(document).mouseup(function (e) {
//    var container = $(".page-menu");
//
//    if (!container.is(e.target) // if the target of the click isn't the container...
//        && container.has(e.target).length === 0) // ... nor a descendant of the container
//    {
//        navigation.removeClass('right'); 
//    }
//});



// responsvie utility 
// -------------------------------------------
var windw = $(window).width();
if (windw <= 1024 && windw > 480) {
    var swiper = new Swiper('.partners-listing .swiper-container', {
        pagination: '.partners-listing .swiper-pagination',
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 0,
        // Navigation arrows
        nextButton: '.partners-listing .swiper-button-next',
        prevButton: '.partners-listing .swiper-button-prev'
    });
} else if (windw > 1024) {
    var swiper = new Swiper('.partners-listing .swiper-container', {
        pagination: '.partners-listing .swiper-pagination',
        slidesPerView: 5,
        paginationClickable: true,
        spaceBetween: 0,
        // Navigation arrows
        nextButton: '.partners-listing .swiper-button-next',
        prevButton: '.partners-listing .swiper-button-prev'
    });
} else if (windw <= 480) {
    var swiper = new Swiper('.partners-listing .swiper-container', {
        pagination: '.partners-listing .swiper-pagination',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 0,
        // Navigation arrows
        nextButton: '.partners-listing .swiper-button-next',
        prevButton: '.partners-listing .swiper-button-prev'
    });
}