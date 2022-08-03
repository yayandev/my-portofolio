function openSideBar() {
    let sidebar = document.getElementById("side-bar");
    let btnOpen = document.getElementById("btn-nav");
    let btnClose = document.getElementById("close-nav");

    sidebar.setAttribute("style", "");
    btnOpen.setAttribute("style", "display:none;");
    btnClose.setAttribute("style", "");
}

function closeSideBar() {
    let sidebar = document.getElementById("side-bar");
    let btnOpen = document.getElementById("btn-nav");
    let btnClose = document.getElementById("close-nav");

    sidebar.setAttribute("style", "display:none;");
    btnClose.setAttribute("style", "display:none;");
    btnOpen.setAttribute("style", "");
}