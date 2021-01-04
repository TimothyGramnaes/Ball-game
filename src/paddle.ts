 class Paddle {
    paddle: any
    //ball: sprite
    positionX: number
    positionY: number
    MAX_SPEED: number
    constructor() {
        this.MAX_SPEED = 0.5;
        this.positionX = width / 2; 
        this.positionY = height / 2;
        this.paddle = createSprite(this.positionX, this.positionY)
        this.paddle.setCollider('circle', 0, 0, 38)
        this.paddle.addImage(imagePaddle)
        
        this.paddle.immovable = true;
    }
    


    draw() {
        background(0)
        this.move()
        drawSprite(this.paddle)
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
    }  
}