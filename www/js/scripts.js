function bgChange(el) {
    var elem = document.createElement("img");
    elem.setAttribute("src", "../IMG/img"+el+".jpg");
    elem.setAttribute("height", "300");
    elem.setAttribute("width", "300");
    elem.setAttribute("class", "miniatura miniHover");
    /*elem.addEventListener('click', function(){
        this.setAttribute("class", "modal_content");
    });*/
    document.getElementById(el).appendChild(elem);
}

window.onload = function(){
    let imagens = document.querySelectorAll('.miniatura'); //identifica quantas imagens temos
    let chngModal = document.querySelector('#modalWindow');
    let fundo = document.getElementById('fundo');

    console.log(imagens)

    for (let i = 0; i < imagens.length; i++) {
        imagens[i].addEventListener('click', function () {
            console.log("Clicou em"+imagens[i].getAttribute("id"));
            chngModal.setAttribute("src", "../IMG/img"+i+".jpg");
            fundo.style.opacity="0.3";
        });
    }
}

function getReady(){
    fundo.;
}