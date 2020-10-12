var tiempo = setInterval(() => {
  var cajas = $(".titulos");
  cajas.animate({
    top: "5px"
  }, "slow");

  cajas.animate({
    top:"0px"
  }, "slow");
}, 1000);

var btnOcultar = $("#btnOcultar");
btnOcultar.click(() => {
  $("#carouselExampleSlidesOnly").slideToggle("slow");
})
