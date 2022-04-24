const main = document.querySelector("main");
const imagenJ = document.querySelector(".imagen-juego");
const siguienteE = document.querySelectorAll(".jugar-E");
const casillasCartas = document.querySelector(".casillas-cartas");
const carta1 = document.querySelector(".carta-1");
const carta2 = document.querySelector(".carta-2");
const carta3 = document.querySelector(".carta-3");
const carta4 = document.querySelector(".carta-4");
const carta5 = document.querySelector(".carta-5");
const carta6 = document.querySelector(".carta-6");
const carta7 = document.querySelector(".carta-7");
const carta8 = document.querySelector(".carta-8");
const carta9 = document.querySelector(".carta-9");
const carta10 = document.querySelector(".carta-10");
const carta11 = document.querySelector(".carta-11");
const carta12 = document.querySelector(".carta-12");
const carta13 = document.querySelector(".carta-13");
const carta14 = document.querySelector(".carta-14");
const carta15 = document.querySelector(".carta-15");
const carta16 = document.querySelector(".carta-16");
const puntaje1 = document.querySelector(".puntaje1 p");
const puntaje2 = document.querySelector(".puntaje2 p");
let orden = [];//Tendra el orden de las cartas
let cartas = [
"../../img/P1.png",
"../../img/R1.png",
"../../img/P2.png",
"../../img/R2.png",
"../../img/P3.png",
"../../img/R3.png",
"../../img/P4.png",
"../../img/R4.png",
"../../img/P5.png",
"../../img/R5.png",
"../../img/P6.png",
"../../img/R6.png",
"../../img/P7.png",
"../../img/R7.png",
"../../img/P8.png",
"../../img/R8.png"
];
let cartasElegidas = 0;
let cartasElegidasJugando=[];
let posicionImg;
let cartasDesabilitadas =[];//Se colocaran las cartas desabilitadas
let posicionesTapar =[];
let seTaparonTodas=true;
let noJugada =0;
let puntj1 =0;
let puntj2 =0;

/*Paginas*/
if(main.classList.contains("index")){
    imagenJ.addEventListener("click",()=>{
        window.location.href = "pages/memorama/elJuego.html";
    });
}else if(main.classList.contains("elJuego")){
        siguienteE[0].addEventListener("click",()=>{
        window.location.href = "dificultad.html";
        jugarAmigoComputadora=1;
        });
        siguienteE[1].addEventListener("click",()=>{
        window.location.href = "dificultad.html";
        jugarAmigoComputadora=2;
        });
}else if(main.classList.contains("dificultad")){
    siguienteE[0].addEventListener("click",()=>{
        window.location.href = "juego.html";
    });
    siguienteE[1].addEventListener("click",()=>{
        window.location.href = "juego.html";
    });
    siguienteE[2].addEventListener("click",()=>{
        window.location.href = "juego.html";
    });
    siguienteE[3].addEventListener("click",()=>{
        window.location.href = "juego.html";
    });
    siguienteE[4].addEventListener("click",()=>{
        window.location.href = "juego.html";
    });
}else if(main.classList.contains("juego")){
    eventosJuego();
}

