var Score;
var imagenDeCuerpito = new Image();
imagenDeCuerpito.src = "caritas/cuerpito.png";

function restartGame() {
    areaJuego.reset()
}

function updateGameArea() {
    areaJuego.clear();
    Personaje.update(Personaje.x + Personaje.moveX, Personaje.y + Personaje.moveY);
    areaJuego.framenro = areaJuego.framenro + 1;
    if (areaJuego.framenro === 2 || intervalo(frameRateSecMult * 10)) {
        createNewApple()
        createBoost()
        
    }
    if (areaJuego.framenro % frameRateSecMult == 0) {
        updateGameTime(1)
    }
    Boost[0].update(Boost[0].x, Boost[0].y)
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
    carita = String(document.getElementById("listaPersonajes").value);
    Personaje = new component("200px", "400px", carita, 100, 100, "personaje");
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