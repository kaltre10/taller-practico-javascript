function showTaller3(){
    //ocultamos el div contenedor de los demas talleres
    document.querySelector('.taller1').style.display = 'none';
    document.querySelector('.taller2').style.display = 'none';
    document.querySelector('.taller4').style.display = 'none';

    document.querySelector('h3').textContent = 'Promedio Media y Moda';

    //quitamos y agregamos la clase active en el menu
    document.querySelector('.active').classList.remove('active');
    document.getElementById('btn-taller3').parentNode.classList.add('active');

    //mostramos el div del taller3
    document.querySelector('.taller3').style.display = 'flex';

    //capturamos el click del boton calcular
    clickCalcular();

    //calculando Promedio
    calcularPromedio();

    //calculando Media
    calcularMedia();

    //calculando Moda
    calcularModa();

}

function calcularPromedio(){
    document.getElementById('btn_promedio').addEventListener('click', () => {
        addActive(document.getElementById('btn_promedio'));
    })
}

function calcularMedia(){
    document.getElementById('btn_media').addEventListener('click', () => {
        addActive(document.getElementById('btn_media'));
    })
}

function calcularModa(){
    document.getElementById('btn_moda').addEventListener('click', () => {
        addActive(document.getElementById('btn_moda'));
    })
}

function addActive(btn){
    //quitar active a btn
    let btns = document.querySelectorAll('.btn_taller3');
    btns.forEach( element => element.classList.remove('active'));
    //agregar active 
    btn.classList.add('active');
}

function clickCalcular(){
    document.getElementById('btn_calcular')
        .addEventListener('click', () => {
            let list = getList();
            let operacion = document.querySelector('.btn_container_taller3 .active');

            if(list.length <= 1 || operacion === null){
                document.getElementById('resultadoEstadisticas').textContent = 'Ingresar varios valores y operacion';
                return;
            }

            if(operacion.textContent === 'Promedio'){
                document.getElementById('resultadoEstadisticas').textContent = `Promedio: ${promedio(list)}`;
                return;
            }

            if(operacion.textContent === 'Media'){
                document.getElementById('resultadoEstadisticas').textContent = `Media: ${media(list)}`;
                return;
            }

            if(operacion.textContent === 'Moda'){
                document.getElementById('resultadoEstadisticas').textContent = `Moda: ${moda(list)}`;
                return;
            }

        })
}

function promedio(list){
    return (list.reduce((acum, value) => Number(acum) + Number(value)) / list.length).toFixed(1);
}

function media(list){
    //verificamos si la lista es par
    let isPar = list.length % 2;
    let index = Math.floor(list.length / 2);

    if(isPar === 0){
        return (list[index] + list[index - 1]) / 2;
    }else{
        return list[index];
    }
}

function moda(list){
    //contamos las veces que se repite cada valor y creamos un objeto
    let amound = {};
    
    list.forEach(element => {
        if(amound[element] === undefined){
            amound = { ...amound, [element]: 1 };
        }else{
            amound = { ...amound, [element]: amound[element] + 1 };
        }
    });

    //recorremos el objeto creado y verificamos el valor mas alto
    let array = [];

    for (let key in amound) {
        if (Object.hasOwnProperty.call(amound, key)) {
            array = [ ...array, { [key]: amound[key]}];
        }
    }

    let moda;
    let valor = null;
    array.forEach((key, value) => {

        if(!valor){
            moda = Object.keys(key)[0];
            valor = key[Object.keys(key)]
        }

        if(valor < key[Object.keys(key)]){
            valor = key[Object.keys(key)];
            moda = Object.keys(key)[0];
        }
        
    })
    return moda;
}   

function getList(){
    let input = document.getElementById('lista').value;
    let list = input.split(',').map(value => {
        return Number(value);
    });
    return list.sort((a, b) => a - b);
}

export {
    showTaller3
}