
$(document).ready(() => {console.log("jQuery listo para usar");})
var btnBuscar = $("#btnBuscar");
btnBuscar.mouseover(() => {
  btnBuscar.css("transition", "300ms all");
  btnBuscar.removeClass("btn-dark");
  btnBuscar.addClass("btn-primary");
})
btnBuscar.mouseout(() => {
  btnBuscar.css("transition", "300ms all");
  btnBuscar.removeClass("btn-primary");
  btnBuscar.addClass("btn-dark");
})
var btnColor = $("#btnColor");
var body = $("body");
var nav = $("#navbar");
btnColor.click(() =>{
  if (nav.hasClass("bg-light"))
  {
    nav.css("transition", "300ms all");
    nav.removeClass("bg-light");
    nav.addClass("bg-dark");
    body.css("transition", "300ms all");
    body.addClass("bg-dark");
    body.css("color", "white");
  }
  else
  {
    nav.css("transition", "300ms all");
    nav.removeClass("bg-dark");
    nav.addClass("bg-light");
    body.css("transition", "300ms all");
    body.removeClass("bg-dark");
    body.addClass("bg-light");
    body.css("color", "black");
  }
})

console.log($("#btnBuscar"));
