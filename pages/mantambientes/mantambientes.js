var dataAmbientes = [
	[4,9,8,1,123,1,"Aula 101",1,"PISO 1",1,"PABELLON A",1,"CAMPUS LIMA NORTE",1,"UCV LIMA NORTE",1,200.00,240,1.20],
	[4,9,8,1,124,1,"Aula 102",1,"PISO 1",1,"PABELLON A",1,"CAMPUS LIMA NORTE",1,"UCV LIMA NORTE",1,200.00,240,1.20],
	[3,4,6,1,125,1,"Aula 103",1,"PISO 1",1,"PABELLON A",1,"CAMPUS UCV CHICLAYO",1,"UCV CAMPUS CHICLAYO",1,200.00,240,1.20],
  [3,4,6,2,130,1,"Aula 205",1,"PISO 2",1,"PABELLON A",1,"CAMPUS UCV CHICLAYO",1,"UCV CAMPUS CHICLAYO",1,200.00,240,1.20],
  [3,4,6,2,137,1,"Aula 206",1,"PISO 2",1,"PABELLON A",1,"CAMPUS UCV CHICLAYO",1,"UCV CAMPUS CHICLAYO",1,200.00,240,1.20],
	[3,4,7,2,126,1,"Aula 201",1,"PISO 2",2,"PABELLON B",1,"CAMPUS UCV CHICLAYO",1,"UCV CAMPUS CHICLAYO",1,200.00,240,1.20],
	[4,9,9,2,127,1,"Aula 202",1,"PISO 2",2,"PABELLON B",1,"CAMPUS LIMA NORTE",1,"UCV LIMA NORTE",1,200.00,240,1.20],
	[4,9,9,2,128,1,"Aula 203",1,"PISO 2",2,"PABELLON B",1,"CAMPUS LIMA NORTE",1,"UCV LIMA NORTE",1,200.00,240,1.20]
];

//Arbol
var arbol = document.querySelector('.tree');

//DataFormulario
var idActual = -1;
var nivelActualNumber = -1;

function reloadTree(){
  var spanS = document.querySelectorAll(".tree span");
  for (var i = 0; i < spanS.length; i++) {
    if(spanS[i].nextSibling){
        spanS[i].nextSibling.style.display = 'none';
    }
    spanS[i].addEventListener('click',function (evt) {
        if((evt.target.tagName == 'SMALL') || (evt.target.tagName == 'SPAN')){
        //Solo para SMALL Sino Retorna el nextSibling de Span
        var Elemento = ((evt.target.tagName == 'SMALL')?evt.target.parentElement.nextSibling:evt.target.nextSibling);
        if(Elemento){
            //Boton al Final
            var index = 0;
            var sinIcono = evt.target.childNodes[index].nodeValue.trim().substr(2);
            //Boton al Comienzo

            if(Elemento.style.display == 'none'){
                Elemento.style.display = 'block';
                evt.target.childNodes[index].nodeValue  = "📂 "+sinIcono;
            }else{
                Elemento.style.display = 'none';
                evt.target.childNodes[index].nodeValue  = "📁 "+sinIcono;
            }
        }
      }
    });
  }
}


function renderTreeView(){
  //Filiales
  for (var i = 0; i < filiales.length; i++) {
    //console.log(filiales[i]);
    var elementoLista = document.createElement('LI');
    elementoLista.setAttribute('id',filiales[i][0]);

    var elementoSpan = document.createElement('SPAN');
    elementoSpan.textContent = '📁 '+filiales[i][1];
    elementoLista.appendChild(elementoSpan);

    elementoLista.appendChild(recursiveTreeView(0,filiales[i][0]));
    arbol.appendChild(elementoLista);
  }
  reloadTree();
}

