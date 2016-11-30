(function(){
  var datosPiso = [];

  //Elementos DOM
  var botonesEditar = document.getElementsByClassName('editar');
  var tableData = document.getElementById("tiposdepiso");

  //Piso en Edicion
  var pisoEditando = [];

  for (var i = 0; i < botonesEditar.length; i++) {
    botonesEditar[i].addEventListener("click",function(evt){
      var filaPiso = document.getElementById("tiposdepiso").rows[evt.target.parentElement.parentElement.rowIndex];
      document.getElementById("tiposdepiso").rows[evt.target.parentElement.parentElement.rowIndex].innerHTML = "<td class='col-md-1'>" +filaPiso.childNodes[1].innerHTML +"</td>"+
      "<td class='col-md-3'><input class='form-control' value='"+filaPiso.childNodes[3].innerHTML+"' /></td>"+
      "<td class='col-md-3'><input class='form-control' value='"+filaPiso.childNodes[5].innerHTML+"' /></td>"+
      "<td class='col-md-3'><button class='btn btn-default' onclick='guardar(this)'>💾</button><button class='btn btn-default' onclick='cancelar(this)'>💾</button></td>";
      pisoEditando = [filaPiso.childNodes[1].innerHTML,filaPiso.childNodes[3].innerHTML];

    });
  }
  function guardar(boton){
    console.log(boton);
  }
})();
