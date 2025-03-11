let numeroSecreto=0;
let intentos=0;
let listasNumerosSorteados=[];
let numeroMaximo=10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento,texto){
    let elementoHTML= document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;

}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
   
    if (numeroDeUsuario===numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos===1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        if (numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');
            } else {
                asignarTextoElemento('p','El número secreto es mayor');
            }
            intentos++;
            limpiarCaja();
        }
        return;

    }

    function limpiarCaja(){
        document.querySelector('#valorUsuario').value='';
        
    }

function generarNumeroSereto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listasNumerosSorteados);
    if (listasNumerosSorteados.length===numeroMaximo){
        asignarTextoElemento('p','Se han agotado los intentos');
    }else{    //Si el numero generado esta incluido en la lista
        if (listasNumerosSorteados.includes(numeroGenerado)){
            //Volver a generar el numero
            return generarNumeroSereto();
        } else {
            //Agregar el numero a la lista
            listasNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }    
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del Número Secreto ');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSereto();
    intentos=1;
}

function reiniciarJuego(){
    //Limpiar caja
    limpiarCaja();
    // Indicar mensaje de intervalos de numeros
    condicionesIniciales(); 
    // Generar numero aleatorio
     //Desabilitar boton reiniciar
     //reiniciar el numero de intentos
     document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();