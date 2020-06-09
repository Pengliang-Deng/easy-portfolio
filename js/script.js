// using offset of Y direction to change the background color of the navigation bar
var nav = document.getElementById("main-nav");

window.addEventListener("scroll", function(){
    let offset = window.pageYOffset;
    nav.style.background = "rgba(255, 255, 255," + offset* 0.002 + ")";
    nav.style.borderBottomColor = "rgba(236, 236, 236," + offset * 0.002+ ")";
})


// toggle content
var counterA = 1;
var counterB = 1;
var counterC = 1;

$(document).ready(function() {
    $("#toggle-A").click(function() {
        $("#hidden-A").slideToggle("fast");
        if (counterA % 2 == 1) {
            $("#toggle-A").text("SHOW LESS");
        } else {
            $("#toggle-A").text("SHOW MORE");
        }
        counterA++;
      });

      $("#toggle-B").click(function() {
        $("#hidden-B").slideToggle("fast");
        if (counterB % 2 == 1) {
            $("#toggle-B").text("SHOW LESS");
        } else {
            $("#toggle-B").text("SHOW MORE");
        }
        counterB++;
      });

      $("#toggle-C").click(function() {
        $("#hidden-C").slideToggle("fast");
        if (counterC % 2 == 1) {
            $("#toggle-C").text("SHOW LESS");
        } else {
            $("#toggle-C").text("SHOW MORE");
        }
        counterC++;
      });
})



