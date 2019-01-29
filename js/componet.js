Comida = []
Boost = []
Moobs = []

function component(width, height, cabeza, x, y, type, boostType) {
    this.type = type;
    this.height = height;
    this.width = width;
    this.nombre = cabeza;
    this.boostType = boostType;
    this.cabeza = new Image();
    this.cabeza.src = 'imgs/caritas/' + cabeza + '.png';
    this.x = x;
    this.y = y;
    this.moveX = 4;
    this.moveY = 4;
    this.text = "jej";
    this.primeraCarga = 0;
    this.update = function (x, y) {
        this.x = x;
        this.y = y;
        ctx = areaJuego.context;
        if (this.type == "personaje") {

            if (this.primeraCarga == 0) {
                this.cabeza.onload = function () {
                    ctx.drawImage(Personaje.cabeza, this.x, this.y, 100, 100);
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

        if (this.type == "comida" || this.type == "boost" || this.type == "moob" ) {
            ctx.drawImage(this.cabeza, this.x, this.y, 50, 50);
        }
    }
    this.checkCollision = function (objeto) {
        if ((-100 < (Personaje.x - objeto.x)) &&
            (50 > (Personaje.x - objeto.x)) &&
            (50 > (Personaje.y - objeto.y)) &&
            (-100 < (Personaje.y - objeto.y))) {

                if(objeto.type == 'comida'){
                    createNewApple()
                    updateScore(1)
                }

                if(objeto.type == 'boost'){
                    move1 = move1 + 0.8
                    move2 = move2 + 0.5
                    totalBoost =totalBoost+1
                    createBoost()
                    showMoveInfo()
                }

                if(objeto.type == 'moob'){
                    areaJuego.finish();
                    alert('te atrapo el pirata y no fue por el oro ni por la plata')
                }
        }
    }

    this.upgradeSpeed = function (speedX, speedY){
        this.moveX = this.moveX + speedX
        this.moveY = this.moveY + speedY
        console.log('se entro')
    }

    this.moveToPlayer = function(){
        if(this.x - Personaje.x < 30){
            if(this.x - Personaje.x > -30){
                

                if(this.y - Personaje.y< 30){

                    if(this.y - Personaje.y > -30){
                    }
                    this.y = this.y + this.moveY
                }else{
                    this.y = this.y-this.moveY
                }

            }else{
                this.x = this.x + this.moveX;
            }
        }else{
            this.x = this.x - this.moveX
        }
    }
}

function createNewApple() {
    do {
        x = areaJuego.canvas.width * Math.random();
    } while ((x - areaJuego.canvas.width) > -50 && (x - areaJuego.canvas.width) < 50)

    do {
        y = areaJuego.canvas.height * Math.random();
    } while ((y - areaJuego.canvas.height) > -50 && (y - areaJuego.canvas.height) < 50)

    Comida[0] = new component(20, 20, 'manzana', x, y, 'comida');
    drawInfo(Comida[0])

}

function createBoost() {
    do {
        x = areaJuego.canvas.width * Math.random();
    } while ((x - areaJuego.canvas.width) > -50 && (x - areaJuego.canvas.width) < 50)

    do {
        y = areaJuego.canvas.height * Math.random();
    } while ((y - areaJuego.canvas.height) > -50 && (y - areaJuego.canvas.height) < 50)

    Boost[0] = new component(20, 20, Personaje.boostType, x, y, 'boost');

       drawInfo(Boost[0])
}

function createMoob(){
    Moobs[0] = new component(50, 50, 'moob', 900, 10, 'moob');
}

function drawInfo(objeto) {
    if (objeto.type == 'comida') {
        document.getElementById('manzanaInfo').innerHTML = JSON.stringify(objeto)
    }
    if (objeto.type == 'personaje') {
        document.getElementById('personajeInfo').innerHTML = JSON.stringify(objeto)
    }
    if (objeto.type == 'boost') {
        document.getElementById('boostInfo').innerHTML = JSON.stringify(objeto)
    }
    if (objeto.type == 'moob') {
        document.getElementById('moobInfo').innerHTML = JSON.stringify(objeto)
    }
}