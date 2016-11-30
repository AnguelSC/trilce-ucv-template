(function(){
  var datosPiso = [];
  var botonesEditar = document.getElementsByClassName('editar');
  console.log(botonesEditar);
  var tableData = document.getElementById("tiposdepiso");
  console.log(tableData);
  for (var i = 0; i < botonesEditar.length; i++) {
    botonesEditar[i].addEventListener("click",function(evt){
      var filaPiso = document.getElementById("tiposdepiso").rows[evt.target.parentElement.parentElement.rowIndex];

      document.getElementById("tiposdepiso").rows[evt.target.parentElement.parentElement.rowIndex].innerHTML = "<td>" +filaPiso.childNodes[1].innerHTML +
      "</td><td><input value='"+filaPiso.childNodes[3].innerHTML+"' /></td><td><input value='"+filaPiso.childNodes[5].innerHTML+"' /><td><button class'btn editar btn-default'>💾</button></td>";
      //
    });
  }
})();
