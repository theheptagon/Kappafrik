jQuery.fn.liScroll=function(t){return t=jQuery.extend({travelocity:.07},t),this.each(function(){function i(t,r){e.animate({left:"-="+t},r,"linear",function(){e.css("left",n),i(a,c)})}var e=jQuery(this);e.addClass("newsticker");var r=1;e.find("li").each(function(t){r+=jQuery(this,t).outerWidth(!0)});var n=(e.wrap("<div class='mask'></div>"),e.parent().wrap("<div class='tickercontainer'></div>"),e.parent().parent().width());e.width(r);var a=r+n,c=a/t.travelocity;i(a,c),e.hover(function(){jQuery(this).stop()},function(){var e=jQuery(this).offset(),n=e.left+r,a=n/t.travelocity;i(n,a)})})};