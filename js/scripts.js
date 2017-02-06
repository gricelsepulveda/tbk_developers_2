//SCROLL BLOCK POPUP
function no_scrollbody()
{
    $html = $('html'); 
    $body = $('body'); 
    var initWidth = $body.outerWidth();
    var initHeight = $body.outerHeight();

    var scrollPosition = [
        self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
        self.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop
    ];
    $html.data('scroll-position', scrollPosition);
    $html.data('previous-overflow', $html.css('overflow'));
    $html.css('overflow', 'hidden');
    window.scrollTo(scrollPosition[0], scrollPosition[1]);   

    var marginR = $body.outerWidth()-initWidth;
    var marginB = $body.outerHeight()-initHeight; 
    $body.css({'margin-right': marginR,'margin-bottom': marginB});
}
function scrollbody()
{
    $html = $('html');
    $body = $('body');
    $html.css('overflow', $html.data('previous-overflow'));
    var scrollPosition = $html.data('scroll-position');
    window.scrollTo(scrollPosition[0], scrollPosition[1]);    

    $body.css({'margin-right': 0, 'margin-bottom': 0});
        $("body, html").css({
                        "overflow-x":'hidden'
        });
}
$(document).ready(function(){ 
  //DROP MENU MOBILE
  $(".cg-mobile_menu").click(function()
  {
    if($(".cg-main_header > .cg-main > .cg-wrapper").css("height")==='0px')
      {
        $(".cg-main_header > .cg-main > .cg-wrapper").css({
                                "height":'auto'
                            });
        $(".cg-main_header").css({
                                "overflow-y":'scroll'
                            });
        $(".cg-mobile_menu").addClass("cg-mobile_menu_active");
        no_scrollbody();
      }
    else{
          $(".cg-main_header > .cg-main > .cg-wrapper").css({
                                              "height":''
                                          });
          $(".cg-main_header").css({
                                "overflow-y":'hidden'
                            });
          $(".cg-mobile_menu").removeClass("cg-mobile_menu_active");
          scrollbody();
        }
  });
  //DROP SUBMENU
  $(".cg-tools_drop").click(function()
  {
    if($(".cg-submenu").css("height")==='0px')
      {
        $(".cg-submenu").css({
                                "height":'auto'
                            });
        $(".cg-tools_drop").addClass("cg-active");
      }
    else{
          $(".cg-submenu").css({
                                              "height":''
                                          });
          $(".cg-tools_drop").removeClass("cg-active");
        }
  });
  $(".cg-sm_option a").click(function(){
    $(".cg-submenu").css({
                        "height":''
                    });
  });
  $(".cg-submenu").mouseleave(function(){
    $(".cg-submenu").css({
                        "height":''
                    });
  });
  //ADD CLASS LINK
  $('.cg-main_header > .cg-main > .cg-wrapper .cg-link').click(function() {
      $('.cg-main_header > .cg-main > .cg-wrapper .cg-link').removeClass('cg-active');
      $(this).addClass('cg-active');
      scrollbody();
  });
});

function login_pop()
{
  $(".cg-pop_background").fadeIn("slow");
  $(".cg-pop_wrapper").css({
                          "display":'flex'
                       });
}
function close_login_pop()
{
  $(".cg-pop_background").fadeOut("fast");
  $(".cg-pop_wrapper").css({
                          "display":'none'
                       });
  $(".cg-main_header > .cg-main > .cg-wrapper").css({
                                              "height":''
                                          });
  $(".cg-main_header").css({
                          "overflow-y":'hidden'
                        });
  $(".cg-mobile_menu").removeClass("cg-mobile_menu_active");
}

function sesion_on()
{
  $(".cg-pop_background").fadeOut("fast");
  $(".cg-pop_wrapper").css({
                          "display":'none'
                       });
  $("#cg-fig_login, #cg-txt_login").css({
                        "display":'none'
                    });
  $("#cg-fig_profile, #cg-txt_logoff").css({
                        "display":'inline-block'
                    });
  $(".cg-main_header > .cg-main > .cg-wrapper").css({
                                              "height":''
                                          });
  $(".cg-main_header").css({
                          "overflow-y":'hidden'
                        });
  $(".cg-mobile_menu").removeClass("cg-mobile_menu_active");
}

function sesion_off()
{
  $("#cg-fig_profile, #cg-txt_logoff").css({
                        "display":'none'
                    });
  $("#cg-fig_login, #cg-txt_login").css({
                        "display":'inline-block'
                    });
}