function recursiveTreeView(nivel,padre,extraAmbiente){
  var datosHijos = filterTable(nivel,padre,extraAmbiente);
  var listadoUl = document.createElement('UL');
  for (var i = 0; i < datosHijos.length; i++) {
    switch (nivel) {
      case 0:
        //Locales
        console.log("--",datosHijos[i][12]);
        var elementoLista = document.createElement('LI');
        elementoLista.setAttribute('id',datosHijos[i][1]);

        var elementoSpan = document.createElement('SPAN');
        elementoSpan.textContent = '📁 '+datosHijos[i][12];

        var grupoBotones = document.createElement('DIV');
        grupoBotones.setAttribute('class','btn-group');

        var botonAgregar = document.createElement('BUTTON');
        botonAgregar.className = 'btn btn-xs btn-default';
        botonAgregar.addEventListener('click',function(evt){
          var identificador = ((evt.target.tagName == 'I')?evt.target.parentElement.parentElement.parentElement.parentElement.id:evt.target.parentElement.parentElement.parentElement.id);
          var nombre = ((evt.target.tagName == 'I')?evt.target.parentElement.parentElement.parentElement.textContent.substr(2).trim():evt.target.parentElement.parentElement.textContent.substr(2).trim());
          agregarElemento([identificador,nombre],'LOCAL','PABELLON');
        });
        var iconoAgregar = document.createElement('I');
        iconoAgregar.setAttribute('class','icon-plus');
        botonAgregar.appendChild(iconoAgregar);

        var botonEditar = document.createElement('BUTTON');
        botonEditar.className = 'btn btn-xs btn-default';
        botonEditar.addEventListener('click',function(evt){
          var identificador = ((evt.target.tagName == 'I')?evt.target.parentElement.parentElement.parentElement.parentElement.id:evt.target.parentElement.parentElement.parentElement.id);
          var nombre = ((evt.target.tagName == 'I')?evt.target.parentElement.parentElement.parentElement.textContent.substr(2).trim():evt.target.parentElement.parentElement.textContent.substr(2).trim());
          editarElemento([identificador,nombre],'LOCAL');
        });
        var iconoEditar = document.createElement('I');
        iconoEditar.setAttribute('class','icon-pencil');
        botonEditar.appendChild(iconoEditar);

        grupoBotones.appendChild(botonAgregar);
        grupoBotones.appendChild(botonEditar);
        elementoSpan.appendChild(grupoBotones);
        elementoLista.appendChild(elementoSpan);

        elementoLista.appendChild(recursiveTreeView(nivel+1,datosHijos[i][nivel+1],0));
        listadoUl.appendChild(elementoLista);
        break;
      case 1:
        //Pabellones
        console.log("----",datosHijos[i][10]);
        var elementoLista = document.createElement('LI');
        elementoLista.setAttribute('id',datosHijos[i][2]);

        var elementoSpan = document.createElement('SPAN');
        elementoSpan.textContent = '📁 '+datosHijos[i][10];

        var grupoBotones = document.createElement('DIV');
        grupoBotones.setAttribute('class','btn-group');

        var botonAgregar = document.createElement('BUTTON');
        botonAgregar.className = 'btn btn-xs btn-default';
        botonAgregar.addEventListener('click',function(evt){
          var identificador = ((evt.target.tagName == 'I')?evt.target.parentElement.parentElement.parentElement.parentElement.id:evt.target.parentElement.parentElement.parentElement.id);
          var nombre = ((evt.target.tagName == 'I')?evt.target.parentElement.parentElement.parentElement.textContent.substr(2).trim():evt.target.parentElement.parentElement.textContent.substr(2).trim());
          agregarElemento([identificador,nombre],'PABELLON','AMBIENTE');
        });
        var iconoAgregar = document.createElement('I');
        iconoAgregar.setAttribute('class','icon-plus');
        botonAgregar.appendChild(iconoAgregar);

        var botonEditar = document.createElement('BUTTON');
        botonEditar.className = 'btn btn-xs btn-default';
        botonEditar.addEventListener('click',function(evt){
          var identificador = ((evt.target.tagName == 'I')?evt.target.parentElement.parentElement.parentElement.parentElement.id:evt.target.parentElement.parentElement.parentElement.id);
          var nombre = ((evt.target.tagName == 'I')?evt.target.parentElement.parentElement.parentElement.textContent.substr(2).trim():evt.target.parentElement.parentElement.textContent.substr(2).trim());
          editarElemento([identificador,nombre],'PABELLON');
        });
        var iconoEditar = document.createElement('I');
        iconoEditar.setAttribute('class','icon-pencil');
        botonEditar.appendChild(iconoEditar);

        grupoBotones.appendChild(botonAgregar);
        grupoBotones.appendChild(botonEditar);
        elementoSpan.appendChild(grupoBotones);
        elementoLista.appendChild(elementoSpan);
        elementoLista.appendChild(recursiveTreeView(nivel+1,datosHijos[i][nivel+1],0));
        listadoUl.appendChild(elementoLista);
        break;
      case 2:
        //Pisos
        console.log("------",datosHijos[i][8]);
        var elementoLista = document.createElement('LI');
        elementoLista.setAttribute('id',datosHijos[i][3]);

        var elementoSpan = document.createElement('SPAN');
        elementoSpan.textContent = '📁 '+datosHijos[i][8];

        var grupoBotones = document.createElement('DIV');
        grupoBotones.setAttribute('class','btn-group');

        var botonAgregar = document.createElement('BUTTON');
        botonAgregar.className = 'btn btn-xs btn-default';
        botonAgregar.addEventListener('click',function(evt){
          var identificador = ((evt.target.tagName == 'I')?evt.target.parentElement.parentElement.parentElement.parentElement.id:evt.target.parentElement.parentElement.parentElement.id);
          var nombre = ((evt.target.tagName == 'I')?evt.target.parentElement.parentElement.parentElement.textContent.substr(2).trim():evt.target.parentElement.parentElement.textContent.substr(2).trim());
          agregarElemento([identificador,nombre],'PISO','AMBIENTE')
        });
        var iconoAgregar = document.createElement('I');
        iconoAgregar.setAttribute('class','icon-plus');
        botonAgregar.appendChild(iconoAgregar);

        var botonEditar = document.createElement('BUTTON');
        botonEditar.className = 'btn btn-xs btn-default';
        botonEditar.addEventListener('click',function(evt){
          var identificador = ((evt.target.tagName == 'I')?evt.target.parentElement.parentElement.parentElement.parentElement.id:evt.target.parentElement.parentElement.parentElement.id);
          var nombre = ((evt.target.tagName == 'I')?evt.target.parentElement.parentElement.parentElement.textContent.substr(2).trim():evt.target.parentElement.parentElement.textContent.substr(2).trim());
          editarElemento([identificador,nombre],'PISO')
        });
        var iconoEditar = document.createElement('I');
        iconoEditar.setAttribute('class','icon-pencil');
        botonEditar.appendChild(iconoEditar);

        grupoBotones.appendChild(botonAgregar);
        grupoBotones.appendChild(botonEditar);
        elementoSpan.appendChild(grupoBotones);
        elementoLista.appendChild(elementoSpan);
        elementoLista.appendChild(recursiveTreeView(nivel+1,datosHijos[i][nivel+1],padre));
        listadoUl.appendChild(elementoLista);
        break;
      case 3:
        //Ambientes
        console.log("--------",datosHijos[i][6]);
        var elementoLista = document.createElement('LI');
        elementoLista.setAttribute('id',datosHijos[i][4]);

        var elementoSpan = document.createElement('SPAN');
        elementoSpan.textContent = '📁 '+datosHijos[i][6];

        var grupoBotones = document.createElement('DIV');
        grupoBotones.setAttribute('class','btn-group');

        var botonEditar = document.createElement('BUTTON');
        botonEditar.className = 'btn btn-xs btn-default';
        botonEditar.addEventListener('click',function(evt){
          var identificador = ((evt.target.tagName == 'I')?evt.target.parentElement.parentElement.parentElement.parentElement.id:evt.target.parentElement.parentElement.parentElement.id);
          var nombre = ((evt.target.tagName == 'I')?evt.target.parentElement.parentElement.parentElement.textContent.substr(2).trim():evt.target.parentElement.parentElement.textContent.substr(2).trim());
          editarElemento([identificador,nombre],'AMBIENTE');
        });
        var iconoEditar = document.createElement('I');
        iconoEditar.setAttribute('class','icon-pencil');
        botonEditar.appendChild(iconoEditar);

        grupoBotones.appendChild(botonEditar);
        elementoSpan.appendChild(grupoBotones);
        elementoLista.appendChild(elementoSpan);
        listadoUl.appendChild(elementoLista);
        break;
      default:
    }
  }
  return listadoUl;
}

