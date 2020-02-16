
 

$(document).ready(function() {
  document.getElementById('nombreAntes').innerHTML="Nombre: " + localStorage.getItem("nombre");
  document.getElementById('pesoAntes').innerHTML="Peso: " + localStorage.getItem("peso") + " KG";
  document.getElementById('edadAntes').innerHTML="Edad: " + localStorage.getItem("edad") + " Años";
  document.getElementById('estaturaAntes').innerHTML="Altura: " + localStorage.getItem("altura") + " CM";
  document.getElementById('objetivoAntes').innerHTML="Objetivo: " + localStorage.getItem("objetivo");
  document.getElementById('objetivoAntes').innerHTML="Objetivo: " + localStorage.getItem("objetivo");

  $.ajax({
          type: "POST",
          url: "https://andreaconeche.000webhostapp.com/mostrarImagen.php",
          cache: false,
          data: "nombre="+localStorage.getItem("nombre"),
          beforeSend: function() {
              $("#fotoAntes").text("Cargando...");
            },
          success: function(response)
          {
              $('#fotoAntes').html(response).fadeIn();
              
              $("#fotoAntes").listview("refresh");

          }
  });

});

$(function(){
    $("#actualizaNombre").click(function(){
      var nombre=$('[name="nombre"]').val();
     
      var fNombre = $("#nombre").val();
      var nombreA = localStorage.getItem("nombre");
      var atributo="nombre";
      var dataString = "parametro=" + fNombre + "&nombre=" + nombreA + "&atributo=" + atributo + "&update=";
      $.ajax({
        type:"POST",
        url: "https://andreaconeche.000webhostapp.com/actualizarUsuario.php",
        data: dataString,
        crossDomain: true,
        cache: false,
        beforeSend: function() {
          document.getElementById("actualizaNombre").innerHTML = "Actualizando...";
        },
        success: function(data) {
          if (data == "success") {
            localStorage.removeItem("nombre");
            window.localStorage.setItem("nombre", nombre);
            location.reload();
          } else if (data == "error") {
            $.mobile.changePage('#error2',{ transition: "slideup", role: 'dialog' });
          }
      }
      });
      
    });
    
  });

  $(function(){
    $("#actualizaPeso").click(function(){
      var peso=$('[name="peso"]').val();
     
      var fPeso = $("#peso").val();
      var nombreA = localStorage.getItem("nombre");
      var atributo="peso";
      var dataString = "parametro=" + fPeso + "&nombre=" + nombreA + "&atributo=" + atributo + "&update=";
      $.ajax({
        type:"POST",
        url: "https://andreaconeche.000webhostapp.com/actualizarUsuario.php",
        data: dataString,
        crossDomain: true,
        cache: false,
        beforeSend: function() {
          document.getElementById("actualizaPeso").innerHTML = "Actualizando...";
        },
        success: function(data) {
          if (data == "success") {
            localStorage.removeItem("peso");
            window.localStorage.setItem("peso", peso);
            location.reload();
          } else if (data == "error") {
            $.mobile.changePage('#error2',{ transition: "slideup", role: 'dialog' });
          }
      }
      });
      
    });
    
  });

  $(function(){
    $("#actualizaEdad").click(function(){
      var edad=$('[name="edad"]').val();
     
      var fEdad = $("#edad").val();
      var nombreA = localStorage.getItem("nombre");
      var atributo="edad";
      var dataString = "parametro=" + fEdad + "&nombre=" + nombreA + "&atributo=" + atributo + "&update=";
      $.ajax({
        type:"POST",
        url: "https://andreaconeche.000webhostapp.com/actualizarUsuario.php",
        data: dataString,
        crossDomain: true,
        cache: false,
        beforeSend: function() {
          document.getElementById("actualizaEdad").innerHTML = "Actualizando...";
        },
        success: function(data) {
          if (data == "success") {
            localStorage.removeItem("edad");
            window.localStorage.setItem("edad", edad);
            location.reload();
          } else if (data == "error") {
            $.mobile.changePage('#error2',{ transition: "slideup", role: 'dialog' });
          }
      }
      });
      
    });
    
  });

  $(function(){
    $("#actualizaObjetivo").click(function(){
      var edad=$('[name="objetivo"]').val();
     
      var fEdad = $("#objetivo").val();
      var nombreA = localStorage.getItem("nombre");
      var atributo="objetivo";
      var dataString = "parametro=" + fEdad + "&nombre=" + nombreA + "&atributo=" + atributo + "&update=";
      $.ajax({
        type:"POST",
        url: "https://andreaconeche.000webhostapp.com/actualizarUsuario.php",
        data: dataString,
        crossDomain: true,
        cache: false,
        beforeSend: function() {
          document.getElementById("actualizaObjetivo").innerHTML = "Actualizando...";
        },
        success: function(data) {
          if (data == "success") {
            localStorage.removeItem("objetivo");
            window.localStorage.setItem("objetivo", edad);
            location.reload();
          } else if (data == "error") {
            $.mobile.changePage('#error2',{ transition: "slideup", role: 'dialog' });
          }
      }
      });
      
    });
    
  });

  $(function(){
    $("#actualizaEstatura").click(function(){
      var edad=$('[name="estatura"]').val();
     
      var fEdad = $("#estatura").val();
      var nombreA = localStorage.getItem("nombre");
      var atributo="altura";
      var dataString = "parametro=" + fEdad + "&nombre=" + nombreA + "&atributo=" + atributo + "&update=";
      $.ajax({
        type:"POST",
        url: "https://andreaconeche.000webhostapp.com/actualizarUsuario.php",
        data: dataString,
        crossDomain: true,
        cache: false,
        beforeSend: function() {
          document.getElementById("actualizaEstatura").innerHTML = "Actualizando...";
        },
        success: function(data) {
          if (data == "success") {
            localStorage.removeItem("altura");
            window.localStorage.setItem("altura", edad);
            location.reload();
          } else if (data == "error") {
            $.mobile.changePage('#error2',{ transition: "slideup", role: 'dialog' });
          }
      }
      });
      
    });
    
  });

  $(document).ready(function(){
    var frm=$("#envio");
    frm.bind("submit",function(){
      var frmData=new FormData;
      formData.append('nombre', $("input[name=nombreUsuario]"));
      frmData.append("imagen",$("input[name=imagen]")[0].files[0]);
     
      $.ajax({
        url: frm.attr("action"),
        type: frm.attr("method"),
        data: frmData,
        processData: false,
        contentType: false,
        cache: false,
        beforeSend: function() {
          document.getElementById("fotoAntes").innerHTML = "Actualizando...";
        },
        success: function(data){
          if (data == "success") {
            $("#datos").page("refresh");
          } else if (data == "error") {
              alert("error");
          }
        }
      });

      return false;
    });
})


  

