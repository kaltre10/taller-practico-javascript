import {
    calcularCuadradoPerimetro,
    calcularCuadradoArea,
    calcularTrianguloPerimero,
    calcularTrianguloArea,
    calcularCirculoPerimetro,
    calcularCirculoArea,
    calcularAlturaIsosceles
} from './figuras-geometricas.js';

window.addEventListener('load', () => {

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

});