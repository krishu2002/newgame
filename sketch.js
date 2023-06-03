var canvas=document.getElementById("snake");
var per=canvas.getContext("2d");
var score=0;
var D

//load images
var ground=new Image()
ground.src="ground.png"
var foodImg=new Image()
foodImg.src="food.png"

//fo
var food={
    x:Math.floor(Math.random()*17)*32,
    y:Math.floor(Math.random()*15)*32
}
var snake=[]
snake[0]={
    x:1*32,
    y:3*32
}

//calling new function
document.addEventListener("keydown",moving);
//making new function
function moving(event){
    if(event.keyCode===37 && D != "right"){
     D="left"
    }else if(event.keyCode===38 && D!="down"){
        D="top"
    }else if(event.keyCode===39 && D!="left"){
        D="right"
    }else if(event.keyCode===40 && D!="top"){
        D="down"
    }
}
//making a new function
function eating(){
    if (snake[0].x === food.x && snake[0].y === food.y){
        
        food={
    x:Math.floor(Math.random()*17)*32,
    y:Math.floor(Math.random()*15)*32
}
        score=score+1;
        
    }
}




//main game function
function game(){
per.drawImage(ground,0,0)
per.drawImage(foodImg,food.x,food.y)
per.fillStyle="white"
per.font="40px calibri"
per.fillText(score,32,3*32)
for(var i=0; i<snake.length;i++){
    per.fillRect(snake[i].x,snake[i].y,32,32);

}
//Old head
var snakeX = snake[0].x
var snakeY = snake[0].y
//remove the tail
snake.pop()
//snake moving by 32
if(D==="left"){
    snakeX=snakeX-32
}
if(D==="right"){
    snakeX=snakeX+32
}

if(D==="top"){
    snakeY=snakeY-32
}
if(D==="down"){
    snakeY=snakeY+32
}
//new head
var new_head={
    x:snakeX,
    y:snakeY
}
snake.unshift(new_head);
//calling new function
eating();
}



setInterval(game,100)