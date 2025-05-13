const navbarwrapper = document.getElementById("navbar-wrapper")
navbarwrapper.innerHTML = `
            <div class="nav-left">
                <a href="index.html" id="nav-left-logo"><img src="media/logo.svg"></a>
                <a href="index.html" id="nav-left-text">Bankbygget Sola</a>
            </div>
            <div class="nav-right" id="nav-right">
                <a href="index.html">Hjem</a>
                <a href="lokaler.html">Ledige lokaler</a>
                <a href="leietakere.html">Våre leietakere</a>
                <a href="kontakt.html">Kontakt</a>
            </div>
            <div class="nav-icon">
                <a href="javascript:void(0);" class="nav-icon" id="nav-icon" onclick="toggleDropdownMenu()">☰</a>
            </div>
`

const menu = document.getElementById("nav-right");
const icon = document.getElementById("nav-icon");

let menuIsHidden = false;
function toggleDropdownMenu() {
    menuIsHidden = !menuIsHidden;
    if (menuIsHidden) {
        menu.style.visibility = "visible";
        icon.textContent = "x"
    } else {
        menu.style.visibility = "hidden";
        icon.textContent = "☰"
    }
}