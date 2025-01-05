//Interface
var bmusic = new Audio("resources/bmusic.mp3"); 
bmusic.loop = true;
var runSound1 = new Audio("resources/run.mp3");
runSound1.loop = true;
var runImage1 = 1;
var runWorker1 = 0;

function run1() {

    runWorker1 = setInterval(
        ()=>{
            runImage1 = runImage1 + 1;

            if(runImage1 == 9) {
               runImage1 = 1;
            }

            document.getElementById("boy").src="resources/run"+runImage1+".png";

        },150
    );   
}

run1();
runSound1.play();
bmusic.play();



//Press Enter OR Space
function controller(event) {
    
    if(event.key =="Enter") {
        clearInterval(runWorker1);
        runSound1.pause(); 
        bmusic.pause();
        document.getElementById("line1").innerHTML = "";
        document.getElementById("line2").innerHTML = "";
        document.getElementById("line").innerHTML = "";

        if(runWorker == 0) {
           run();
           runSound.play();
           movebackground();
           updateScore();
           flameMarginLeftArray.forEach(createFlame);
        } 

    }

    if(event.key==" ") {
        if(jumpWorker == 0) {
           if(runWorker != 0) {
              clearInterval(runWorker);
              runSound.pause();
              jump();
              jumpSound.play();
            }
        }   
    }

}



//Run Animation
var runImage = 1;
var runWorker = 0;
var runSound = new Audio("resources/run.mp3");
runSound.loop = true;

function run() {

    runWorker = setInterval(
        ()=>{
            runImage = runImage + 1;

            if(runImage == 9) {
               runImage = 1;
            }

            document.getElementById("boy").src="resources/run"+runImage+".png";

        },150
    );   
}



//Background Animation
var bmusic1 = new Audio("resources/bmusic1.mp3");
bmusic1.loop = true;
var bmusic2 = new Audio("resources/bmusic2.mp3");
bmusic2.loop = true;
var bmusic3 = new Audio("resources/bmusic3.mp3");
bmusic3.loop = true;
var bmusic4 = new Audio("resources/bmusic4.mp3");
bmusic4.loop = true;
var bmusic5 = new Audio("resources/bmusic5.mp3");
bmusic5.loop = true;


var backgroundWorker = 0;
var backgroundX = 0;
function movebackground() {
    backgroundWorker = setInterval(
        ()=>{
            backgroundX = backgroundX - 10;
            document.getElementById("background").style.backgroundPositionX = backgroundX+"px";

            if(backgroundX == -10){
                bmusic1.play();
            }

            if(backgroundX == -4870){
                bmusic1.pause();
                bmusic2.play();
                document.getElementById("background").style.backgroundImage = "url('resources/background1.jpg')";
                document.getElementById("background").style.backgroundSize="65%";

            }
            
            if(backgroundX == -7370){
                bmusic2.pause();
                bmusic3.play();
                document.getElementById("background").style.backgroundImage = "url('resources/background2.jpg')";
                document.getElementById("background").style.backgroundSize="76%";
            }
            if(backgroundX == -11120){
                bmusic3.pause();
                bmusic4.play();
                document.getElementById("background").style.backgroundImage = "url('resources/background3.jpg')";
                document.getElementById("background").style.backgroundSize="90%";
            }
        },50
    );

}



//Score Animation
var win = new Audio("resources/win.mp3");

