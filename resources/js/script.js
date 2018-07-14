$(document).ready(function(){
    $('.carousel').carousel();
    $('.slider').slider();
    $('.modal').modal();

    var array=document.getElementsByClassName('logoSlider');
    for(let i=0;i<array.length;i++){
      //  array[i].setAttribute('style','filter:blur(0px)');
    }
    
});

function initMap(){
  var map = new google.maps.Map(document.getElementById('googleMap'), {
    gestureHandling:'none',
    zoomControl:false
  });
}