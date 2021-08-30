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

export {
    calcularCuadradoPerimetro,
    calcularCuadradoArea,
    calcularTrianguloPerimero,
    calcularTrianguloArea
}