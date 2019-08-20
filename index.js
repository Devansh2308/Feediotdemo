 /*toggle menu functinality*/
function myFunction(x) {
  x.classList.toggle("change");
   
}
/* Secondary navigation bar property*/
function myFunctio() {
  var popup = document.getElementById("pop");
  popup.classList.toggle("show");
 }
//  ......................................................................................
//  ..............................FAQ.....................................................
//  ......................................................................................
function functiondd() {
  document.getElementById("answ").classList.toggle("change");
}
function functiondd2() {
  document.getElementById("answ2").classList.toggle("change");
}
function functiondd3() {
  document.getElementById("answ3").classList.toggle("change");
}
function functiondd4() {
  document.getElementById("answ4").classList.toggle("change");
}
function functiondd5() {
  document.getElementById("answ5").classList.toggle("change");
}
function functiondd6() {
  document.getElementById("answ6").classList.toggle("change");
}
function functiondd7() {
  document.getElementById("answ7").classList.toggle("change");
}
function functiondd8() {
  document.getElementById("answ8").classList.toggle("change");
}
function functiondd9() {
  document.getElementById("answ9").classList.toggle("change");
}
function functiondd10() {
  document.getElementById("answ10").classList.toggle("change");
}
function functiondd11() {
  document.getElementById("answ11").classList.toggle("change");
}
function functiondd12() {
  document.getElementById("answ12").classList.toggle("change");
}
function functiondd13() {
  document.getElementById("answ13").classList.toggle("change");
}
function functiondd14() {
  document.getElementById("answ14").classList.toggle("change");
}
function functiondd15() {
  document.getElementById("answ15").classList.toggle("change");
}
function functiondd16() {
  document.getElementById("answ16").classList.toggle("change");
}


window.onclick = function(event) {
  if (!event.target.matches('.sf')) {
    var dropdowns = document.getElementsByClassName("ans");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show1')) {
        openDropdown.classList.remove('show1');
      }
    }
  }
}
function myMap() {
var mapProp= {
  center:new google.maps.LatLng(51.508742,-0.120850),
  zoom:5,
};
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
/*..............................................................................................
...................................................................................................
.....................................CAROSEL.......................................................
.........................................................................................
........................................................................................*/


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}


