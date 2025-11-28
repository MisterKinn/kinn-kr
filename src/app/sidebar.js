function openMenu() {
    document.querySelector(".sidebar").style.width = "250px";
    document.querySelector(".openbtn").style.display = "none";
    document.querySelector(".sidebar-content").style.display = "block";
}

function closeMenu() {
    document.querySelector(".sidebar").style.width = "0";
    document.querySelector(".openbtn").style.display = "block";
    document.querySelector(".sidebar-content").style.display = "none";
}

export { openMenu, closeMenu };
