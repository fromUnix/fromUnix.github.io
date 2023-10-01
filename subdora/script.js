///////////////////////////////////////////// light/dark mode ////////////////////////////////////////////////////
var elementBody = document.getElementById("body");
var elementHtml = document.getElementById("html");
var elementNav = document.getElementById("nav");
var elementTypeEffect = document.getElementById("type_effect");
var elementNavLiA = document.querySelectorAll("[id='nav-li-a']");
var elementDropDownMenuSmallScreen = document.getElementById("dropdown-menu");
var elementModalForms = document.querySelectorAll("[id='modal-contenttext']");



function lightMode() {
    // Make it light if it's black
    if (elementBody.classList.contains("dark-mode") || elementHtml.classList.contains("dark-mode")) {
        elementBody.classList.remove("dark-mode");
        elementHtml.classList.remove("dark-mode");
        elementNav.classList.remove("dark-mode");
        elementNav.classList.add("light-mode");
        elementTypeEffect.style.color = "black";
        for (var i = 0; i < elementNavLiA.length; i++) {
            elementNavLiA[i].setAttribute("style", "color:black !important");
        }
        elementDropDownMenuSmallScreen.classList.remove("dark-mode");
        for (var i = 0; i < elementModalForms.length; i++) {
            elementModalForms[i].classList.remove("dark-mode");
        }
        
        localStorage.setItem('isDarkMode', false);
    // Make it black if it's light
    } else {
        elementBody.classList.add("dark-mode");
        elementHtml.classList.add("dark-mode");
        elementNav.classList.add("dark-mode");
        elementNav.classList.remove("light-mode");
        elementTypeEffect.style.color = "white";
        for (var i = 0; i < elementNavLiA.length; i++) {
            elementNavLiA[i].style.color = "white";
        }
        elementDropDownMenuSmallScreen.classList.add("dark-mode");
        for (var i = 0; i < elementModalForms.length; i++) {
            elementModalForms[i].classList.add("dark-mode");
        }

        localStorage.setItem('isDarkMode', true);
    }
}

////// check the local storage for modes //////
document.addEventListener("DOMContentLoaded", function() {
    if (localStorage.getItem('isDarkMode') === 'false') {
        elementBody.classList.remove("dark-mode");
        elementHtml.classList.remove("dark-mode");
        elementNav.classList.remove("dark-mode");
        elementNav.classList.add("light-mode");
        elementTypeEffect.style.color = "black";
        for (var i = 0; i < elementNavLiA.length; i++) {
            elementNavLiA[i].setAttribute('style', 'color:black !important');
        }
        elementDropDownMenuSmallScreen.classList.remove("dark-mode");
        for (var i = 0; i < elementModalForms.length; i++) {
            elementModalForms[i].classList.remove("dark-mode");
        }

    } else {
        elementBody.classList.add("dark-mode");
        elementHtml.classList.add("dark-mode");
        elementNav.classList.add("dark-mode");
        elementNav.classList.remove("light-mode");
        elementTypeEffect.style.color = "white";
        for (var i = 0; i < elementNavLiA.length; i++) {
            elementNavLiA[i].setAttribute('style', 'color:white !important');
        }
        elementDropDownMenuSmallScreen.classList.add("dark-mode");
        for (var i = 0; i < elementModalForms.length; i++) {
            elementModalForms[i].classList.add("dark-mode");
        }
    }    
});




///////////////////////////////////////////// GO to top ////////////////////////////////////////////////////
var elementGoToTop = document.getElementById("go-top-div");

$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 700) {
      $('#go-top-div').fadeIn();
    } else {
      $('#go-top-div').fadeOut();
    }
});