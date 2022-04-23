const main = document.querySelector("main");
const imagenJ = document.querySelector(".imagen-juego");
const siguienteE = document.querySelectorAll(".jugar-E");
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

/*Paginas*/
if(main.classList.contains("index")){
    imagenJ.addEventListener("click",()=>{
        window.location.href = "pages/memorama/elJuego.html";
    });
}else if(main.classList.contains("elJuego")){
        siguienteE[0].addEventListener("click",()=>{
        window.location.href = "dificultad.html";
        });
        siguienteE[1].addEventListener("click",()=>{
        window.location.href = "dificultad.html";
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
        if(carta1.classList.contains("carta-bolteada")){
            carta1.classList.remove("carta-bolteada");
            carta1.firstElementChild.firstElementChild.src = "../../img/PI.png";
            quitarCarta(orden[posicionImg]);
            console.log(cartasElegidasJugando);
            restablecerValor();
        }else if(validacionBoltearCarta()){
            carta1.classList.add("carta-bolteada");
            carta1.firstElementChild.firstElementChild.src = cartas[orden[0]];
            agregarCarta(orden[posicionImg]);
            console.log(cartasElegidasJugando);
            validacion();
        }
    });

    carta2.addEventListener("click", ()=>{
        posicionImg=1;
        if(carta2.classList.contains("carta-bolteada")){
            carta2.classList.remove("carta-bolteada");
            carta2.firstElementChild.firstElementChild.src = "../../img/PI.png";
            quitarCarta(orden[posicionImg]);
            console.log(cartasElegidasJugando);
            restablecerValor();
        }else if(validacionBoltearCarta()){
            carta2.classList.add("carta-bolteada");
            agregarCarta(orden[posicionImg]);
            console.log(cartasElegidasJugando);
            carta2.firstElementChild.firstElementChild.src = cartas[orden[1]];
            validacion();
        }
    });

    carta3.addEventListener("click", ()=>{
        posicionImg=2;
        if(carta3.classList.contains("carta-bolteada")){
            carta3.classList.remove("carta-bolteada");
            carta3.firstElementChild.firstElementChild.src = "../../img/PI.png";
            quitarCarta(orden[posicionImg]);
            console.log(cartasElegidasJugando);
            restablecerValor();
        }else if(validacionBoltearCarta()){
            carta3.classList.add("carta-bolteada");
            agregarCarta(orden[posicionImg]);
            console.log(cartasElegidasJugando);
            carta3.firstElementChild.firstElementChild.src = cartas[orden[2]];
            validacion();
        }
    });

    carta4.addEventListener("click", ()=>{
        posicionImg=3;
        if(carta4.classList.contains("carta-bolteada")){
            carta4.classList.remove("carta-bolteada");
            carta4.firstElementChild.firstElementChild.src = "../../img/PI.png";
            quitarCarta(orden[posicionImg]);
            console.log(cartasElegidasJugando);
            restablecerValor();
        }else if(validacionBoltearCarta()){
            carta4.classList.add("carta-bolteada");
            agregarCarta(orden[posicionImg]);
            console.log(cartasElegidasJugando);
            carta4.firstElementChild.firstElementChild.src = cartas[orden[3]];
            validacion();
        }
    });

    carta5.addEventListener("click", ()=>{
        posicionImg=4;
        if(carta5.classList.contains("carta-bolteada")){
            carta5.classList.remove("carta-bolteada");
            carta5.firstElementChild.firstElementChild.src = "../../img/PI.png";
            quitarCarta(orden[posicionImg]);
            console.log(cartasElegidasJugando);
            restablecerValor();
        }else if(validacionBoltearCarta()){
            carta5.classList.add("carta-bolteada");
            agregarCarta(orden[posicionImg]);
            console.log(cartasElegidasJugando);
            carta5.firstElementChild.firstElementChild.src = cartas[orden[4]];
            validacion();
        }
    });

    carta6.addEventListener("click", ()=>{
        posicionImg=5;
        if(carta6.classList.contains("carta-bolteada")){
            carta6.classList.remove("carta-bolteada");
            carta6.firstElementChild.firstElementChild.src = "../../img/PI.png";
            quitarCarta(orden[posicionImg]);
            console.log(cartasElegidasJugando);
            restablecerValor();
        }else if(validacionBoltearCarta()){
            carta6.classList.add("carta-bolteada");
            agregarCarta(orden[posicionImg]);
            console.log(cartasElegidasJugando);
            carta6.firstElementChild.firstElementChild.src = cartas[orden[5]];
            validacion();
        }
    });

    carta7.addEventListener("click", ()=>{
        posicionImg=6;
        if(carta7.classList.contains("carta-bolteada")){
            carta7.classList.remove("carta-bolteada");
            carta7.firstElementChild.firstElementChild.src = "../../img/PI.png";
            quitarCarta(orden[posicionImg]);
            console.log(cartasElegidasJugando);
            restablecerValor();
        }else if(validacionBoltearCarta()){
            carta7.classList.add("carta-bolteada");
            agregarCarta(orden[posicionImg]);
            console.log(cartasElegidasJugando);
            carta7.firstElementChild.firstElementChild.src = cartas[orden[6]];
            validacion();
        }
    });

    carta8.addEventListener("click", ()=>{
        posicionImg=7;
        if(carta8.classList.contains("carta-bolteada")){
            carta8.classList.remove("carta-bolteada");
            carta8.firstElementChild.firstElementChild.src = "../../img/PI.png";
            quitarCarta(orden[posicionImg]);
            console.log(cartasElegidasJugando);
            restablecerValor();
        }else if(validacionBoltearCarta()){
            carta8.classList.add("carta-bolteada");
            agregarCarta(orden[posicionImg]);
            console.log(cartasElegidasJugando);
            carta8.firstElementChild.firstElementChild.src = cartas[orden[7]];
            validacion();
        }
    });

    carta9.addEventListener("click", ()=>{
        posicionImg=8;
        if(carta9.classList.contains("carta-bolteada")){
            carta9.classList.remove("carta-bolteada");
            carta9.firstElementChild.firstElementChild.src = "../../img/PI.png";
            quitarCarta(orden[posicionImg]);
            console.log(cartasElegidasJugando);
            restablecerValor();
        }else if(validacionBoltearCarta()){
            carta9.classList.add("carta-bolteada");
            agregarCarta(orden[posicionImg]);
            console.log(cartasElegidasJugando);
            carta9.firstElementChild.firstElementChild.src = cartas[orden[8]];
            validacion();
        }
    });

    carta10.addEventListener("click", ()=>{
        posicionImg=9;
        if(carta10.classList.contains("carta-bolteada")){
            carta10.classList.remove("carta-bolteada");
            carta10.firstElementChild.firstElementChild.src = "../../img/PI.png";
            quitarCarta(orden[posicionImg]);
            console.log(cartasElegidasJugando);
            restablecerValor();
        }else if(validacionBoltearCarta()){
            carta10.classList.add("carta-bolteada");
            agregarCarta(orden[posicionImg]);
            console.log(cartasElegidasJugando);
            carta10.firstElementChild.firstElementChild.src = cartas[orden[9]];
            validacion();
        }
    });

    carta11.addEventListener("click", ()=>{
        posicionImg=10;
        if(carta11.classList.contains("carta-bolteada")){
            carta11.classList.remove("carta-bolteada");
            carta11.firstElementChild.firstElementChild.src = "../../img/PI.png";
            quitarCarta(orden[posicionImg]);
            console.log(cartasElegidasJugando);
            restablecerValor();
        }else if(validacionBoltearCarta()){
            carta11.classList.add("carta-bolteada");
            agregarCarta(orden[posicionImg]);
            console.log(cartasElegidasJugando);
            carta11.firstElementChild.firstElementChild.src = cartas[orden[10]];
            validacion();
        }
    });

    carta12.addEventListener("click", ()=>{
        posicionImg=11;
        if(carta12.classList.contains("carta-bolteada")){
            carta12.classList.remove("carta-bolteada");
            carta12.firstElementChild.firstElementChild.src = "../../img/PI.png";
            quitarCarta(orden[posicionImg]);
            console.log(cartasElegidasJugando);
            restablecerValor();
        }else if(validacionBoltearCarta()){
            carta12.classList.add("carta-bolteada");
            agregarCarta(orden[posicionImg]);
            console.log(cartasElegidasJugando);
            carta12.firstElementChild.firstElementChild.src = cartas[orden[11]];
            validacion();
        }
    });

    carta13.addEventListener("click", ()=>{
        posicionImg=12;
        if(carta13.classList.contains("carta-bolteada")){
            carta13.classList.remove("carta-bolteada");
            carta13.firstElementChild.firstElementChild.src = "../../img/PI.png";
            quitarCarta(orden[posicionImg]);
            console.log(cartasElegidasJugando);
            restablecerValor();
        }else if(validacionBoltearCarta()){
            carta13.classList.add("carta-bolteada");
            agregarCarta(orden[posicionImg]);
            console.log(cartasElegidasJugando);
            carta13.firstElementChild.firstElementChild.src = cartas[orden[12]];
            validacion();
        }
    });

    carta14.addEventListener("click", ()=>{
        posicionImg=13;
        if(carta14.classList.contains("carta-bolteada")){
            carta14.classList.remove("carta-bolteada");
            carta14.firstElementChild.firstElementChild.src = "../../img/PI.png";
            quitarCarta(orden[posicionImg]);
            console.log(cartasElegidasJugando);
            restablecerValor();
        }else if(validacionBoltearCarta()){
            carta14.classList.add("carta-bolteada");
            agregarCarta(orden[posicionImg]);
            console.log(cartasElegidasJugando);
            carta14.firstElementChild.firstElementChild.src = cartas[orden[13]];
            validacion();
        }
    });

    carta15.addEventListener("click", ()=>{
        posicionImg=14;
        if(carta15.classList.contains("carta-bolteada")){
            carta15.classList.remove("carta-bolteada");
            carta15.firstElementChild.firstElementChild.src = "../../img/PI.png";
            quitarCarta(orden[posicionImg]);
            console.log(cartasElegidasJugando);
            restablecerValor();
        }else if(validacionBoltearCarta()){
            carta15.classList.add("carta-bolteada");
            agregarCarta(orden[posicionImg]);
            console.log(cartasElegidasJugando);
            carta15.firstElementChild.firstElementChild.src = cartas[orden[14]];
            validacion();
        }
    });

    carta16.addEventListener("click", ()=>{
        posicionImg=15;
        if(carta16.classList.contains("carta-bolteada")){
            carta16.classList.remove("carta-bolteada");
            carta16.firstElementChild.firstElementChild.src = "../../img/PI.png";
            quitarCarta(orden[posicionImg]);
            console.log(cartasElegidasJugando);
            restablecerValor();
        }else if(validacionBoltearCarta()){
            carta16.classList.add("carta-bolteada");
            agregarCarta(orden[posicionImg]);
            console.log(cartasElegidasJugando);
            carta16.firstElementChild.firstElementChild.src = cartas[orden[15]];
            validacion();
        }
    });
}

/*Funciones de proceso*/
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

function movimiento(){
    if((cartasElegidasJugando[0] + 1)===cartasElegidasJugando[1]||(cartasElegidasJugando[1] +1) ===cartasElegidasJugando[0]){
        console.log("Par");
    }
}
/*Validaciones*/
function validacionBoltearCarta(){
    return (cartasElegidas ==0 || cartasElegidas==1);
}

function restablecerValor(){
    if(cartasElegidas>=0){
        cartasElegidas--;
    }
}

function validacion(){
    cartasElegidas++;
    if(cartasElegidas===2){
        movimiento();
    }
}
