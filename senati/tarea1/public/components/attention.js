import { dataAttention } from "./data_attention.js";

function cardAttention(nombre,img,fill){
    const ATTENTION_CARD_HTML = document.querySelector(".atencion_cards");
    let card = `
        <article class="card">
            <img src="../../../public/img/${img}" alt="${nombre}">
            <div class="valla">
                <svg class="vector-1" width="270" height="137" viewBox="0 0 270 137" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_11_338)">
                        <path d="M0 137V61.5V0.5L270 64.5V137H0Z" fill="${fill}" />
                    </g>
                    <defs>
                        <filter id="filter0_d_11_338" x="-20" y="-34.5" width="310" height="176.5"
                            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="-15" />
                            <feGaussianBlur stdDeviation="10" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix"
                                values="0 0 0 0 0.14902 0 0 0 0 0.196078 0 0 0 0 0.25098 0 0 0 0.15 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix"
                                result="effect1_dropShadow_11_338" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_11_338"
                                result="shape" />
                        </filter>
                    </defs>
                </svg>
                <p class="valla_title">${nombre}</p>
            </div>
        </article>
    `;
    ATTENTION_CARD_HTML.insertAdjacentHTML("beforeend",card)
}

function showCardAttention(array){
    for (const key in array) {
        cardAttention(array[key].nombre,array[key].img,array[key].fill);
    }
}
showCardAttention(dataAttention);