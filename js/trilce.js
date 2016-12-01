var spanS = document.querySelectorAll(".tree span");
console.info(spanS);
for (var i = 0; i < spanS.length; i++) {
  if(spanS[i].nextSibling){
    spanS[i].nextSibling.nextSibling.style.display = 'none';
  }
  spanS[i].addEventListener('click',function (evt) {
    var Elemento = ((evt.target.tagName == 'SMALL')?evt.target.parentElement.nextSibling:evt.target.nextSibling);
    if(Elemento){
      if(Elemento.nextSibling.style.display == 'none'){
          Elemento.nextSibling.style.display = 'block';
      }else{
          Elemento.nextSibling.style.display = 'none';
      }
    }
  });
}
