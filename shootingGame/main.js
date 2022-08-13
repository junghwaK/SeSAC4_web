//캔버스 세팅

let canvas;
let ctx;

canvas = document.createElement("canvas")
ctx = canvas.getContext("2d")
canvas.width=400;
canvas.height=700;
document.body.appendChild(canvas);

let backgroundImage,spaceshipImage,bulletIamge,enemyImage,gameOverImage;

//우주선 좌표
let spaceshipX = canvas.width/2-32
let spaceshipY = canvas.height-64
//64: 우주선의 픽셀만큼임

function loadImage(){
    backgroundImage = new Image();
    backgroundImage.src = "images/space.jpg";

    spaceshipImage = new Image();
    spaceshipImage.src = "images/spaceship.png";

    bulletIamge = new Image();
    bulletIamge.src = "images/bullet.png";

    enemyImage = new Image();
    enemyImage.src ="images/enemy.png";

    gameOverImage = new Image();
    gameOverImage.src = "images/gameover.png"
}


function render(){
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(spaceshipImage, spaceshipX, spaceshipY)
}

function main(){
    render();
    requireAnimationFrame(main);
}


loadImage();
main();