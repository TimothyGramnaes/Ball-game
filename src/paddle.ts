 
class Paddle {
    paddle: sprite
    ball: sprite
    positionX: number
    positionY: number
    constructor() {
        this.positionX = width / 2; 
        this.positionY = height / 2;
        this.paddle = createSprite(this.positionX, this.positionY, 50, 50)
        this.paddle.setCollider('circle', 50, 50, 38)
        this.paddle.addImage(imageBall)
        this.ball = createSprite(this.positionX, this.positionY - 30, 20, 20)
        this.ball.setCollider('circle', 50, 50, 38)
        this.ball.addImage(imageCorona)
        this.paddle.immovable = true;
    }
    
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

        this.ball.position.x += 1
    }

    bounce() {
        this.ball.bounce(this.paddle)
    }
}