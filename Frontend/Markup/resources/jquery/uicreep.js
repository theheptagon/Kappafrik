// Let the site play ground begin
// ----------------------------------------------------
// 1.0 ============ Main-banner slider initializer
$(".photo-popup").fancybox();
$(".partnerdetail").fancybox({
        maxWidth    : 800,
        fitToView   : false,
        width       : '70%',
        height      : '60%',
        autoSize    : false,
        closeClick  : false,
        openEffect  : 'none',
        closeEffect : 'none'
    }); 
$(".nano").nanoScroller();
$('.toggle-forMobile').click(function(){
    $(this).next('.section-nav').slideToggle();
});

var socialWrapper = $('div.socialToggleBox'),
    boxWidth = $(".socialToggleBox").outerWidth();

if ($(window).width() > 480) {
    socialWrapper.animate({
        left: -boxWidth
    }, 1);
    socialWrapper.fadeIn();
}

//social button toggle
$('.socialClose').on('click', function() {
    var buttonimg = $(this);
    $(this).toggleClass('socialUp');


    if (buttonimg.hasClass('socialUp')) {
        socialWrapper.animate({
            left: 0
        });
    } else {
        socialWrapper.animate({
            left: -boxWidth
        });
    }
});

$('.fancyMeiframe3').fancybox();


//socialSlider popup start
var windowHeightRV = $(window).height() / 2,
    windowWidthRV = $(window).width() / 2,
    socialSliderWidth = $('.socialSlider').outerWidth() / 2,
    socialSliderHeight = $('.socialSlider').outerHeight() / 2,
    leftPosition = windowWidthRV - socialSliderWidth;
topPosition = windowHeightRV - socialSliderHeight;

$(window).resize(function() {
    var windowHeightRV = $(window).height() / 2,
        windowWidthRV = $(window).width() / 2,
        socialSliderWidth = $('.socialSlider').outerWidth() / 2,
        socialSliderHeight = $('.socialSlider').outerHeight() / 2,
        leftPosition = windowWidthRV - socialSliderWidth;
    topPosition = windowHeightRV - socialSliderHeight;
    if ($(window).width() > 767) {
        $('.socialSlider').css('position', 'fixed').css('top', topPosition);
        $('.social-overlay').css('position', 'fixed').css('top', 0);
    };
});


//socialSlider center function
if ($(window).width() > 767) {
    $('.socialSlider').css('position', 'fixed').css('top', topPosition);
    $('.social-overlay').css('position', 'fixed').css('top', 0);
};


//socialSlider open function
$('.socialbtn').on('click', function() {
    $('.socialBox').fadeIn('slow');
    $('.social-overlay').fadeIn('slow');
    $('.fancyMeiframe3').fancybox({});
});


//socialSlider close function
$('.closeBtn').on('click', function() {
    $('.socialBox').fadeOut('slow');
     $('.social-overlay').fadeOut('slow');
});

//socialSlider popup end
//social button toggle ENDS here




// Slider Starts here
  $(".aak_slider_list").each( function() {
  
    $(this).find("li:first").fadeIn().addClass("current");
  
  })
  
  $(".aak_right").click(function(){
    $this = $(this);
    $index = $this.closest(".aak_slider").find(".aak_slider_list > li.current").index(); $index++;
    $size = $this.closest(".aak_slider").find(".aak_slider_list > li").size();
    
    $this.closest(".aak_slider").find(".aak_slider_list > li").addClass("asad")
    //alert($size +" ; "+ $index );
      if( $index != $size)
      {
      $this.closest(".aak_slider").find(".aak_slider_list >  li.current").removeClass("current").hide().next("li").addClass("current").fadeIn();
      $index = $this.closest(".aak_slider").find(".aak_slider_list > li.current").index(); $index++;
    $size = $this.closest(".aak_slider").find(".aak_slider_list > li").size();
      //counter($index, $size);
      
    
    $start = $(this).closest(".aak_slider").find(".aak_slider_list > li.current").index(); $start++; //alert($start);
    $ends = $(this).closest(".aak_slider").find(".aak_slider_list > li").size(); 
  
    $(this).closest(".aak_slider").find(".paging-start").html($start);
    $(this).closest(".aak_slider").find(".paging-ends").html($ends);
      }
  })
  
  $(".aak_left").click(function(){
    $this = $(this);
    $index = $this.closest(".aak_slider").find(".aak_slider_list > li.current").index(); $index++;
    $size = $this.closest(".aak_slider").find(".aak_slider_list > li").size();
    //alert($size +" ; "+ $index );
      if( $index != 1)
      {
      $this.closest(".aak_slider").find(".aak_slider_list > li.current").removeClass("current").hide().prev("li").addClass("current").fadeIn();
      $index = $this.closest(".aak_slider").find(".aak_slider_list > li.current").index(); $index++;
    $size = $this.closest(".aak_slider").find(".aak_slider_list > li").size();
      //counter($index, $size);
      
    $start = $(this).closest(".aak_slider").find(".aak_slider_list >  li.current").index(); $start++; //alert($start);
    $ends = $(this).closest(".aak_slider").find(".aak_slider_list > li").size(); 
  
    $(this).closest(".aak_slider").find(".paging-start").html($start);
    $(this).closest(".aak_slider").find(".paging-ends").html($ends);
      
      }
  });
 
 
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