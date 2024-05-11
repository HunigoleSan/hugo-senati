import { dataServices } from "./data_services.js";

function cardServices(nombre,img){
    const SERVICES_CARD_HTML = document.querySelector(".servicios_cards");
    let card = `
        <div class='capa'>
            <article class='card'>
            <img class='card_img' src='../../../public/img/${img}' alt='${nombre}'>
            <p class='card_title'>${nombre}</p>
            </article>
        </div>
    `;
    SERVICES_CARD_HTML.insertAdjacentHTML("beforeend",card)
}

function showCardServices(array){
    for (const key in array) {
        cardServices(array[key].nombre,array[key].img);
    }
}

showCardServices(dataServices);