/*Eventos del juego*/
function eventosJuego(){
    llenadoCartas();
    carta1.addEventListener("click", ()=>{
        posicionImg=0;
        if(verificarCartaDesabilitada(orden[posicionImg]) !==true && seTaparonTodas){
            if(carta1.classList.contains("carta-bolteada")){
                carta1.classList.remove("carta-bolteada");
                carta1.firstElementChild.firstElementChild.src = "../../img/PI.png";
                quitarCarta(orden[posicionImg]);
                console.log(cartasElegidasJugando);
                restablecerValor();
                eliminarIDintentoUno(1);
            }else if(validacionBoltearCarta()){
                carta1.classList.add("carta-bolteada");
                carta1.firstElementChild.firstElementChild.src = cartas[orden[0]];
                agregarCarta(orden[posicionImg]);
                console.log(cartasElegidasJugando);
                validacion(1);
            }
        }
    });

    carta2.addEventListener("click", ()=>{
        posicionImg=1;
        
        if(verificarCartaDesabilitada(orden[posicionImg]) !==true && seTaparonTodas){
            if(carta2.classList.contains("carta-bolteada")){
                carta2.classList.remove("carta-bolteada");
                carta2.firstElementChild.firstElementChild.src = "../../img/PI.png";
                quitarCarta(orden[posicionImg]);
                console.log(cartasElegidasJugando);
                restablecerValor();
                eliminarIDintentoUno(2);
            }else if(validacionBoltearCarta()){
                carta2.classList.add("carta-bolteada");
                agregarCarta(orden[posicionImg]);
                console.log(cartasElegidasJugando);
                carta2.firstElementChild.firstElementChild.src = cartas[orden[1]];
                validacion(2);
            }
        }
    });

    carta3.addEventListener("click", ()=>{
        posicionImg=2;
        if(verificarCartaDesabilitada(orden[posicionImg]) !==true && seTaparonTodas){
            if(carta3.classList.contains("carta-bolteada")){
                carta3.classList.remove("carta-bolteada");
                carta3.firstElementChild.firstElementChild.src = "../../img/PI.png";
                quitarCarta(orden[posicionImg]);
                console.log(cartasElegidasJugando);
                restablecerValor();
                eliminarIDintentoUno(3);
            }else if(validacionBoltearCarta()){
                carta3.classList.add("carta-bolteada");
                agregarCarta(orden[posicionImg]);
                console.log(cartasElegidasJugando);
                carta3.firstElementChild.firstElementChild.src = cartas[orden[2]];
                validacion(3);
            }
        }
    });

    carta4.addEventListener("click", ()=>{
        posicionImg=3;
        if(verificarCartaDesabilitada(orden[posicionImg]) !==true && seTaparonTodas){
            if(carta4.classList.contains("carta-bolteada")){
                carta4.classList.remove("carta-bolteada");
                carta4.firstElementChild.firstElementChild.src = "../../img/PI.png";
                quitarCarta(orden[posicionImg]);
                console.log(cartasElegidasJugando);
                restablecerValor();
                eliminarIDintentoUno(4);
            }else if(validacionBoltearCarta()){
                carta4.classList.add("carta-bolteada");
                agregarCarta(orden[posicionImg]);
                console.log(cartasElegidasJugando);
                carta4.firstElementChild.firstElementChild.src = cartas[orden[3]];
                validacion(4);
            }
        }
    });

    carta5.addEventListener("click", ()=>{
        posicionImg=4;
        if(verificarCartaDesabilitada(orden[posicionImg]) !==true && seTaparonTodas){
            if(carta5.classList.contains("carta-bolteada")){
                carta5.classList.remove("carta-bolteada");
                carta5.firstElementChild.firstElementChild.src = "../../img/PI.png";
                quitarCarta(orden[posicionImg]);
                console.log(cartasElegidasJugando);
                restablecerValor();
                eliminarIDintentoUno(5);
            }else if(validacionBoltearCarta()){
                carta5.classList.add("carta-bolteada");
                agregarCarta(orden[posicionImg]);
                console.log(cartasElegidasJugando);
                carta5.firstElementChild.firstElementChild.src = cartas[orden[4]];
                validacion(5);
            }
        }
    });

    carta6.addEventListener("click", ()=>{
        posicionImg=5;
        if(verificarCartaDesabilitada(orden[posicionImg]) !==true && seTaparonTodas){
            if(carta6.classList.contains("carta-bolteada")){
                carta6.classList.remove("carta-bolteada");
                carta6.firstElementChild.firstElementChild.src = "../../img/PI.png";
                quitarCarta(orden[posicionImg]);
                console.log(cartasElegidasJugando);
                restablecerValor();
                eliminarIDintentoUno(6);
            }else if(validacionBoltearCarta()){
                carta6.classList.add("carta-bolteada");
                agregarCarta(orden[posicionImg]);
                console.log(cartasElegidasJugando);
                carta6.firstElementChild.firstElementChild.src = cartas[orden[5]];
                validacion(6);
            }
        }
    });

    carta7.addEventListener("click", ()=>{
        posicionImg=6;
        if(verificarCartaDesabilitada(orden[posicionImg]) !==true && seTaparonTodas){
            if(carta7.classList.contains("carta-bolteada")){
                carta7.classList.remove("carta-bolteada");
                carta7.firstElementChild.firstElementChild.src = "../../img/PI.png";
                quitarCarta(orden[posicionImg]);
                console.log(cartasElegidasJugando);
                restablecerValor();
                eliminarIDintentoUno(7);
            }else if(validacionBoltearCarta()){
                carta7.classList.add("carta-bolteada");
                agregarCarta(orden[posicionImg]);
                console.log(cartasElegidasJugando);
                carta7.firstElementChild.firstElementChild.src = cartas[orden[6]];
                validacion(7);
            }
        }
    });

    carta8.addEventListener("click", ()=>{
        posicionImg=7;
        if(verificarCartaDesabilitada(orden[posicionImg]) !==true && seTaparonTodas){
            if(carta8.classList.contains("carta-bolteada")){
                carta8.classList.remove("carta-bolteada");
                carta8.firstElementChild.firstElementChild.src = "../../img/PI.png";
                quitarCarta(orden[posicionImg]);
                console.log(cartasElegidasJugando);
                restablecerValor();
                eliminarIDintentoUno(8);
            }else if(validacionBoltearCarta()){
                carta8.classList.add("carta-bolteada");
                agregarCarta(orden[posicionImg]);
                console.log(cartasElegidasJugando);
                carta8.firstElementChild.firstElementChild.src = cartas[orden[7]];
                validacion(8);
            }
        }
    });

    carta9.addEventListener("click", ()=>{
        posicionImg=8;
        if(verificarCartaDesabilitada(orden[posicionImg]) !==true && seTaparonTodas){
            if(carta9.classList.contains("carta-bolteada")){
                carta9.classList.remove("carta-bolteada");
                carta9.firstElementChild.firstElementChild.src = "../../img/PI.png";
                quitarCarta(orden[posicionImg]);
                console.log(cartasElegidasJugando);
                restablecerValor();
                eliminarIDintentoUno(9);
            }else if(validacionBoltearCarta()){
                carta9.classList.add("carta-bolteada");
                agregarCarta(orden[posicionImg]);
                console.log(cartasElegidasJugando);
                carta9.firstElementChild.firstElementChild.src = cartas[orden[8]];
                validacion(9);
            }
        }
    });

    carta10.addEventListener("click", ()=>{
        posicionImg=9;
        if(verificarCartaDesabilitada(orden[posicionImg]) !==true && seTaparonTodas){
            if(carta10.classList.contains("carta-bolteada")){
                carta10.classList.remove("carta-bolteada");
                carta10.firstElementChild.firstElementChild.src = "../../img/PI.png";
                quitarCarta(orden[posicionImg]);
                console.log(cartasElegidasJugando);
                restablecerValor();
                eliminarIDintentoUno(10);
            }else if(validacionBoltearCarta()){
                carta10.classList.add("carta-bolteada");
                agregarCarta(orden[posicionImg]);
                console.log(cartasElegidasJugando);
                carta10.firstElementChild.firstElementChild.src = cartas[orden[9]];
                validacion(10);
            }
        }
    });

    carta11.addEventListener("click", ()=>{
        posicionImg=10;
        if(verificarCartaDesabilitada(orden[posicionImg]) !==true && seTaparonTodas){
            if(carta11.classList.contains("carta-bolteada")){
                carta11.classList.remove("carta-bolteada");
                carta11.firstElementChild.firstElementChild.src = "../../img/PI.png";
                quitarCarta(orden[posicionImg]);
                console.log(cartasElegidasJugando);
                restablecerValor();
                eliminarIDintentoUno(11);
            }else if(validacionBoltearCarta()){
                carta11.classList.add("carta-bolteada");
                agregarCarta(orden[posicionImg]);
                console.log(cartasElegidasJugando);
                carta11.firstElementChild.firstElementChild.src = cartas[orden[10]];
                validacion(11);
            }
        }
    });

    carta12.addEventListener("click", ()=>{
        posicionImg=11;
        if(verificarCartaDesabilitada(orden[posicionImg]) !==true && seTaparonTodas){
            if(carta12.classList.contains("carta-bolteada")){
                carta12.classList.remove("carta-bolteada");
                carta12.firstElementChild.firstElementChild.src = "../../img/PI.png";
                quitarCarta(orden[posicionImg]);
                console.log(cartasElegidasJugando);
                restablecerValor();
                eliminarIDintentoUno(12);
            }else if(validacionBoltearCarta()){
                carta12.classList.add("carta-bolteada");
                agregarCarta(orden[posicionImg]);
                console.log(cartasElegidasJugando);
                carta12.firstElementChild.firstElementChild.src = cartas[orden[11]];
                validacion(12);
            }
        }
    });

    carta13.addEventListener("click", ()=>{
        posicionImg=12;
        if(verificarCartaDesabilitada(orden[posicionImg]) !==true && seTaparonTodas){
            if(carta13.classList.contains("carta-bolteada")){
                carta13.classList.remove("carta-bolteada");
                carta13.firstElementChild.firstElementChild.src = "../../img/PI.png";
                quitarCarta(orden[posicionImg]);
                console.log(cartasElegidasJugando);
                restablecerValor();
                eliminarIDintentoUno(13);
            }else if(validacionBoltearCarta()){
                carta13.classList.add("carta-bolteada");
                agregarCarta(orden[posicionImg]);
                console.log(cartasElegidasJugando);
                carta13.firstElementChild.firstElementChild.src = cartas[orden[12]];
                validacion(13);
            }
        }
    });

    carta14.addEventListener("click", ()=>{
        posicionImg=13;
        if(verificarCartaDesabilitada(orden[posicionImg]) !==true && seTaparonTodas){
            if(carta14.classList.contains("carta-bolteada")){
                carta14.classList.remove("carta-bolteada");
                carta14.firstElementChild.firstElementChild.src = "../../img/PI.png";
                quitarCarta(orden[posicionImg]);
                console.log(cartasElegidasJugando);
                restablecerValor();
                eliminarIDintentoUno(14);
            }else if(validacionBoltearCarta()){
                carta14.classList.add("carta-bolteada");
                agregarCarta(orden[posicionImg]);
                console.log(cartasElegidasJugando);
                carta14.firstElementChild.firstElementChild.src = cartas[orden[13]];
                validacion(14);
            }
        }
    });

    carta15.addEventListener("click", ()=>{
        posicionImg=14;
        if(verificarCartaDesabilitada(orden[posicionImg]) !==true && seTaparonTodas){
            if(carta15.classList.contains("carta-bolteada")){
                carta15.classList.remove("carta-bolteada");
                carta15.firstElementChild.firstElementChild.src = "../../img/PI.png";
                quitarCarta(orden[posicionImg]);
                console.log(cartasElegidasJugando);
                restablecerValor();
                eliminarIDintentoUno(15);
            }else if(validacionBoltearCarta()){
                carta15.classList.add("carta-bolteada");
                agregarCarta(orden[posicionImg]);
                console.log(cartasElegidasJugando);
                carta15.firstElementChild.firstElementChild.src = cartas[orden[14]];
                validacion(15);
            }
        }
    });

    carta16.addEventListener("click", ()=>{
        posicionImg=15;
        if(verificarCartaDesabilitada(orden[posicionImg]) !==true && seTaparonTodas){
            if(carta16.classList.contains("carta-bolteada")){
                carta16.classList.remove("carta-bolteada");
                carta16.firstElementChild.firstElementChild.src = "../../img/PI.png";
                quitarCarta(orden[posicionImg]);
                console.log(cartasElegidasJugando);
                restablecerValor();
                eliminarIDintentoUno(16);
            }else if(validacionBoltearCarta()){
                carta16.classList.add("carta-bolteada");
                agregarCarta(orden[posicionImg]);
                console.log(cartasElegidasJugando);
                carta16.firstElementChild.firstElementChild.src = cartas[orden[15]];
                validacion(16);
            }
        }
    });
}

