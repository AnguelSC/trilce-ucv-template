var tableData = document.getElementById("tiposdepiso");
//Piso en Edicion
//📝💾⛔
var pisoEditando = {};

function guardar(boton){
  var filaPiso =  boton.parentElement.parentElement.parentElement;
  filaPiso.innerHTML = "<td class='col-md-1'>" +filaPiso.childNodes[0].innerHTML +"</td>"+
  "<td class='col-md-3'>"+filaPiso.childNodes[1].childNodes[0].value+"</td>"+
  "<td class='col-md-3'>"+((filaPiso.childNodes[2].childNodes[0].childNodes[0].checked)?'SI':'NO')+"</td>"+
  "<td class='col-md-3'><button class='btn btn-xs btn-primary' onclick='editar(this)' title='Editar'><i class='icon-pencil'></i></button>";
  pisoEditando = [];
  filaPiso = null;
}

function editar(boton){
    var filaPiso = boton.parentElement.parentElement;
    pisoEditando[boton.parentElement.parentElement.rowIndex] = [filaPiso.cells[0].innerHTML,filaPiso.cells[1].innerHTML,filaPiso.cells[2].innerHTML];
    console.log(pisoEditando);
    filaPiso.innerHTML =
    "<td class='col-md-1'>" +filaPiso.cells[0].innerHTML +"</td>"+
    "<td class='col-md-3'><input class='form-control' value='"+filaPiso.cells[1].innerHTML+"' /></td>"+
    "<td class='col-md-3'><div class='checkbox-style'><input id='"+filaPiso.cells[0].innerHTML+"' type='checkbox' class='form-control' "+((filaPiso.cells[2].innerHTML == 'SI')?"checked":"")+"/><label for='"+filaPiso.cells[0].innerHTML+"'></label></div></td>"+
    "<td class='col-md-3'><div class='btn-group' role='group'><button class='btn btn-xs btn-success' title='Guardar' onclick='guardar(this)'><i class='icon-floppy-o'></i></button><button class='btn btn-xs cancelar btn-danger' title='Cancelar' onclick='cancelar(this,\"editar\")'><i class='icon-ban'></i></button></div></td>";
    filaPiso.childNodes[1].childNodes[0].focus();
}

function cancelar(boton,action){
  var filaPiso =  boton.parentElement.parentElement.parentElement;
  console.log(filaPiso);
  if(action == 'editar'){
    var editando = boton.parentElement.parentElement.parentElement.rowIndex;
    console.log(editando);
    filaPiso.innerHTML = "<td class='col-md-1'>" +pisoEditando[editando][0] +"</td>"+
    "<td class='col-md-3'>"+pisoEditando[editando][1]+"</td>"+
    "<td class='col-md-3'>"+pisoEditando[editando][2]+"</td>"+
    "<td class='col-md-3'><button class='btn editar btn-xs btn-primary' onclick='editar(this)' title='Editar'><i class='icon-pencil'></i></button></td>";
    delete pisoEditando[editando];
  }else{
    filaPiso.remove();
  }

}

function nuevo(){
  tableData.insertRow(-1);
  var filaPiso = tableData.insertRow(-1);//console.log(tableData.rows[tableData.rows.length - 1]);
  filaPiso.className = "col-input";
  filaPiso.innerHTML =
  "<td class='col-md-1'>0</td>"+
  "<td class='col-md-3'><input class='form-control' /></td>"+
  "<td class='col-md-3'><div class='checkbox-style'><input id='"+(new  Date().getTime())+"' type='checkbox' class='form-control' checked disabled/><label for='"+(new Date().getTime())+"'></label></div></td>"+
  "<td class='col-md-3'><div class='btn-group' role='group'><button class='btn btn-xs btn-default btn-success' title='Guardar' onclick='guardar(this)'><i class='icon-floppy-o'></i></button><button class='btn cancelar btn-xs btn-danger' title='Cancelar' onclick='cancelar(this,\"nuevo\")'><i class='icon-ban'></i></button></div></td></tr>";
  filaPiso.childNodes[1].childNodes[0].focus();
}

(function(){

})();
