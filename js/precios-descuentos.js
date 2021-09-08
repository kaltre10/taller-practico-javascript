function showTaller2(){
    //ocultamos el div contenedor del taller1
    document.querySelector('.taller1').style.display = 'none';
    document.querySelector('h3').textContent = 'Precios y descuentos';

    //quitamos y agregamos la clase active en el menu
    document.querySelector('.active').classList.remove('active');
    document.getElementById('btn-taller2').parentNode.classList.add('active');

    //mostramos el div del taller2
    document.querySelector('.taller2').style.display = 'flex';
}

function calcularDescuento(){
    document.getElementById('btn_descuento').addEventListener('click', () => {
        document.getElementById('resultadoDescuento').textContent = `
            Descuento: ${
                (Number(document.getElementById('precio').value) * 
                Number(document.getElementById('porcentaje').value) / 100 
                - Number(document.getElementById('precio').value)) * - 1
                //multiplicamos por (-1) para cambiar el resultado a positivo(+)
            }
        `;
    });
}

export {
    showTaller2,
    calcularDescuento
}