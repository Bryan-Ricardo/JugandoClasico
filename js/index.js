const main = document.querySelector("main");
const imagenJ = document.querySelector(".imagen-juego");
const siguienteE = document.querySelectorAll(".jugar-E");
const carta1 = document.querySelector(".carta-1");

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
    carta1.addEventListener("click", ()=>{
        carta1.classList.add("carta-bolteada");
    });
}
