//// for menu on small screen ////
const appearingSmallMenu = document.getElementById("--appearingSmallMenu");
const smallScMenuImg = document.getElementById("--smallScMenuImg");
const smallScMenu = document.getElementById("--smallScMenu");
const html = document.querySelector("html");

let isMenuVisible = false;
function toggleMenu() {
    if (isMenuVisible) {
        appearingSmallMenu.classList.remove('animate__animated', 'animate__fadeInRight');
        appearingSmallMenu.classList.add('animate__animated', 'animate__fadeOutRight');
        appearingSmallMenu.style.right = '-100%';
        smallScMenuImg.classList.remove('rotate180');
    } else {
        appearingSmallMenu.classList.remove('animate__animated', 'animate__fadeOutRight');
        appearingSmallMenu.classList.add('animate__animated', 'animate__fadeInRight');
        appearingSmallMenu.style.right = '0%';
        smallScMenuImg.classList.add('rotate180');
    }
    /* to close the menu when the user has scrolled */
    window.addEventListener('scroll', () => {
        appearingSmallMenu.style.right = '-100%';
        smallScMenuImg.classList.remove('rotate180');
        isMenuVisible = false;
    });
    
    isMenuVisible = !isMenuVisible;
}


//// about us - to expand the text ////
const hiddenText = document.getElementById('--HiddenText');
const threeDots = document.getElementById('--3Dots');

hiddenText.style.display = 'none';
threeDots.addEventListener('click', function() {
    if (hiddenText.style.display === 'none') {
        hiddenText.style.display = 'inline';
        threeDots.style.display = 'none';
        hiddenText.classList.add("animate__animated", "animate__fadeIn");
    } else {
        hiddenText.style.display = 'none';
    }
});


//// to trigger the animation when the user has reached the content - for businesses section | instagram pages section ////
function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

//// for counter - also there's another function in the below fucntion in fucntion ////😮
var countersInitialized = false;
function incrementCounter(elementId, targetValue) {
    let currentValue = 0;
    const targetElement = document.getElementById(elementId);

    function updateCounter() {
        currentValue++;
        targetElement.textContent = currentValue;

        if (currentValue < targetValue) {
            setTimeout(updateCounter, 100);
        } else {
            targetElement.textContent = targetValue;
        }
    }

    updateCounter();
}

function showElementsAnimation1() {
    /* sub businesses */
    var elements1 = document.getElementsByClassName("--animate-on-scroll");
    for (var i = 0; i < elements1.length; i++) {
        var element1 = elements1[i];
        if (isElementInViewport(element1)) {
            element1.classList.add("visible");
        }
    }

    /* instagram pages */
    var elements2 = document.getElementsByClassName("--profileImgs");
    for (var i = 0; i < elements2.length; i++) {
        var element2 = elements2[i];
        if (isElementInViewport(element2)) {
            element2.classList.add("visible", "animate__animated", "animate__fadeInLeft");
        }
    }

    var elements3 = document.getElementsByClassName("--profileContent");
    for (var i = 0; i < elements3.length; i++) {
        var element3 = elements3[i];
        if (isElementInViewport(element3)) {
            element3.classList.add("visible");
        }
    }

    /* go to top */
    var element4 = document.getElementById("--goTopImg");
    if (isElementInViewport(element4)) {
        element4.classList.add("visible", "animate__animated", "animate__slideInUp");
    }

    /* contact us */
    var element5 = document.getElementById("--contactUs1Div");
    if (isElementInViewport(element5)) {
        element5.classList.add("visible");
    }

    /* counter */
    var element6 = document.getElementById("--counterCon");
    if (isElementInViewport(element6) && !countersInitialized) {
        incrementCounter("--counter1", 20);
        incrementCounter("--counter2", 30);
        incrementCounter("--counter3", 50);
        incrementCounter("--counter4", 5);
        countersInitialized = true;
    }

}
window.addEventListener("scroll", showElementsAnimation1);
window.addEventListener("load", showElementsAnimation1);



//// to scroll to an specific element/container ////
function scrollToElement(elementId) {
    var targetElement = document.getElementById(elementId);
    if (targetElement) {
        window.scrollTo({ top: targetElement.offsetTop });
    }
}

