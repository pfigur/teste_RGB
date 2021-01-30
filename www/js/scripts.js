function bgChange(el) {
    var elem = document.createElement("img");
    elem.setAttribute("src", "../IMG/img"+el+".jpg");
    elem.setAttribute("height", "300");
    elem.setAttribute("width", "300");
    elem.setAttribute("class", "miniatura");
    document.getElementById(el).appendChild(elem);

}