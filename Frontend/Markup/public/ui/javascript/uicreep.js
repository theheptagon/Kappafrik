var swipers=new Swiper("#page-banner .swiper-container",{pagination:"#page-banner .swiper-pagination",nextButton:"#page-banner .swiper-button-next",prevButton:"#page-banner .swiper-button-prev",paginationClickable:!0,autoplay:5e3,lazyLoading:!0,speed:500}),swipers=new Swiper(".section-thumb .swiper-container",{pagination:".news-thumb .swiper-pagination",nextButton:".section-thumb .swiper-button-next",prevButton:".section-thumb .swiper-button-prev",paginationClickable:!0,autoplay:5e3,lazyLoading:!0,speed:500}),swiper=new Swiper(".partners-listing .swiper-container",{pagination:".partners-listing .swiper-pagination",slidesPerView:5,paginationClickable:!0,spaceBetween:0,nextButton:".partners-listing .swiper-button-next",prevButton:".partners-listing .swiper-button-prev"});$(".nav-tabs li a").click(function(){$(this).parent().parent().siblings().find("li").removeClass("active")});