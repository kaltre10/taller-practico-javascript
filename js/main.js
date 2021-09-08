import {
    calcularCuadradoPerimetro,
    calcularCuadradoArea,
    calcularTrianguloPerimero,
    calcularTrianguloArea,
    calcularCirculoPerimetro,
    calcularCirculoArea,
    calcularAlturaIsosceles,
    showTaller1
} from './figuras-geometricas.js';

import {
    showTaller2,
    calcularDescuento
} from './precios-descuentos.js';

window.addEventListener('load', () => {

    let btnTaller1 = document.getElementById('btn-taller1');
    let btnTaller2 = document.getElementById('btn-taller2');

    btnTaller1.addEventListener('click', () => showTaller1());

    taller1();

    btnTaller2.addEventListener('click', () => showTaller2());

    taller2();

});

function taller1(){
    //Cuadrado
    calcularCuadradoPerimetro();
    calcularCuadradoArea();

    //Triangulo
    calcularTrianguloPerimero();
    calcularTrianguloArea();

    //Circulo
    calcularCirculoPerimetro();
    calcularCirculoArea();

    //Triangulo Isosceles
    calcularAlturaIsosceles();
}

function taller2(){
    //calculando precios y descuentos
    calcularDescuento();
}