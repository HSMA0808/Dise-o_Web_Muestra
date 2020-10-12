"use strict"
var btnGuardar = document.querySelector("#btnGuardar");
var btnCancelar = document.querySelector("#btnCancelar");
var txtNombre = document.querySelector("#txtNombre");
var txtApellido = document.querySelector("#txtApellido");
var txtEdad = document.querySelector("#txtEdad");
var txtCorreo = document.querySelector("#txtCorreo");
var body = document.querySelector(".container");
var btnLimpiar = document.querySelector("#btnLimpiar");
$.get("https://reqres.in/api/users/2", (response) =>{
  txtNombre.value = response.data.first_name;
  txtApellido.value = response.data.last_name;
  txtCorreo.value = response.data.email;
  console.log(response);
});

btnLimpiar.addEventListener("click", () => {
limpiarCampos(txtNombre, txtEdad, txtApellido, txtCorreo);
})

btnGuardar.addEventListener("click", () => {
  if (validarCampos() == true)
  {
    var persona = {
    Nombre: txtNombre.value,
    Apellido: txtApellido.value,
    Edad: txtEdad.value,
    Correo: txtCorreo.value};
    persona = JSON.stringify(persona);
    localStorage.setItem("3", persona);
    limpiarCampos(txtNombre, txtEdad, txtApellido, txtCorreo);
  }
})


btnGuardar.addEventListener("mouseover", () => {
  btnGuardar.className = "btn btn-success btn-block"
})

btnGuardar.addEventListener("mouseout", () => {
  btnGuardar.className = "btn btn-primary btn-block"
})

function validarCampos()
{
  var txtArray = [txtNombre, txtApellido, txtEdad, txtCorreo];
  let msg = "No se pudo guardar su registro, favor de completar el siguiente campo: ";
  let msgs = "No se pudo guardar su registro, favor de completar los siguientes campos: ";
  var elementos = "";
  var ciclo = 0;
  var txt;
  for(txt in txtArray)
  {
    if (txtArray[txt].value == "")
    {
      ciclo++;
      elementos = elementos + txtArray[txt].name + ", ";
    }
  }
  if (ciclo == 0)
  {
      return true;
  }
  else if(ciclo > 1)
  {
    msgs = msgs + elementos;
    alert(msgs.slice(0, (msgs.length - 2)));
    return false;
  }
  else
  {
    msg = msg + elementos
    alert(msg.slice(0, (msg.length - 2)));
    return false;
  }
}

function limpiarCampos(...campos)
{
  var x;
  if (campos.length > 0)
  {
    for(x in campos)
    {
      campos[x].value = null;
    }
  }
}
