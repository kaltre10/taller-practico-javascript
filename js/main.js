import { showTaller1 } from './figuras-geometricas.js';
import { showTaller2 } from './precios-descuentos.js';
import { showTaller3 } from './promedio-media-moda.js';

window.addEventListener('load', () => {

    let btnTaller1 = document.getElementById('btn-taller1');
    let btnTaller2 = document.getElementById('btn-taller2');
    let btnTaller3 = document.getElementById('btn-taller3');

    btnTaller1.addEventListener('click', () => showTaller1());

    btnTaller2.addEventListener('click', () => showTaller2());

    btnTaller3.addEventListener('click', () => showTaller3());

});