/*Funciones de proceso*/
function taparCartas(){
    seTaparonTodas=false;
    posicion1 = posicionesTapar[0]-1;
    posicion2 = posicionesTapar[1]-1;
    cartasElegidas=0;
    setTimeout(()=>{
    casillasCartas.children[posicion2].classList.remove("carta-bolteada");
        console.log("Hola");
    casillasCartas.children[posicion2].firstElementChild.firstElementChild.src = "../../img/PI.png";
    casillasCartas.children[posicion1].classList.remove("carta-bolteada");
    casillasCartas.children[posicion1].firstElementChild.firstElementChild.src = "../../img/PI.png";
    //casillasCartas.children[posicion1].click();
    console.log(posicion1);
    console.log(posicion2);
    seTaparonTodas=true;
    },1050);
}


function generarNumeros(){
    return Math.floor((Math.random() * (((15+1)-0)+0)));
}

function llenadoCartas(){
    let numero;
    let lleno=false;
    let contador = 0;
    while(lleno !==true){
        numero= generarNumeros(); 
        if(orden.includes(numero)!==true){
            orden= [...orden , numero]; 
            contador++;
        }
        if(contador===16){
            lleno=true;
        }
    }
    console.log(orden);
}

function agregarCarta(carta){
    cartasElegidasJugando = [...cartasElegidasJugando,carta];
}

