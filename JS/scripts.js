"use strict"
window.addEventListener("load", () => {

  var btnInstagram = $("#btnInstagram");
  var btnFacebook = $("#btnFacebook");
  var btnGmail = $("btnGmail");
  var btnBuscar = document.querySelector("#btnBuscar");
  var btnStop = $("#btnStop");

  btnBuscar.style = "transition: 300ms all";

  btnInstagram.click(function (event) {
    window.open("https://www.instagram.com");
    console.log(event);
  })

  btnFacebook.click(() => {
    window.open("https://www.facebook.com/");
  })

  btnGmail.click(() => {
    window.open("https://www.gmail.com");
  })


function intervalo()
{
  var tiempo = setInterval(() => {
  if (btnBuscar.className == "btn btn-dark my-2 my-sm-0")
  {
    btnBuscar.className = "btn btn-light my-2 my-sm-0";
  }
  else {
    btnBuscar.className = "btn btn-dark my-2 my-sm-0";

  }
  return tiempo;
}, 2000)
}
var tiempox = intervalo();
})
