function calcularCuadradoPerimetro(){
    document.getElementById('btn_cuadrado_perimetro').addEventListener('click', () => {
        document.getElementById('resultadoCuadradoPerimetro').textContent = `
            Perimetro: ${Number(document.getElementById('ladosCuadrados').value) * 4} cm
        `;
    });     
}

function calcularCuadradoArea(){
    document.getElementById('btn_cuadrado_area').addEventListener('click', () => {
        document.getElementById('resultadoCuadradoPerimetro').innerHTML = `
            Area: ${Math.pow(document.getElementById('ladosCuadrados').value, 2)} cm<sup>2</sup>
        `;
    });
}

function calcularTrianguloPerimero(){

    let lado1 = document.getElementById('lado1Triangulo');
    let lado2 = document.getElementById('lado2Triangulo');
    let base = document.getElementById('baseTriangulo');
    let altura = document.getElementById('alturaTriangulo');

    document.getElementById('btn_triangulo_perimetro').addEventListener('click', () => {
        document.getElementById('resultadoTrianguloCuadrado').textContent = `
            Perimetro: ${Number(lado1.value) + Number(lado2.value) + Number(base.value)} cm
        `;
    });
}

function calcularTrianguloArea(){

    let base = document.getElementById('baseTriangulo');
    let altura = document.getElementById('alturaTriangulo');

    document.getElementById('btn_triangulo_area').addEventListener('click', () => {
        document.getElementById('resultadoTrianguloCuadrado').innerHTML = `
            Area: ${(Number(base.value) * Number(altura.value)) / 2 } cm<sup>2</sup>
        `;
    });

}

function calcularCirculoPerimetro(){
    document.getElementById('btn_circulo_perimetro').addEventListener('click', () => {
        document.getElementById('resultadoCirculo').textContent = `
            Perimetro: ${((Number(document.getElementById('radioCirculo').value) * 2) * Math.PI).toFixed(2)}
        `;
    });
}

function calcularCirculoArea(){
    document.getElementById('btn_circulo_Area').addEventListener('click', () => {
        document.getElementById('resultadoCirculo').textContent = `
            Area: ${(Math.pow(Number(document.getElementById('radioCirculo').value), 2) * Math.PI).toFixed(2)}
        `;
    });
}

function calcularAlturaIsosceles(){

    let lado1 = document.getElementById('lado1TrianguloIsosceles');
    let lado2 = document.getElementById('lado2TrianguloIsosceles');

    document.getElementById('btn_triangulo_isosceles').addEventListener('click', () => {

        if(validarIsosceles(lado1, lado2))
            return;
        document.getElementById('resultadoIsosceles').textContent = `
            Altura: ${(Math.sqrt((Math.pow(Number(lado1.value), 2)) - Math.pow((Number(lado2.value) / 2), 2))).toFixed(2)} cm
        `;
    });
}

function validarIsosceles(lado1, lado2){
    if(lado1.value != lado2.value){
        document.getElementById('resultadoIsosceles').textContent = "No es un triangulo Isósceles";
        return true;
    }else{
        return false;
    }
}

export {
    calcularCuadradoPerimetro,
    calcularCuadradoArea,
    calcularTrianguloPerimero,
    calcularTrianguloArea,
    calcularCirculoPerimetro,
    calcularCirculoArea,
    calcularAlturaIsosceles
}