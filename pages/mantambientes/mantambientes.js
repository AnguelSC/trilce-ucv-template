var nivelActual = "";
var stickBreadcrumbs = " > ";

function agregarElemento(boton,nivelActual,nivelSiguente){
  //panelHeading
  var spanClick = boton.parentElement.parentElement;
  console.log(spanClick);
  document.getElementById('breadcrumbActual').textContent = "AGREGAR NIVEL A: "+spanClick.textContent;
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
  }else{
    document.querySelector('#tipoAmbiente').style.display = 'none';
    document.querySelector('#categoriaAmbiente').style.display = 'none';
    document.querySelector('#tipoPiso').style.display = 'none';
  }

  if(nivelActual == 'PISO'){
    document.querySelector('#tipoPiso select').value = boton.parentElement.parentElement.parentElement.id;
    document.querySelector('#tipoPiso select').disabled = true;
  }else{
    document.querySelector('#tipoPiso select').selectedIndex = 0;
    document.querySelector('#tipoPiso select').disabled = false;
  }
}

var filiales = [
  [1,'UCV CAMPUS CHICLAYO',1],
  [2,'UCV CAMPUS TRUJILLO',1],
  [3,'UCV CAMPUS LIMA NORTE',1]
];

var locales = [
  [1,1,'CAMPUS UCV CHICLAYO',1],
  [2,3,'CAMPUS UCV LIMA NORTE',1],
  [3,1,'CENTRO DE IDIOMAS',1],
];

var pabellones = [
  [1,1,'PABELLON A',0],
  [2,1,'PABELLON B',1],
  [3,1,'PABELLON C',1],
  [4,2,'PABELLON A',1],
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

var ambientes = [
  [1,1,1,1,'CAMPUS UCV CHICLAYO',1,200,1.2,240,true],
  [2,1,1,1,'CENTRO DE IDIOMAS',1,200,1.2,240,true],
  [3,4,1,1,'CAMPUS UCV LIMA NORTE',1,200,1.2,240,true],
];

function editarElemento(boton,nivelActual){
  //panelHeading
  var spanClick = boton.parentElement.parentElement;
  var returnValue = buscarPorId(boton.parentElement.parentElement.parentElement.id,nivelActual);

  document.getElementById('breadcrumbActual').textContent = "EDITAR NIVEL : "+spanClick.textContent;
  //Elementos Generales
  document.querySelector('#descripcion').style.display = 'block';
  document.querySelector('#descripcion input').value = spanClick.textContent;
  document.querySelector('#EsVigente').style.display = 'block';

  if(nivelActual == 'FILIAL') document.querySelector('#EsVigente input').checked = returnValue[2];
  if(nivelActual == 'LOCAL') document.querySelector('#EsVigente input').checked = returnValue[3];
  if(nivelActual == 'PABELLON') document.querySelector('#EsVigente input').checked = returnValue[3];
  //if(nivelActual == 'PISO') document.querySelector('#EsVigente input').checked = true;
  if(nivelActual == 'AMBIENTE') document.querySelector('#EsVigente input').checked = returnValue[9];


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

function buscarPorId(id,array){
  if(array == 'FILIAL') array = 'filiales';
  if(array == 'LOCAL') array = 'locales';
  if(array == 'PABELLON') array = 'pabellones';
  //if(array == 'PISO') array = 'pisos';
  if(array == 'AMBIENTE') array = 'ambientes';

  var analizeArray = window[array];
  for (var i = 0; i < analizeArray.length; i++) {
    if(analizeArray[i][0]+"" == id){
        return window[array][i];
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
}

function nuevo(){
  document.querySelector('#descripcion input').style.display = 'none';
  document.querySelector('#tipoAmbiente select').style.display = 'none';
  document.querySelector('#categoriaAmbiente select').style.display = 'none';
  document.querySelector('#tipoPiso select').style.display = 'none';
  document.querySelector('#EsVigente input').style.display = 'none';
}
