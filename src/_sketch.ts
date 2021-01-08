interface ISound {
    goalCollide: p5.SoundFile,
    projectileCollide: p5.SoundFile,
    backgroundMusic: p5.SoundFile
    gameOverMusic: p5.SoundFile
}

// //---- GLOBAL VARIABLES ----//


let imageCorona: p5.Image;
let imageBall: p5.Image;
let imagePaddle: p5.Image;
let game: TheGame;
let snowBall: p5.Image; 
let topWall: p5.Image;
let bottomWall: p5.Image;
let leftWall: p5.Image;
let rightWall: p5.Image;

let conf2: p5.Image;


let startGameImg: p5.Image;
let playAgain: p5.Image;
let sounds: ISound;
// /**
//  * Built in preload function in P5
//  * This is a good place to load assets such as
//  * sound files, images etc...
//  */

  
function preload() {
    snowBall = loadImage('./assets/images/goal.png'); //målet
    imageBall = loadImage('./assets/images/ball.png')
    imagePaddle = loadImage('./assets/images/paddle.png')
    conf2 = loadImage('./assets/images/conf2.png')
   

    topWall = loadImage('./assets/images/topwall.png')
    bottomWall = loadImage('./assets/images/bottomwall.png')
    leftWall = loadImage('./assets/images/leftwall.png')
    rightWall = loadImage('./assets/images/rightwall.png')

    startGameImg = loadImage('./assets/images/startthegame.png')
    playAgain = loadImage('./assets/images/playagain.png')

    sounds = {
        goalCollide: loadSound('./assets/music/goalcrash.mp3'),
        projectileCollide: loadSound('./assets/music/ballcollision.mp3'),
        backgroundMusic: loadSound('./assets/music/jazzy.mp3'),
        gameOverMusic: loadSound('./assets/music/gameover.mp3')
    }

    //     // Tyvärr har jag inte fått till den globala typningen för
    //     // inladdningen av ljud men fungerar bra enligt nedan..
    //     // sound = (window as any).loadSound('../assets/mySound.wav');

}


// /**
//  * Built in setup function in P5
//  * This is a good place to create your first class object
//  * and save it as a global variable so it can be used
//  * in the draw function below
//  */

function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(60);    
    game = new TheGame();
    textSize(40)
    sounds.backgroundMusic.play();
    sounds.backgroundMusic.setVolume(.08);
    sounds.gameOverMusic.setVolume(.5);
  
}

// /**
//  * Built in draw function in P5
//  * This is a good place to call public methods of the object
//  * you created in the setup function above
//  */
function draw() {
    background("#f7ede2")
    game.update();
    game.draw();
}

// /**
//  *  Built in windowResize listener function in P5
//  */
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}