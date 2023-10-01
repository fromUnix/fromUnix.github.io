///////////////////////////////////////////// light/dark mode ////////////////////////////////////////////////////
var elementDBody = document.getElementById("Dbody");
var elementDHtml = document.getElementById("Dhtml");

// Make it light if it's the main page (index) is black, checks the local storage
if (localStorage.getItem('isDarkMode') === 'false') {
    elementDBody.classList.remove("dark-mode");
    elementDHtml.classList.remove("dark-mode");
} 

function lightMode() {
    if (localStorage.getItem('isDarkMode') === 'false') {
        // if the dark mode is off, turn it on and set 'true' on local storage
        elementDBody.classList.add("dark-mode");
        elementDHtml.classList.add("dark-mode");

        localStorage.setItem('isDarkMode', true);
    } else {
        // otherwise remove dark mode and set 'false' on local storage
        elementDBody.classList.remove("dark-mode");
        elementDHtml.classList.remove("dark-mode");

        localStorage.setItem('isDarkMode', false);
    }
}