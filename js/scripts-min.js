function sesion_on(){$("#fig_login, #txt_login").css({display:"none"}),$("#fig_profile, #txt_logoff").css({display:"inline-block"})}function sesion_off(){$("#fig_profile, #txt_logoff").css({display:"none"}),$("#fig_login, #txt_login").css({display:"inline-block"})}function no_scrollbody(){$html=$("html"),$body=$("body");var o=$body.outerWidth(),e=$body.outerHeight(),s=[self.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft,self.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop];$html.data("scroll-position",s),$html.data("previous-overflow",$html.css("overflow")),$html.css("overflow","hidden"),window.scrollTo(s[0],s[1]);var i=$body.outerWidth()-o,l=$body.outerHeight()-e;$body.css({"margin-right":i,"margin-bottom":l})}function scrollbody(){$html=$("html"),$body=$("body"),$html.css("overflow",$html.data("previous-overflow"));var o=$html.data("scroll-position");window.scrollTo(o[0],o[1]),$body.css({"margin-right":0,"margin-bottom":0}),$("body, html").css({"overflow-x":"hidden"})}$(document).ready(function(){$(".mobile_menu").click(function(){"0px"===$(".main_header > .main > .wrapper").css("height")?($(".main_header > .main > .wrapper").css({height:"auto"}),$(".main_header").css({"overflow-y":"scroll"}),$(".mobile_menu").addClass("mobile_menu_active"),no_scrollbody()):($(".main_header > .main > .wrapper").css({height:""}),$(".main_header").css({"overflow-y":"hidden"}),$(".mobile_menu").removeClass("mobile_menu_active"),scrollbody())}),$(".tools_drop").click(function(){"0px"===$(".submenu").css("height")?($(".submenu").css({height:"auto"}),$(".tools_drop").addClass("active")):($(".submenu").css({height:""}),$(".tools_drop").removeClass("active"))}),$(".sm_option a").click(function(){$(".submenu").css({height:""})}),$(".submenu").mouseleave(function(){$(".submenu").css({height:""})}),$(".main_header > .main > .wrapper .link").click(function(){$(".main_header > .main > .wrapper .link").removeClass("active"),$(this).addClass("active"),scrollbody()})});