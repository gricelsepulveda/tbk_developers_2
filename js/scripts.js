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
      }
    else{
          $(".main_header > .main > .wrapper").css({
                                              "height":''
                                          });
          $(".main_header").css({
                                "overflow-y":'hidden'
                            });
          $(".mobile_menu").removeClass("mobile_menu_active");
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
  });
});

function sesion_on()
{
  $("#fig_login, #txt_login").css({
                        "display":'none'
                    });
  $("#fig_profile, #txt_logoff").css({
                        "display":'inline-block'
                    });
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

