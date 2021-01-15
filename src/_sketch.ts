

interface ISound {
    backgroundMusic: p5.SoundFile,
    goalCollide: p5.SoundFile,
    projectileCollide: p5.SoundFile,
    ballCollide: p5.SoundFile,
    projectileCollect: p5.SoundFile,
    applause: p5.SoundFile,
    gameOver: p5.SoundFile,
}

// //---- GLOBAL VARIABLES ----//

let game: TheGame;

// Interface for sound
let sounds: ISound;

// Load all images for the game
let imageBall: p5.Image;
let imagePaddle: p5.Image;
let snowBall: p5.Image; 

let topWall: p5.Image;
let bottomWall: p5.Image;
let leftWall: p5.Image;
let rightWall: p5.Image;

let conf1: p5.Image;
let conf2: p5.Image;
let conf3: p5.Image;
let conf4: p5.Image;

let startGameImg: p5.Image;
let playAgain: p5.Image;
let dieImage: p5.Image;
let healthImage: p5.Image;
let volumeUp: p5.Image; 
let volumeOff: p5.Image; 
 
function preload() {
    // Images
    snowBall = loadImage('./assets/images/goal.png'); 
    imageBall = loadImage('./assets/images/ball1.png');
    imagePaddle = loadImage('./assets/images/paddle.png');

    conf1 = loadImage('./assets/images/conf2.png');
    conf2 = loadImage('./assets/images/conf3.png');
    conf3 = loadImage('./assets/images/conf4.png');
    conf4 = loadImage('./assets/images/conf1.png');
    volumeUp = loadImage('./assets/images/volume_up.png');
    volumeOff = loadImage('./assets/images/volume_off.png');

    topWall = loadImage('./assets/images/topwall.png');
    bottomWall = loadImage('./assets/images/bottomwall.png');
    leftWall = loadImage('./assets/images/leftwall.png');
    rightWall = loadImage('./assets/images/rightwall.png');

    startGameImg = loadImage('./assets/images/play.png');
    playAgain = loadImage('./assets/images/playagain.png');

    healthImage = loadImage('./assets/images/heart.png');
    dieImage = loadImage('./assets/images/die.png');

    sounds = {
        backgroundMusic: loadSound('./assets/music/jazzy.mp3'),
        goalCollide: loadSound('./assets/music/goalcrash.mp3'),
        applause: loadSound('./assets/music/applause.wav'),
        gameOver: loadSound('./assets/music/oohNoo.wav'),
        
        projectileCollide: loadSound('./assets/music/ballcollision.mp3'),
        ballCollide: loadSound('./assets/music/ballonWalls.wav'),
        projectileCollect: loadSound('./assets/music/ballOnConfetti.wav'),
    }
}

// Starts the canvas for the game
function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(60);    
    game = new TheGame();
    textSize(40);
    noCursor();
    
    (window as any).getAudioContext().suspend();
    sounds.backgroundMusic.play();
    sounds.backgroundMusic.setVolume(.08);
    sounds.backgroundMusic.setLoop(true);
}

// Draws the game
function draw() {
    background("#f7ede2");
    game.update();
    game.draw();
}

//   Built in windowResize listener function in P5
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function keyPressed() {
    userStartAudio(); 
}