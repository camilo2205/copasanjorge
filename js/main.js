$(document).ready(function(){

  $(window).scroll(function() {
    if ($(document).scrollTop() > 10) {
      $("#encabezado").hide(1000);
      $(".contenido").css("padding-top","100px");
    } else {
      $("#encabezado").show(1000,function() {
        $(".contenido").css("padding-top","170px");
      });
    }
  });

});
