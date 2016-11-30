function guardar(boton){
  var filaPiso =  boton.parentElement.parentElement;
  boton.parentElement.parentElement.innerHTML = "<td class='col-md-1'>" +filaPiso.childNodes[0].innerHTML +"</td>"+
  "<td class='col-md-3'>"+filaPiso.childNodes[1].childNodes[0].value+"</td>"+
  "<td class='col-md-3'>"+filaPiso.childNodes[2].childNodes[0].value+"</td>"+
  "<td class='col-md-3'><button class='btn btn-default' onclick='editar(this)' title='Editar'>📝</button>";
  pisoEditando = [];
}

function editar(boton){
    var filaPiso = boton.parentElement.parentElement;
    console.log(filaPiso.cells[0]);
    filaPiso.className += 'col-input';
    filaPiso.innerHTML =
    "<td class='col-md-1'>" +filaPiso.cells[0].innerHTML +"</td>"+
    "<td class='col-md-3'><input class='form-control' value='"+filaPiso.cells[1].innerHTML+"' /></td>"+
    "<td class='col-md-3'><input class='form-control' value='"+filaPiso.cells[2].innerHTML+"' /></td>"+
    "<td class='col-md-3'><button class='btn btn-xs btn-default' title='Guardar' onclick='guardar(this)'>💾</button><button class='btn btn-xs btn-default' title='Cancelar' onclick='cancelar(this)'>⛔</button></td>";
    pisoEditando = [filaPiso.childNodes[0].innerHTML,filaPiso.childNodes[1].innerHTML,filaPiso.childNodes[2].innerHTML];
}

function cancelar(boton){
    var filaPiso = boton.parentElement.parentElement;
    console.log(filaPiso.childNodes);
    filaPiso.className += 'col-input';
    filaPiso.innerHTML =
    "<td class='col-md-1'>" +filaPiso.childNodes[1].innerHTML +"</td>"+
    "<td class='col-md-3'><input class='form-control' value='"+filaPiso.childNodes[3].innerHTML+"' /></td>"+
    "<td class='col-md-3'><input class='form-control' value='"+filaPiso.childNodes[5].innerHTML+"' /></td>"+
    "<td class='col-md-3'><button class='btn btn-default' title='Guardar' onclick='guardar(this)'>💾</button><button class='btn btn-default' title='Cancelar' onclick='cancelar(this)'>⛔</button></td>";
    pisoEditando = [filaPiso.childNodes[1].innerHTML,filaPiso.childNodes[3].innerHTML];
}

(function(){
  var datosPiso = [];

  //Elementos DOM
  var botonesEditar = document.getElementsByClassName('editar');
  var tableData = document.getElementById("tiposdepiso");

  //Piso en Edicion
  var pisoEditando = [];

})();
