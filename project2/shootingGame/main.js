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
    backgroundImage.src = "./images/space.jpg";

    spaceshipImage = new Image();
    spaceshipImage.src = "./images/spaceship.png";

    bulletIamge = new Image();
    bulletIamge.src = "./images/bullet.png";

    enemyImage = new Image();
    enemyImage.src ="./images/enemy.png";

    gameOverImage = new Image();
    gameOverImage.src = "./images/gameover.png"
}


//버튼조작 저장하는 공간. 어떤버튼들이 눌리는지 저장되는공간. ->
let keysDown={}
//게임조작하는 함수 세팅->
function setupKeyboardListener(){
     //이벤트를 읽어오는 함수->
    document.addEventListener("keydown", function(event){
        keysDown[event.keyCode] = true
    });
    //키보드 버튼눌렀던거 보내주는거임->
    document.addEventListener("keyup", function(event){
        delete keysDown[event.keyCode]
    });
}

//우주선 움직이기 위한 함수. 좌표를 업데이트하여 움직일거니까 update->
function update(){
    // 오른쪽 버튼이 눌렸다면
    if(39 in keysDown){
        spaceshipX += 8; //느리게 가고싶으면 숫자를 더 줄여준다. ex) +=1
    }
    //left
    if(37 in keysDown){
        spaceshipX += -8;
    }
    //우주선 좌표값이 무한대가 아니라 경기장 안에서만 있게 하려면?->
    if(spaceshipX <=0){
        spaceshipX=0
    }
    if(spaceshipX >= canvas.width-64){
        spaceshipX = canvas.width-64;
    }
}


function render(){
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(spaceshipImage, spaceshipX, spaceshipY)
}

function main(){
    update(); //좌표값을 업데이트하고
    render(); // 그려주고  ->업뎃과 그려주는것을 반복하는것이 게임..
    // requireAnimationFrame(main);
}


loadImage();
setupKeyboardListener();
// main();


//1. 방향키를 누르면 
//2. 우주선의 xy 좌표가 바뀌고
//3. 다시 render 그려준다. 
