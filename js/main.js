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

var areaJuego = {
   canvas : document.createElement("canvas"),
   start : function(){
       this.canvas.width = 1000;
       this.canvas.height = 600;
       this.framenro = 1;
       this.context = this.canvas.getContext("2d");
       document.body.insertBefore(this.canvas, document.body.childNodes[0]);
       this.interval = setInterval(updateGameArea, 25);
   },
   clear : function() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
   }
}

function updateGameArea(){
   areaJuego.clear();
   Personaje.update(Personaje.x, Personaje.y);
   areaJuego.framenro = areaJuego.framenro + 1;
   if(areaJuego.framenro == 1 || intervalo(1500)){
       x = areaJuego.canvas.width * math.random();
       y = areaJuego.canvas.height * math.random();
       comida.push(new component(20, 20, manzana, x, y, comida));
   }
   Comida[0].update()
}

function component(width, height, cabeza, x, y, type){
   this.type = type;
   this.height = height;
   this.width = width;
   this.nombre = cabeza;
   this.cabeza = new Image();
   this.cabeza.src = 'caritas/'+cabeza+'.png';
   this.x = x;
   this.y = y;
   this.text ="jej";
   this.primeraCarga = 0;
   this.update = function(x,y){
       this.x=x;
       this.y=y;
       ctx = areaJuego.context;
       if(this.type == "personaje"){

           if(this.primeraCarga == 0){
               this.cabeza.onload = function(){
               ctx.drawImage(Personaje.cabeza, x, y, 100, 100);
               }
               this.primeraCarga = 1;
           }

            ctx.drawImage(this.cabeza, x, y, 100, 100);
            var cuerpox = x+10;
            if(this.nombre == "rosita"){cuerpox = x;}
            var cuerpoy = y +95;
            ctx.drawImage(imagenDeCuerpito,cuerpox,cuerpoy,70,70);
       }
       if(this.type == "comida"){
           ctx.drawImage(this.cabeza, x, y, 50, 50);
       }
   }
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
