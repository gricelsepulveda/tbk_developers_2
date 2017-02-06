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
  $(".mobile_menu").click(function()
  {
    if($(".main_header > .main > .wrapper").css("height")==='0px')
      {
        $(".main_header > .main > .wrapper").css({
                                "height":'auto'
                            });
        $(".main_header").css({
                                "overflow-y":'scroll'
                            });
        $(".mobile_menu").addClass("mobile_menu_active");
        no_scrollbody();
      }
    else{
          $(".main_header > .main > .wrapper").css({
                                              "height":''
                                          });
          $(".main_header").css({
                                "overflow-y":'hidden'
                            });
          $(".mobile_menu").removeClass("mobile_menu_active");
          scrollbody();
        }
  });
  //DROP SUBMENU
  $(".tools_drop").click(function()
  {
    if($(".submenu").css("height")==='0px')
      {
        $(".submenu").css({
                                "height":'auto'
                            });
        $(".tools_drop").addClass("active");
      }
    else{
          $(".submenu").css({
                                              "height":''
                                          });
          $(".tools_drop").removeClass("active");
        }
  });
  $(".sm_option a").click(function(){
    $(".submenu").css({
                        "height":''
                    });
  });
  $(".submenu").mouseleave(function(){
    $(".submenu").css({
                        "height":''
                    });
  });
  //ADD CLASS LINK
  $('.main_header > .main > .wrapper .link').click(function() {
      $('.main_header > .main > .wrapper .link').removeClass('active');
      $(this).addClass('active');
      scrollbody();
  });
});

function login_pop()
{
  $(".pop_background").fadeIn("slow");
  $(".pop_wrapper").css({
                          "display":'flex'
                       });
}
function close_login_pop()
{
  $(".pop_background").fadeOut("fast");
  $(".pop_wrapper").css({
                          "display":'none'
                       });
  $(".main_header > .main > .wrapper").css({
                                              "height":''
                                          });
  $(".main_header").css({
                          "overflow-y":'hidden'
                        });
  $(".mobile_menu").removeClass("mobile_menu_active");
}

function sesion_on()
{
  $(".pop_background").fadeOut("fast");
  $(".pop_wrapper").css({
                          "display":'none'
                       });
  $("#fig_login, #txt_login").css({
                        "display":'none'
                    });
  $("#fig_profile, #txt_logoff").css({
                        "display":'inline-block'
                    });
  $(".main_header > .main > .wrapper").css({
                                              "height":''
                                          });
  $(".main_header").css({
                          "overflow-y":'hidden'
                        });
  $(".mobile_menu").removeClass("mobile_menu_active");
}

function sesion_off()
{
  $("#fig_profile, #txt_logoff").css({
                        "display":'none'
                    });
  $("#fig_login, #txt_login").css({
                        "display":'inline-block'
                    });
}