var scoreWorker = 0;
var score = 0;
function updateScore() {
    scoreWorker = setInterval(
        ()=>{
            score = score + 10;
            document.getElementById("score").innerHTML = score;

            if(score == 4980){
                bmusic4.pause();
                win.play();
                document.getElementById("background").style.backgroundImage = "url('resources/background.png')";
                document.getElementById("background").style.backgroundSize= "102%";
                createtrophy();
                createballoons();
                createcelebration();
                createcongratulations(); 
            }

            function createtrophy() {
                var imgTag1 = document.createElement("img");
                imgTag1.src = "resources/trophy.png";
                imgTag1.style.height = "200px";
                imgTag1.style.marginTop = "360px";
                imgTag1.style.marginLeft = "800px";
                imgTag1.style.position = "absolute";
                document.getElementById("background").appendChild(imgTag1);

            }
            function createballoons() {
                var imgTag2 = document.createElement("img");
                imgTag2.src = "resources/balloons.gif";
                imgTag2.style.height = "200px";
                imgTag2.style.marginTop = "300px";
                imgTag2.style.marginLeft = "900px";
                imgTag2.style.position = "absolute";
                document.getElementById("background").appendChild(imgTag2);
            }
            function createcelebration() {
                var imgTag3 = document.createElement("img");
                imgTag3.src = "resources/celebration.gif";
                imgTag3.style.height = "200px";
                imgTag3.style.marginTop = "200px";
                imgTag3.style.marginLeft = "950px";
                imgTag3.style.position = "absolute";
                document.getElementById("background").appendChild(imgTag3);
            }
            function createcongratulations() {
                var imgTag4 = document.createElement("img");
                imgTag4.src = "resources/congratulations.png";
                imgTag4.style.height = "200px";
                imgTag4.style.marginTop = "50px";
                imgTag4.style.marginLeft = "900px";
                imgTag4.style.position = "absolute";
                document.getElementById("background").appendChild(imgTag4);
            }

            if(score == 5000){
                clearInterval(runWorker);
                runSound.pause();
                clearInterval(jumpWorker);
                jumpSound.pause();
                clearInterval(backgroundWorker);
                clearInterval(scoreWorker);
                clearInterval(flameWorker); 
                document.getElementById("line").innerHTML="You Won!";
                document.getElementById("line").style.textShadow="3px 3px yellow";
                document.getElementById("button").style.visibility="visible";
                document.getElementById("button").innerHTML="Restart";
                document.getElementById("button").style.backgroundColor="yellow";
                bmusic5.play();
                //alert("You Won! Restart");
                //window.location.reload();
            }
        },150
    );

}



//Jump Animation
var jumpImage = 1;
var jumpWorker = 0;
var jumpSound = new Audio("resources/jump.mp3");
var jumpMarginTop = 365;
function jump() {
    jumpWorker = setInterval(
        ()=>{
            jumpImage = jumpImage + 1;

            if(jumpImage<8) {
                jumpMarginTop = jumpMarginTop - 30;
                document.getElementById("boy").style.marginTop = jumpMarginTop+"px";
            }
            if(jumpImage>7){
                jumpMarginTop = jumpMarginTop + 30;
                document.getElementById("boy").style.marginTop = jumpMarginTop+"px";
            }
            if(jumpImage == 13){
               jumpImage = 1;
               clearInterval(jumpWorker);
               jumpWorker = 0;
               run();
               runSound.play();
            }
            document.getElementById("boy").src = "resources/jump"+jumpImage+".png";
        },100
    );

}



//Flame Animation
var flameMarginLeftArray = [1000,2000,3000,4000,5000,
    5500,6000,6500,7000,7500,
    7750,8250,8500,9000,9250,9750,10000,10500,10750,11250,
    11500,11750,12000,12250,12500,12750,13000,13250,13500,13750,14000,14500,15000
];
var flameWorker = 0;
var gameOver = false;
var defeat = new Audio("resources/defeat.mp3");
defeat.loop = true;

function createFlame(x) {

    var imgTag = document.createElement("img");
    imgTag.src = "resources/flame.gif";
    imgTag.style.height = "150px";
    imgTag.style.marginTop = "433px";
    imgTag.style.marginLeft = x+"px";
    imgTag.style.position = "absolute";
    document.getElementById("background").appendChild(imgTag);

    flameWorker = setInterval(
        ()=>{

            if (gameOver == false) {
                x = x - 10;
                imgTag.style.marginLeft = x + "px";
            }

            if(x==130){
                if(jumpWorker == 0){
                    gameOver = true;
                    bmusic1.pause();
                    bmusic2.pause();
                    bmusic3.pause();
                    bmusic4.pause();
                    clearInterval(runWorker);
                    runSound.pause();
                    clearInterval(backgroundWorker);
                    clearInterval(scoreWorker);
                    clearInterval(flameWorker);
                    dead();
                    //deadSound.play();
                    defeat.play();
                    document.getElementById("line").innerHTML="Game Over!";
                    document.getElementById("line").style.textShadow="3px 3px green";
                    document.getElementById("button").style.visibility="visible";
                    document.getElementById("button").innerHTML="Try Again";
                    document.getElementById("button").style.backgroundColor="green";
                }
            }
        },50
    );
}



//Dead Animation
var deadImage = 1;
var deadWorker = 0;

function dead() {

    deadWorker = setInterval(
        ()=>{
            deadImage = deadImage + 1;

            if(deadImage == 11){
                deadImage = 10;
                clearInterval(deadWorker);
                clearInterval(jumpWorker);
                jumpSound.pause();
                //alert("Game Over! Try Again");
                //window.location.reload(); 
            }
            document.getElementById("boy").src="resources/dead"+deadImage+".png";
                
        },100
    );

}