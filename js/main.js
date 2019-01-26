var Personaje;
var Comida = [];
var Score;
var imagenDeCuerpito = new Image();
imagenDeCuerpito.src = "caritas/cuerpito.png";

  document.addEventListener("keydown",function(event){
               if(event.keyCode == 40){
                   Personaje.update(Personaje.x, Personaje.y+15);
               }else if(event.keyCode == 39){
                     Personaje.update(Personaje.x+15, Personaje.y);
               }else if(event.keyCode == 38){
                     Personaje.update(Personaje.x, Personaje.y-15);
               }else if(event.keyCode == 37){
                     Personaje.update(Personaje.x-15, Personaje.y);
               }
        });

function comenzarJuego(){


}

function updateGameArea(){
   areaJuego.clear();
   Personaje.update(Personaje.x, Personaje.y);
   areaJuego.framenro = areaJuego.framenro + 1;
   if(areaJuego.framenro === 2 || intervalo(frameRateSecMult * 10)){
       x = areaJuego.canvas.width * Math.random();
       y = areaJuego.canvas.height * Math.random();
       Comida[0] = new component(20, 20, 'manzana', x, y, 'comida');
       console.log(Comida)
    }
    if(areaJuego.framenro % frameRateSecMult == 0){
        timeSpend = timeSpend + 1;
        document.getElementById('timeFrame').innerHTML = timeSpend;
    }
    Comida[0].update(Comida[0].x, Comida[0].y)
}

function checkKey(e) {
var event = window.event ? window.event : e;
console.log(event.keyCode)
}

function seleccionarPersonaje(e){
   console.log(e);
   carita = String(document.getElementById("listaPersonajes").value);
   Personaje = new component("200px","400px",carita,100, 100, "personaje");
   areaJuego.start();
   Personaje.update(Personaje.x, Personaje.y);
}

function intervalo(n){
   if((areaJuego.framenro/n) % 1 == 0){return true;}
   return false;
}
