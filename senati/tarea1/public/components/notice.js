import { dataNotice } from "./data_notice.js";

function cardNotice(nombre,img){
    const MURO_CARD_HTML = document.querySelector(".muro");
    let card = `
        <article class="card">
            <img class="card_img" src="../../../public/img/${img}" alt="${nombre}">
            <p class="card_title">${nombre}</p>
        </article>
    `;
    MURO_CARD_HTML.insertAdjacentHTML("beforeend",card)
}

function showCardNotice(array){
    for (let index = 0; index < 8; index++) {
        let indexRandom = Math.floor(Math.random() * 4)
        cardNotice(array[indexRandom].nombre,array[indexRandom].img);
    }
}

showCardNotice(dataNotice);