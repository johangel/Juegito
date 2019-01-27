var Personaje;
var Comida = [];
var Score;
var imagenDeCuerpito = new Image();
imagenDeCuerpito.src = "caritas/cuerpito.png";

  document.addEventListener("keydown",function(event){
               if(event.keyCode == 40){
                   Personaje.update(Personaje.x, Personaje.y+15);
                   document.getElementById('downKey').classList.add('pressedButon')
               }else if(event.keyCode == 39){
                     Personaje.update(Personaje.x+15, Personaje.y);
                     document.getElementById('rightKey').classList.add('pressedButon')
               }else if(event.keyCode == 38){
                     Personaje.update(Personaje.x, Personaje.y-15);
                     document.getElementById('upKey').classList.add('pressedButon')
               }else if(event.keyCode == 37){
                     Personaje.update(Personaje.x-15, Personaje.y);
                     document.getElementById('leftKey').classList.add('pressedButon')
               }
               drawInfo(Personaje)
        });

    document.addEventListener('keyup',x=>{
        arrayElement = document.getElementsByClassName('pressedButon')
        for (let item of arrayElement) {
            item.classList.remove('pressedButon')
        } 
        
        
    })

function restartGame(){
    areaJuego.reset()
}

function updateGameArea(){
   areaJuego.clear();
   Personaje.update(Personaje.x, Personaje.y);
   areaJuego.framenro = areaJuego.framenro + 1;
   if(areaJuego.framenro === 2 || intervalo(frameRateSecMult * 100)){
       createNewApple()
    }
    if(areaJuego.framenro % frameRateSecMult == 0){
        updateGameTime(1)
    }
    Comida[0].update(Comida[0].x, Comida[0].y)
    Personaje.checkCollision(Comida[0])
    
}

function checkKey(e) {
var event = window.event ? window.event : e;
console.log(event.keyCode)
}

function seleccionarPersonaje(e){
    if(timeSpend > 0){
        areaJuego.reset()
    }
   carita = String(document.getElementById("listaPersonajes").value);
   Personaje = new component("200px","400px",carita,100, 100, "personaje");
   drawInfo(Personaje)
   areaJuego.start();
   Personaje.update(Personaje.x, Personaje.y);
}

function intervalo(n){
   if((areaJuego.framenro/n) % 1 == 0){return true;}
   return false;
}
