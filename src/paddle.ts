 class Paddle {
    paddle: sprite
    //ball: sprite
    positionX: number
    positionY: number
    MAX_SPEED: number
    constructor() {
        this.MAX_SPEED = 0.5;
        this.positionX = width / 2; 
        this.positionY = height / 2;
        this.paddle = createSprite(this.positionX, this.positionY)
        this.paddle.setCollider('circle', 50, 50, 38)
        this.paddle.addImage(imageBall)
        // this.ball = createSprite(this.positionX, this.positionY - 100)
        // this.ball.setCollider('circle', 50, 50, 38)
        // this.ball.maxSpeed = this.MAX_SPEED;
        // this.setStartMovement()
        // this.ball.addImage(imageCorona)
        // this.paddle.immovable = true;
    }
    
    // setStartMovement() {
    //     this.ball.setSpeed(this.MAX_SPEED, 120)
    // }

    draw() {
        background(0)
        this.move()
        this.bounce()
        drawSprites()
    }

    
    update() {}

    move() {
        if(keyIsDown(39)){
            this.paddle.position.x += 4
        }
        if(keyIsDown(37)){
            this.paddle.position.x -= 4
        }
        if(keyIsDown(38)){
            this.paddle.position.y -= 4
        }
        if(keyIsDown(40)){
            this.paddle.position.y += 4
        }

        //this.ball.position.x += 1
        //this.ball.setSpeed(1, 160)
    }

    bounce() {
        //this.ball.bounce(this.paddle) //{
        //     this.ball.scale -= 0.2
        //     if(this.ball.scale < 0.2){
        //         this.ball.scale = 0   
        //     }
        // }
    }

   
}