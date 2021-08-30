import {
    calcularCuadradoPerimetro,
    calcularCuadradoArea,
    calcularTrianguloPerimero,
    calcularTrianguloArea
} from './figuras-geometricas.js';

window.addEventListener('load', () => {

    //Cuadrado
    calcularCuadradoPerimetro();
    calcularCuadradoArea();

    //Triangulo
    calcularTrianguloPerimero();
    calcularTrianguloArea();

});