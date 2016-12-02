var spanS = document.querySelectorAll(".tree span");
for (var i = 0; i < spanS.length; i++) {
  if(spanS[i].nextSibling){
      if(spanS[i].nextSibling.nextSibling && i != 0){
        spanS[i].nextSibling.nextSibling.style.display = 'none';
      }
  }
  spanS[i].addEventListener('click',function (evt) {
    var Elemento = ((evt.target.tagName == 'SMALL')?evt.target.parentElement.nextSibling:evt.target.nextSibling);
    if(Elemento){
      if(Elemento.nextSibling){
          if(Elemento.nextSibling.style.display == 'none'){
              Elemento.nextSibling.style.display = 'block';
          }else{
              Elemento.nextSibling.style.display = 'none';
          }
      }
    }
  });
}
