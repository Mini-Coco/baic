
      function g(n) {
        var o = f($(n).prevAll()),
        q = f($(n).nextAll());
        var l = f(parent.window.$(".content-tabs").children().not(".J_menuTabs"));
        var k = parent.window.$(".content-tabs").outerWidth(true) - l;
        var p = 0;
        if (parent.window.$(".page-tabs-content").outerWidth() < k) {
            p = 0
        } else {
            if (q <= (k - $(n).outerWidth(true) - $(n).next().outerWidth(true))) {
                if ((k - $(n).next().outerWidth(true)) > q) {
                    p = o;
                    var m = n;
                    while ((p - $(m).outerWidth()) > (parent.window.$(".page-tabs-content").outerWidth() - k)) {
                        p -= $(m).prev().outerWidth();
                        m = $(m).prev()
                    }
                }
            } else {
                if (o > (k - $(n).outerWidth(true) - $(n).prev().outerWidth(true))) {
                    p = o - $(n).prev().outerWidth(true)
                }
            }
        }
        parent.window.$(".page-tabs-content").animate({
            marginLeft: 0 - p + "px"
        },
        "fast")
    }

    function f(l) {
        var k = 0;
        $(l).each(function() {
            k += $(this).outerWidth(true)
        });
        return k
    }
/*openIframe()*/
/*  <div class="title" onclick="openIframe(this)" class="J_menuItem" 
addr="cus_group_image_detail.html" >夕阳最红</div> */
    function openIframe(aObj) {
        var o = $(aObj).attr("addr"),
       // var o = $(aObj).attr("href"),
        m = $(aObj).data("index"),
        l = $.trim($(aObj).text()),
        k = true;
     /*   console.log("o="+o);
        console.log("m="+m);
        console.log("l="+l);*/
        if (o == undefined || $.trim(o).length == 0) {
            return false
        }
        parent.window.$(".J_menuTab").each(function() {
            if ($(this).data("id") == o) {
                if (!$(this).hasClass("active")) {
                    $(this).addClass("active").siblings(".J_menuTab").removeClass("active");
                    g(this);
                    parent.window.$(".J_mainContent .J_iframe").each(function() {
                        if ($(this).data("id") == o) {
                            $(this).show().siblings(".J_iframe").hide();
                            return false
                        }
                    })
                }
                k = false;
                return false
            }
        });

     
        if (k) {
            var p = '<a href="javascript:;" class="active J_menuTab" data-id="' + o + '">' + l + ' <i class="fa fa-times-circle"></i></a>';
            parent.window.$(".J_menuTab").removeClass("active");
            var n = '<iframe class="J_iframe" name="iframe' + m + '" width="100%" height="100%" src="' + o + '" frameborder="0" data-id="' + o + '" seamless></iframe>';
            
          //  $(".J_mainContent").find("iframe.J_iframe").hide().parents(".J_mainContent").append(n);
            parent.window.$(".J_mainContent").find("iframe.J_iframe").hide();
            parent.window.$(".J_mainContent").find("iframe.J_iframe").parents(".J_mainContent").append(n);
            parent.window.$(".J_menuTabs .page-tabs-content").append(p);
            g($(".J_menuTab.active"));

        }
        return false
    }
