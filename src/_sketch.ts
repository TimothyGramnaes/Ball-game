// //---- GLOBAL VARIABLES ----//


let imageCorona: p5.Image
let imageBall: p5.Image
let game: TheGame;
let snowBall: p5.Image; 

// /**
//  * Built in preload function in P5
//  * This is a good place to load assets such as
//  * sound files, images etc...
//  */

  
function preload() {
    snowBall = loadImage('./assets/images/ball.png'); //målet
    imageCorona = loadImage('./sun.png')
    imageBall = loadImage('./shot.png')
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