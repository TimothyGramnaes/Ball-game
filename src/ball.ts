class Ball {

    // private color = String;
    // private width = Number;
    // private height = Number;
    // private speed = Number; 
    // private sprite = any;
    
            
    ball: any
    radius: any
    position: any
    color: number
    speed: number
    velocity: any
            
    constructor() {

        // var speed = 2; 

        // this.ball = createSprite(200, 200, 30, 30)
        // this.color = 255;
        // this.ball.maxSpeed = speed; 
        // this.ball.setSpeed(speed, -240)

        this.radius = 60
        this.position = createVector(200, 200)

 

        this.color = 255
        this.speed = 2
        this.velocity = createVector(this.speed, -this.speed)
        this.ball;
    }

    bounce() {
        // Bounces the ball on left and right wall
        if (this.position.x > width - (this.radius / 2) - 10 || this.position.x < (this.radius /2) +10) {
            this.velocity.x *= -1;
        } 
        // Bounces the ball on the top and bottom wall
        if (this.position.y > height - (this.radius / 2) - 10 || this.position.y < (this.radius / 2) + 10) {
            this.velocity.y *= -1;
        }


    }
   
    public draw() { 
        fill(this.color)
        ellipse(this.position.x, this.position.y, this.radius, this.radius)
        this.bounce();

      
    }

     public update() {
        this.position.add(this.velocity);
     }

    bounceWalls() {
    //    this.ball.bounce(wallTop);
    //    this.ball.bounce(wallBottom);
    //    this.ball.bounce(wallLeft);
    //    this.ball.bounce(wallRight);
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