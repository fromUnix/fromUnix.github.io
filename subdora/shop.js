///////////////////////////////////////////// light/dark mode ////////////////////////////////////////////////////
var elementSHbody = document.getElementById("SHbody");
var elementSHhtml = document.getElementById("SHhtml");


// Make it light if it's the main page (index) is black, checks the local storage
if (localStorage.getItem('isDarkMode') === 'false') {
    elementSHbody.classList.remove("dark-mode");
    elementSHhtml.classList.remove("dark-mode");
} 

function lightMode() {
    if (localStorage.getItem('isDarkMode') === 'false') {
        // if the dark mode is off, turn it on and set 'true' on local storage
        elementSHbody.classList.add("dark-mode");
        elementSHhtml.classList.add("dark-mode");

        localStorage.setItem('isDarkMode', true);
    } else {
        // otherwise remove dark mode and set 'false' on local storage
        elementSHbody.classList.remove("dark-mode");
        elementSHhtml.classList.remove("dark-mode");

        localStorage.setItem('isDarkMode', false);
    }
}


///////////////////////////////////////////////////// Aside navbar ////////////////////////////////////////////////////
var elementAsideNav = document.getElementById("div-aside-menu");

function showAsideNav() {
    if (elementAsideNav.style.display === "none") {
        elementAsideNav.setAttribute("style", "display: block !important");
        elementAsideNav.style.position = "absolute";
        elementAsideNav.style.zIndex = "1";
    } else {
        elementAsideNav.style.display = "none";
    }
}