function quitarCarta(carta){
    let indice = cartasElegidasJugando.findIndex(cartaB=>{
        return cartaB == carta;   
    })
    cartasElegidasJugando.splice(indice,1);
}

function movimiento(id){
    if(((cartasElegidasJugando[0] + 1)===cartasElegidasJugando[1]||(cartasElegidasJugando[1] +1) ===cartasElegidasJugando[0] ) && numeroMayorPar()){
        guardarPares();
        cartasElegidasJugando = [];
        cartasElegidas =0; 
        posicionesTapar =[];
        console.log("Par");
        jugada(true);
    }else{
        posicionesTapar = [...posicionesTapar,id]
        taparCartas();
        console.log("Posiciones Tapar");
        console.log(posicionesTapar);
        cartasElegidasJugando = [];
        posicionesTapar=[];
        jugada(false);
    }
    console.log("Puntos J1: "+puntj1);
    console.log("Puntos J2: "+puntj2);
}

function guardarPares(){
    cartasDesabilitadas = [...cartasDesabilitadas, ...cartasElegidasJugando];
    console.log("cartasDesabilitadas:");
    console.log(cartasDesabilitadas);
}

function guardarIDintentoUno(id){
    posicionesTapar = [...posicionesTapar ,id];
    console.log("Posiciones Tapar");
    console.log(posicionesTapar);
}
function eliminarIDintentoUno(id){
    posicionesTapar=[];
    console.log("Elimino: " + id);
    console.log(posicionesTapar);
}

