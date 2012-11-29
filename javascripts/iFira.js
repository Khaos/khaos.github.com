/**
 *  @name: iFira
 *  @author: Dazhi Jian
 *  @authorLink: http://khaos.github.com
 */
;(function($){
$(document).ready(function() {

/** hightlight Menu **/
var navs, url, cur, i;
navs = $("#nav li a");
for(i = 1 ; i < navs.length; i++ ){
    url = navs[i].href;
    cur = window.location.href;
    if(cur.indexOf(url) !=-1) {
        navs[i].className = "action";
        navs[0].className = "";
    }
    if(cur != navs[0].href) {
        navs[0].className = "";
    }
}
/** scroll To **/
var scrollTo = {
    nodeName: "J-backTop",
        scrollHeight: "100",
        linkBottom: "80px",
        linkRight: "150px",
        _scrollTop: function() {
        if(jQuery.scrollTo) {
            jQuery.scrollTo(0, 800, {queue:true});
        }
    },
    _scrollScreen: function() {
        var that = this, topLink = $('#' + that.nodeName);
        if(jQuery(document).scrollTop() <= that.scrollHeight) {
            topLink.hide();
            return true;
        }  else {
            topLink.fadeIn();
        }
    },
    _resizeWindow: function() {
        var that = this, topLink = $('#' + that.nodeName);
        topLink.css({
            'right' : that.linkRight,
            'bottom': that.linkBottom
        });
    },
    run: function() {
        var that = this, topLink = $('<a id="' + that.nodeName + '" href="#" class="fira-backtop"><i class="icon-up-circled"></i></a>');
        topLink.appendTo($('body'));
        topLink.css({
            'display': 'none',
            'position': 'fixed',
            'right': that.linkRight,
            'bottom': that.linkBottom
        });
        if(jQuery.scrollTo) {
            topLink.click(function() {
                that._scrollTop();
                return false;
            });
        }
        jQuery(window).resize(function() {
            that._scrollScreen();
        });
        jQuery(window).scroll(function() {
            that._scrollScreen();
        });
    }
}
scrollTo.run();

})
})(jQuery);
