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