function filterTable(index,value,extraAmbiente){
  var returnTable = [];
  for (var i = 0; i < dataAmbientes.length; i++) {
    if(index == 3){
      if(dataAmbientes[i][index] == value && dataAmbientes[i][index-1] == extraAmbiente){
        if(buscarEnTabla(returnTable,dataAmbientes[i][index+1],index) == null) returnTable.push(dataAmbientes[i]);
      };
    }else{
      if(dataAmbientes[i][index] == value){
        if(buscarEnTabla(returnTable,dataAmbientes[i][index+1],index) == null) returnTable.push(dataAmbientes[i]);
      };
    }
  }
  return  returnTable;
}

function buscarEnTabla(array,valor,pos){
  for (var i = 0; i < array.length; i++) {
    if(array[i][pos+1] == valor){
      return array[i];
    }
  }
  return null;
}

var filiales = [
  [3,'UCV CAMPUS CHICLAYO',1],
  [4,'UCV CAMPUS LIMA NORTE',1],
];

var tiposAmbiente = [
  [1,'Aula',1.20,1],
  [2,'Laboratorio de Computaciones',2.50,1],
  [3,'Laboratorio Especializado',2.50,1],
  [39,'Externo',9.60,1]
];

var tiposPiso = [
  [1,'PISO 1',1],
  [2,'PISO 2',1],
  [3,'PISO 3',1],
  [4,'PISO 4',1]
];

