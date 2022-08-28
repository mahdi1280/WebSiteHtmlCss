function showNav() {
    let menu = document.getElementById("mynav");
    if (menu.className === "mynav")
        menu.className += " responsive";
    else
        menu.className = "mynav"
}