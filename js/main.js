var Score;
var imagenDeCuerpito = new Image();
imagenDeCuerpito.src = "imgs/caritas/cuerpito.png";

function restartGame() {
    areaJuego.reset()
}

function updateGameArea() {
    areaJuego.clear();
    Personaje.update(Personaje.x + Personaje.moveX, Personaje.y + Personaje.moveY);
    areaJuego.framenro = areaJuego.framenro + 1;
    if (areaJuego.framenro === 2) {
        createNewApple()
        createBoost()
        // createMoob()
    }
    if (areaJuego.framenro % frameRateSecMult == 0) {
        updateGameTime(1)
    }
    Boost[0].update(Boost[0].x, Boost[0].y)
    // Comida[0].moveToPlayer(2,2)
    Comida[0].update(Comida[0].x, Comida[0].y)
    Personaje.checkCollision(Comida[0])
    Personaje.checkCollision(Boost[0])
    drawInfo(Personaje)
}

function checkKey(e) {
    var event = window.event ? window.event : e;
    console.log(event.keyCode)
}

function seleccionarPersonaje(e) {
    if (timeSpend > 0) {
        areaJuego.reset()
    }
    options = String(document.getElementById("listaPersonajes").value).split(',');
    console.log(options)
    Personaje = new component("200px", "400px", options[0], 100, 100, "personaje", options[1]);
    drawInfo(Personaje)
    areaJuego.start();
    Personaje.update(Personaje.x, Personaje.y);
}

function intervalo(n) {
    if ((areaJuego.framenro / n) % 1 == 0) {
        return true;
    }
    return false;
}