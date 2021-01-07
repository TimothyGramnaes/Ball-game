interface ISounds {
    backgroundMusic: p5.SoundFile;
}

// //---- GLOBAL VARIABLES ----//


let imageCorona: p5.Image;
let imageBall: p5.Image;
let imagePaddle: p5.Image;
let game: TheGame;
let snowBall: p5.Image; 
let backgroundImage: p5.Image;
let isGameRunning: boolean;
let restartGame: boolean;
let gameOver: boolean;
let gameIsOver: boolean;
let soundes: ISounds;


// /**
//  * Built in preload function in P5
//  * This is a good place to load assets such as
//  * sound files, images etc...
//  */

  
function preload() {
    snowBall = loadImage('./assets/images/goal.png'); //målet
    imageBall = loadImage('./assets/images/ball.png')
    imagePaddle = loadImage('./assets/images/paddle.png')
    soundes = {
        backgroundMusic: loadSound('./assets/music/megan.mp3'),
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

    // volume_up volume_off material icons

    soundes.backgroundMusic.play();
    soundes.backgroundMusic.setVolume(0.1);
}

// /**
//  * Built in draw function in P5
//  * This is a good place to call public methods of the object
//  * you created in the setup function above
//  */
function draw() {
    background('blue'); 
    game.update();
    game.draw();

}

// /**
//  *  Built in windowResize listener function in P5
//  */
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}