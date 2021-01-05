class Ball {
        
    ball: any
    radius: any
    position: any
    // color: number
    speed: number

            
    constructor() {
        this.radius = 30
        this.position = createVector(200, 200)
                
        this.ball = createSprite(this.position.x, this.position.y, this.radius, this.radius);
        this.ball.setCollider('circle', 0, 0, 40);
        this.ball.addImage(imageBall)
    
        this.speed = 5
        this.ball.setSpeed(this.speed, -240)
        // this.velocity = createVector(this.speed, -this.speed);
       
    }

    bounce(sprite: any) {
        this.ball.bounce(sprite)
        // // Bounces the ball on left and right wall
        // if (this.position.x > width - (this.radius / 2) - 10 || this.position.x < (this.radius /2) +10) {
        //     this.maxSpeed.x *= -1;
        // } 
        // // Bounces the ball on the top and bottom wall
        // if (this.position.y > height - (this.radius / 2) - 10 || this.position.y < (this.radius / 2) + 10) {
        //     this.maxSpeed.y *= -1;
        // }
    }
   
    public draw() {
        drawSprite(this.ball);
    }

     public update() {
      //  this.position.add(this.velocity);
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