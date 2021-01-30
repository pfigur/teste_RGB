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
}



/*
//JS do Modal
let imagens= document.querySelectorAll('.miniatura'); //identifica quantas imagens temos
let modal = document.querySelector('.modal');
let modalImg = document.querySelector('#imgModal');
let btClose = document.querySelector('#close');
let srcVal="";

for(let i =0; i<imagens.length;i++){
    imagens[i].addEventListener('click',function(){
        srcVal = imagens[i].getAttribute("src");
        modalImg.setAttribute("src", srcVal);
        modal.classList.toggle("modal_active");
    });

}*/