function agregarElemento(data,nivelActual,nivelSiguente){
  //panelHeading
  document.getElementById('breadcrumbActual').textContent = "AGREGAR NIVEL A: "+data[1];

	//Manteniendo Data de Formulario
  if(nivelActual == 'FILIAL') nivelActualNumber = 0;
  if(nivelActual == 'LOCAL') nivelActualNumber = 1;
  if(nivelActual == 'PABELLON') nivelActualNumber = 2;
  if(nivelActual == 'AMBIENTE') nivelActualNumber = 4;
  idActual = -1;

  //Elementos Generales
  document.querySelector('#descripcion').style.display = 'block';
  document.querySelector('#EsVigente').style.display = 'block';
  document.querySelector('#EsVigente input').checked = true;
  document.querySelector('#descripcion input').value = "";
  document.querySelector('#EsVigente input').disabled = true;


  if(nivelSiguente == 'AMBIENTE'){
    document.querySelector('#tipoAmbiente').style.display = 'block';
    document.querySelector('#categoriaAmbiente').style.display = 'block';
    document.querySelector('#tipoPiso').style.display = 'block';
    document.querySelector('#area').style.display = 'block';
  }else{
    document.querySelector('#tipoAmbiente').style.display = 'none';
    document.querySelector('#categoriaAmbiente').style.display = 'none';
    document.querySelector('#tipoPiso').style.display = 'none';
    document.querySelector('#area').style.display = 'none';
  }

  if(nivelActual == 'PISO'){
    document.querySelector('#tipoPiso select').value = data[0];
    document.querySelector('#tipoPiso select').disabled = true;
  }else{
    document.querySelector('#tipoPiso select').selectedIndex = 0;
    document.querySelector('#tipoPiso select').disabled = false;
  }
}

function editarElemento(data,nivelActual){
  //panelHeading
  var returnValue = buscarPorId(data[0],nivelActual);

  //Manteniendo Data de Formulario
  if(nivelActual == 'FILIAL') nivelActualNumber = 0;
  if(nivelActual == 'LOCAL') nivelActualNumber = 1;
  if(nivelActual == 'PABELLON') nivelActualNumber = 2;
  if(nivelActual == 'AMBIENTE') nivelActualNumber = 4;
  idActual = data[0];

  document.getElementById('breadcrumbActual').textContent = "EDITAR NIVEL : "+data[1];

  //Descripcion y Es Vigente
  document.querySelector('#descripcion').style.display = 'block';
  document.querySelector('#EsVigente').style.display = 'block';

  //Valor de Descripcion y Es Vigente
  document.querySelector('#descripcion input').value = data[1];
  if(nivelActual == 'FILIAL') document.querySelector('#EsVigente input').checked = returnValue[16];
  if(nivelActual == 'LOCAL') document.querySelector('#EsVigente input').checked = returnValue[14];
  if(nivelActual == 'PABELLON') document.querySelector('#EsVigente input').checked = returnValue[12];
  //if(nivelActual == 'PISO') document.querySelector('#EsVigente input').checked = true;
  if(nivelActual == 'AMBIENTE') document.querySelector('#EsVigente input').checked = returnValue[14];

  if(nivelActual == 'AMBIENTE'){
    document.querySelector('#tipoAmbiente').style.display = 'block';
    document.querySelector('#categoriaAmbiente').style.display = 'block';
    document.querySelector('#tipoPiso').style.display = 'block';
  }else{
    document.querySelector('#tipoAmbiente').style.display = 'none';
    document.querySelector('#categoriaAmbiente').style.display = 'none';
    document.querySelector('#tipoPiso').style.display = 'none';
  }
}

//Arreglos de Inner Join
function buscarPorId(id,nivel){
  if(nivel == 'FILIAL') nivel = 0;
  if(nivel == 'LOCAL') nivel = 1;
  if(nivel == 'PABELLON') nivel = 2;
  if(nivel == 'AMBIENTE') nivel = 4;

  for (var i = 0; i < dataAmbientes.length; i++) {
    if(dataAmbientes[i][nivel] == id){
        return dataAmbientes[i];
    }
  }
}

function loadCombos(){
  var tiposPisoSelect = document.querySelector('#tipoPiso select');
  var tiposAmbienteSelect = document.querySelector('#tipoAmbiente select');
  //Aqui va un Ajax y for
  //Tipos de Piso
  for (var i = 0; i < tiposPiso.length; i++) {
    var option = document.createElement("option");
    option.text = tiposPiso[i][1];
    option.value = tiposPiso[i][0];
    tiposPisoSelect.add(option);
  }
  //Tipos de Ambiente
  for (var i = 0; i < tiposAmbiente.length; i++) {
    var option = document.createElement("option");
    option.text = tiposAmbiente[i][1];
    option.value = tiposAmbiente[i][0];
    tiposAmbienteSelect.add(option);
  }
}



function guardar(){
  console.log(document.querySelector('#descripcion input'));
  console.log(document.querySelector('#tipoAmbiente select'));
  console.log(document.querySelector('#categoriaAmbiente select'));
  console.log(document.querySelector('#tipoPiso select'));
  console.log(document.querySelector('#EsVigente input'));
  console.log(document.querySelector('#area input'));
	console.log(idActual,nivelActualNumber);
}
