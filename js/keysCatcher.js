var map = {}
move1 = 5
move2 = 3

document.addEventListener("keydown", function (e) {
     arrayElement = document.getElementsByClassName('pressedButon')
    for (let item of arrayElement) {
        item.classList.remove('pressedButon')
    }
    evaluateMovement(e)
});

document.addEventListener('keyup', function (e) {
    arrayElement = document.getElementsByClassName('pressedButon')
    for (let item of arrayElement) {
        item.classList.remove('pressedButon')
    }
    e = e || event;
    map[e.keyCode] = e.type == 'keydown'
})

function evaluateMovement(e){
    e = e || event;
    e.preventDefault()
    map[e.keyCode] = e.type == 'keydown'
    drawInfo(Personaje)
    if (map[39] && map[40]) {

        Personaje.moveX = move2 
        Personaje.moveY = move2
        document.getElementById('downKey').classList.add('pressedButon')
        document.getElementById('rightKey').classList.add('pressedButon')

    } else if (map[38] && map[39]) {

        Personaje.moveX = move2, 
        Personaje.moveY = -move2;
        document.getElementById('upKey').classList.add('pressedButon')
        document.getElementById('rightKey').classList.add('pressedButon')

    } else if (map[37] && map[38]) {

        Personaje.moveX = -move2
        Personaje.moveY = -move2;
        document.getElementById('upKey').classList.add('pressedButon')
        document.getElementById('leftKey').classList.add('pressedButon')

    } else if (map[37] && map[40]) {
        Personaje.moveX = -move2
        Personaje.moveY = move2;
        document.getElementById('downKey').classList.add('pressedButon')
        document.getElementById('leftKey').classList.add('pressedButon')
    }
    //UNICOS
    else if (map[40]) {
        Personaje.moveX = 0
        Personaje.moveY = move1
        document.getElementById('downKey').classList.add('pressedButon')
    } else if (map[39]) {
        Personaje.moveX = move1 
        Personaje.moveY = 0
        document.getElementById('rightKey').classList.add('pressedButon')
    } else if (map[38]) {
        Personaje.moveX = 0 
        Personaje.moveY = -move1
        document.getElementById('upKey').classList.add('pressedButon')
    } else if (map[37]) {
        Personaje.moveX = -move1 
        Personaje.moveY = 0
        document.getElementById('leftKey').classList.add('pressedButon')
    } else if(map[32]){
        Personaje.moveX = 0 
        Personaje.moveY = 0
        document.getElementById('stopKey').classList.add('pressedButon')
    }
    
    
}

function showMoveInfo(){
    document.getElementById('vel1d').innerHTML = move1
    document.getElementById('vel2d').innerHTML = move2
}