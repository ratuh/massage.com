$(document).ready(function(){
       $('a[data-target^="anchor"]').bind('click.smootscroll', function(){
              let target = $(this).attr('href'),
              bl_top = $(target).offset().top;
              $('body, html').animate({scrollTop: bl_top}, 850);
              return false;
       })



       $('.master__slider').slick({
              dots: true,
              infinite: true,
              speed: 500,
              fade: true,
              cssEase: 'linear',
              arrows: false,
              autoplay: true,
              centerMode: true,
              autoplaySpeed: 1500,
       })


       $(".form-element").submit(function () {
              var formID = $(this).attr('id');
              var formNm = $('#' + formID);
              var message = $(formNm).find(".form-message");
              var formTitle = $(formNm).find(".form-title");
              $.ajax({
                  type: "POST",
                  url: '../php/send-message-to-telegram.php',
                  data: formNm.serialize(),
                  success: function (data) {
                    // Вывод сообщения об успешной отправке
                    message.html(data);
                    formTitle.css("display","none");
                    setTimeout(function(){
                      formTitle.css("display","block");
                      message.html('');
                      $('input').not(':input[type=submit], :input[type=hidden]').val('');
                    }, 3000);
                  },
                  error: function (jqXHR, text, error) {
                      // Вывод сообщения об ошибке отправки
                      message.html(error);
                      formTitle.css("display","none");
                      setTimeout(function(){
                        formTitle.css("display","block");
                        message.html('');
                        $('input').not(':input[type=submit], :input[type=hidden]').val('');
                      }, 3000);
                  }
              });
              return false;
          });
})
new WOW().init();