const frameRate = 25
const frameRateSecMult = 40
var timeSpend = 0;
var totalBoost = 0
var score = 0;


var areaJuego = {
    canvas: document.createElement("canvas"),
    start: function () {
        this.canvas.classList.add('areaGame')
        this.canvas.width = 1000;
        this.canvas.height = 500;
        this.framenro = 1;
        move1 = 5
        move2 = 3
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(x => {
            updateGameArea()
        }, frameRate);
        showMoveInfo()
    },
    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    reset: function () {
        console.log('entro')
        clearInterval(this.interval)
        timeSpend = 0;
        score = 0;
        this.framenro = 1;
        updateGameTime(timeSpend * -1)
        this.clear()
        move1 = 5
        move2 = 3
        totalBoost = 0
    },
    finish: function(){
        clearInterval(this.interval)
        this.framenro = 1;
        timeSpend = 0;
    }
}

function updateGameTime(value) {
    timeSpend = timeSpend + value;
    document.getElementById('timeFrame').innerHTML = timeSpend + ' segs';
}

function updateScore(value) {
    score = score + value
    document.getElementById('scoreBoard').innerHTML = score;

}