/*Validaciones*/
function numeroMayorPar(){//esta validacion sirve para que no cualquier numero consecutive se tome como par
    let validacionSuperada = false;
    if(cartasElegidasJugando[0]>cartasElegidasJugando[1]){
        if(cartasElegidasJugando[0]%2!==0){
            validacionSuperada = true;
        }
    }else if(cartasElegidasJugando[1]>cartasElegidasJugando[0]){
        if(cartasElegidasJugando[1]%2!==0){
            validacionSuperada = true;
        }
    }
    return validacionSuperada;
}

function validacionBoltearCarta(){
    return (cartasElegidas ==0 || cartasElegidas==1);
}

function restablecerValor(){
    if(cartasElegidas>=0){
        cartasElegidas--;
    }
}

function validacion(id){
    cartasElegidas++;
    if(cartasElegidas===2){
        movimiento(id);
    }else if(cartasElegidas===1){
        guardarIDintentoUno(id);
    }
}

function verificarCartaDesabilitada(valorAsignado){
    return cartasDesabilitadas.includes(valorAsignado);
}

function validarCartaDescartada(posicion){
    return posicionesTapar.includes(posicion);
}

/*Funciones de los jugadores*/

function jugada(puntoValido){
    noJugada++;
    if(noJugada%2!==0){
        if(puntoValido){
            puntj1++;
        puntaje1.textContent = `Jugador 1: ${puntj1}`;
        }
    }else{
        if(puntoValido){
            puntj2++;
            puntaje2.textContent = `Jugador 2: ${puntj2}`;
        }
    }
}
