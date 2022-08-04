// start navbar
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

// end navbar


function animateAbout() {
    let about = document.getElementById("about");
    about.setAttribute("style", "");
 }


 function animateCertificate() {
    let certificate = document.getElementById("certificate");
    certificate.setAttribute("style", "");
 }


 function animateContact() {
    let contact = document.getElementById("contact");
    contact.setAttribute("style", "none");
 }

