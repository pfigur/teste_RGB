function bgChange(el) {
    var elem = document.createElement("img");
    elem.setAttribute("src", "../IMG/img"+el+".jpg");
    elem.setAttribute("height", "300");
    elem.setAttribute("width", "300");
    elem.setAttribute("class", "miniatura");
    /*elem.addEventListener('click', function(){
        this.setAttribute("class", "modal_content");
    });*/
    document.getElementById(el).appendChild(elem);
}

window.onload = function(){
    let imagens = document.querySelectorAll('.miniatura'); //identifica quantas imagens temos
    console.log(imagens)

    for (let i = 0; i < imagens.length; i++) {
        imagens[i].addEventListener('click', function () {
           console.log("Clicou em"+imagens[i].getAttribute("id"))
        });
    }
}



/*
window.onload = function(){
    let imagens = document.querySelectorAll('.miniatura'); //identifica quantas imagens temos
    let modal = document.querySelector('.modal');
    let modalImg = document.querySelector('#imgModal');
    let btClose = document.querySelector('#close');
    let srcVal = "";

    for (let i = 0; i < imagens.length; i++) {
        imagens[i].addEventListener('click', function () {
            srcVal = imagens[i].getAttribute("src");
            modalImg.setAttribute("src", srcVal);
            modal.classList.toggle("modal_active");
        });

    }
}*/