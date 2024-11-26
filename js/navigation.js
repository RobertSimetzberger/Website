// Switch Site
function goToSite(url) {
    window.location.assign(url);
    changeUnderline();
}

// Set underline for menu sites
const allMenuSites = document.querySelectorAll(".item");
function changeUnderline() {
    // get current URL
    const currentURL = window.location.pathname.split("/").pop()
    for (let i = 0; i < allMenuSites.length; i++) {
        if (allMenuSites[i].getAttribute("id") == currentURL) {
            allMenuSites[i].classList.add("active-item");
        }
    }
    // Change underlined menu site also when in projects of portfolio
    if (currentURL.includes("project")) {
    document.getElementById("portfolio.html").classList.add("active-item");
    console.log("hh")
    }
}   

// Show projects on mouseover
function showProjects() {
    document.getElementById("projectbar").classList.add("show-projectbar");
    document.getElementById("projectbar").classList.remove("hide-projectbar");
}
function hideProjects() {
    document.getElementById("projectbar").classList.add("hide-projectbar");
    document.getElementById("projectbar").classList.remove("show-projectbar");
}

// set Layout for AboutMe and Scrollbar/Arrows
function setLayoutAboutMe() {
    const aboutMe = document.querySelector(".AboutMe");
    const previousItem = document.querySelector(".home-content");
    // Check if both exist already
    if (!aboutMe || !previousItem) {
        return;
    }
    const previousItemBottom = previousItem.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;
    if (windowHeight>previousItemBottom) {
        aboutMe.style.top = windowHeight-previousItemBottom+"px";
        console.log(windowHeight,"h",previousItemBottom)
    }
}

// make down scroller visible/invisible
function onScroll() {
    const downScroller = document.querySelector(".down-scroller");
    const aboutMe = document.querySelector(".AboutMe");
    if (!aboutMe || !downScroller) {
        return;
    }
    const aboutMe_offsetTop = aboutMe.getBoundingClientRect().top;
    if (aboutMe_offsetTop+50 < window.innerHeight) {
        downScroller.style.visibility = "hidden";
    }
    else {
        downScroller.style.visibility = "visible";
    }
}

// Set the layout for the menu container so that the container changes on resize
function setLayoutMenuContainer () {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1000) {
        const menu_container = document.querySelector(".menu-container");
        if (!menu_container) {
            return;
        }
        const menu_container_height = menu_container.offsetHeight;
        document.body.style.paddingTop = menu_container_height+"px";
    }
    // set the layout for screen sizes < 1000px
    else {
        const haburger_menu_container = document.querySelector(".hamburger-menu-container");
        if (!haburger_menu_container) {
            return;
        }
        const hamburger_menu_container_height = haburger_menu_container.offsetHeight;
        document.body.style.paddingTop = hamburger_menu_container_height+"px";
    }
}

// handle hamburger menu displaying
function handleMenu() {
    const hamburgerItems = document.querySelector(".hamburger-items");
    if (!hamburgerItems) {
        return;
    }
    else {
        if (hamburgerItems.classList.contains("hidden")) {
            hamburgerItems.classList.remove("hidden");
        }
        else {
            hamburgerItems.classList.add("hidden");
        }
    }
}

// change Menu color on click
function changeMenuColor() {
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    hamburgerMenu.style.color = "aliceblue";
    setTimeout(()=> {
        hamburgerMenu.style.color = "#666666";
    }, 300)
}

// eventlistener for the hamburger menu
function initializeHamburgerMenu () {
    const hamburgerMenu = document.querySelector(".hamburger-menu.lines");
    const hamburgerItems = document.querySelector(".item");
    if (!hamburgerMenu || !hamburgerItems) {
        return
    }
    hamburgerMenu.addEventListener("click", changeMenuColor);
    hamburgerMenu.addEventListener("click", handleMenu);
    hamburgerItems.addEventListener("click", handleMenu);
}

// handle events
window.addEventListener("resize", setLayoutAboutMe)
window.addEventListener("resize", setLayoutMenuContainer)
window.addEventListener("resize", onScroll)
window.addEventListener("scroll", onScroll)
document.addEventListener("DOMContentLoaded", setLayoutAboutMe)
document.addEventListener("DOMContentLoaded", setLayoutMenuContainer) 
document.addEventListener("DOMContentLoaded", changeUnderline) 
initializeHamburgerMenu();