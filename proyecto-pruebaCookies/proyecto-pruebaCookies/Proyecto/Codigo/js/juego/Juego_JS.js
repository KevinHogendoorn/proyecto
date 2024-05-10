const totalCartas = 12;
const imagenes = [
    '../../img/juego/jugador1.jpeg', 
    '../../img/juego/jugador2.jpeg', 
    '../../img/juego/jugador3.jpeg', 
    '../../img/juego/jugador4.jpeg', 
    '../../img/juego/jugador5.jpeg', 
    '../../img/juego/jugador6.jpeg'
];
let cartas = [];
let seleccionarCartas = [];
let valoresUsados = [];
let movimiento = 0;
let numIntentos = 0;
let cont = 0;

let plantilla = '<div class="carta"><div class="parteAtras"></div><div class="parteAlante"></div></div>'

function activate(e){
    if (cont <= 5){
        if (movimiento < 2){
            e.target.classList.add('active');
    
            if (!seleccionarCartas[0] || seleccionarCartas[0] !== e.target) {
                seleccionarCartas.push(e.target);
                if (++movimiento == 2) {
                    numIntentos++;
                    if (numIntentos == 1){
                        document.querySelector('#numClicks').innerHTML = numIntentos + ' intento';
                    } else if (numIntentos > 1) {
                        document.querySelector('#numClicks').innerHTML = numIntentos + ' intentos';
                    }
                    
                    if (seleccionarCartas[0].querySelectorAll('.parteAlante')[0].innerHTML == seleccionarCartas[1].querySelectorAll('.parteAlante')[0].innerHTML){
                        seleccionarCartas = [];
                        movimiento = 0;
                        cont++;
                    } else {
                        setTimeout(() =>{
                            seleccionarCartas[0].classList.remove('active');
                            seleccionarCartas[1].classList.remove('active');
                            seleccionarCartas = [];
                            movimiento = 0;
                        }, 800);
    
                    }
                }
            }
        }
    } else {
        document.querySelector('#numClicks').innerHTML = 'HAS GANADO CON ' + numIntentos + ' INTENTOS';
    }
    
}

function valorRandom(){
    let random = Math.floor(Math.random() * totalCartas * 0.5);
    let valores = valoresUsados.filter(valores => valores === random);
    if (valores.length < 2) {
        valoresUsados.push(random);
    } else {
        valorRandom();
    }
}

for (let i = 0; i < totalCartas; i++){
    let contenido = document.createElement('contenido'); 
    contenido.innerHTML = plantilla; 
    cartas.push(contenido);
    document.querySelector('#juego').append(cartas[i]);
    valorRandom();
    cartas[i].querySelectorAll('.parteAlante')[0].innerHTML = `<img src = "../../img/juego/jugador${valoresUsados[i]}.jpeg" class="carta">`;
    cartas[i].querySelectorAll('.carta')[0].addEventListener('click', activate);
}