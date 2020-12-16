class Ball {

    // private color = String;
    // private width = Number;
    // private height = Number;
    // private speed = Number; 
    // private sprite = any;
    
            
    ball: any
            
    constructor() {

        var speed = 2; 

        this.ball = createSprite(200, 200, 30, 30)
        this.ball.shapeColor = 255;
        this.ball.maxSpeed = speed; 
        this.ball.setSpeed(speed, -240)
    }

    
   
    public draw() { 

        drawSprite(this.ball)
        clear; 
    }



    
}
// constructor() {

//     this.color = color(128, 0, 128);

//     this.radius = 15
//     this.size = this.radius * 2;
//     this.location = createVector(paddle.sprite.x + (paddle.width / 2), paddle.sprite.y - this.radius -5)
//     this.velocity = createVector(5, -5)
//     this.paddle = paddle;

//     var MAX_SPEED = 10;

//     const location = createVector((width / 2), (height / 2));
    
//     const ballWidth = 30
//     const ballHeight = 30
//     this.sprite = createSprite(location.x, location.y, ballWidth, ballHeight);
//     this.sprite.shapeColor = 255;
//     this.sprite.maxSpeed = MAX_SPEED;
//     this.sprite.setSpeed(MAX_SPEED, -240);
//     // sprite.draw = function() { ellipse(0,0,15,15) }
// }