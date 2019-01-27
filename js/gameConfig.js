const frameRate = 25
const frameRateSecMult = 40
var timeSpend = 0;
var score = 0;

var areaJuego = {
    canvas: document.createElement("canvas"),
    start: function () {
        this.canvas.classList.add('areaGame')
        this.canvas.width = 1000;
        this.canvas.height = 500;
        this.framenro = 1;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(x => {
            updateGameArea()
        }, frameRate);

    },
    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    reset: function () {
        console.log('entro')
        clearInterval(this.interval)
        timeSpend = 0;
        score = 0;
        updateGameTime(timeSpend * -1)
        this.clear()
    }
}

function component(width, height, cabeza, x, y, type) {
    this.type = type;
    this.height = height;
    this.width = width;
    this.nombre = cabeza;
    this.cabeza = new Image();
    this.cabeza.src = 'caritas/' + cabeza + '.png';
    this.x = x;
    this.y = y;
    this.text = "jej";
    this.primeraCarga = 0;
    this.update = function (x, y) {
        this.x = x;
        this.y = y;
        ctx = areaJuego.context;
        if (this.type == "personaje") {

            if (this.primeraCarga == 0) {
                this.cabeza.onload = function () {
                    ctx.drawImage(Personaje.cabeza, x, y, 100, 100);
                }
                this.primeraCarga = 1;
            }

            ctx.drawImage(this.cabeza, x, y, 100, 100);
            var cuerpox = x + 10;
            if (this.nombre == "rosita") {
                cuerpox = x;
            }
            var cuerpoy = y + 95;
            ctx.drawImage(imagenDeCuerpito, cuerpox, cuerpoy, 70, 70);
        }
        if (this.type == "comida") {
            ctx.drawImage(this.cabeza, x, y, 50, 50);
        }
    }
    this.checkCollision = function (objeto) {
        // console.log('esto es una manzana: ', objeto)
        if ((-100 < (Personaje.x - objeto.x)) &&
            ( 100 > (Personaje.x - objeto.x)) &&
            ( 100 > (Personaje.y - objeto.y)) &&
            (-100 < (Personaje.y - objeto.y))){
            createNewApple()
            updateScore(1)
        }
    }
}

function updateGameTime(value) {
    timeSpend = timeSpend + value;
    document.getElementById('timeFrame').innerHTML = timeSpend + ' segs';
}

function updateScore(value){
    score = score + value
    document.getElementById('scoreBoard').innerHTML = score;

}

function drawInfo(objeto){
    if(objeto.type == 'comida'){
        document.getElementById('manzanaInfo').innerHTML = JSON.stringify(objeto)
    }
    if(objeto.type == 'personaje'){
        document.getElementById('personajeInfo').innerHTML = JSON.stringify(objeto)
    }
}

function createNewApple(){
        x = areaJuego.canvas.width * Math.random();
       y = areaJuego.canvas.height * Math.random();
       Comida[0] = new component(20, 20, 'manzana', x, y, 'comida');
       drawInfo(Comida[0])
}