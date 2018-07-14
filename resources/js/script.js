$(document).ready(function(){
    $('.carousel').carousel();
    $('.slider').slider();
    $('.modal').modal();

    var array=document.getElementsByClassName('logoSlider');
    for(let i=0;i<array.length;i++){
      //  array[i].setAttribute('style','filter:blur(0px)');
    }
    
});

$('#bucuresti').click(function(e) {
  e.preventDefault();
$('body').css('overflow', 'hidden');
});

$('#bucuresti').click(function(e) {
  e.preventDefault();
$('body').css('overflow', 'auto');

});