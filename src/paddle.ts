 class Paddle {
    paddle: any
    positionX: number
    positionY: number
    //MAX_SPEED: number

    health1: any
    health2: any
    health3: any

    constructor() {
        this.positionX = width / 2; 
        this.positionY = height / 2;
        this.paddle = createSprite(this.positionX, this.positionY)
        this.paddle.setCollider('circle', 0, 0, 38)
        this.paddle.addImage(imagePaddle)
        
        this.paddle.immovable = true;

        this.health1 = createSprite(width - 120, 50)
        this.health2 = createSprite(width - 85, 50)
        this.health3 = createSprite(width - 50, 50)
        this.health1.addImage(healthImage)
        this.health2.addImage(healthImage)
        this.health3.addImage(healthImage)
    }
    
    draw() {
        this.paddle.position.x = mouseX;
        this.paddle.position.y = mouseY;
        drawSprite(this.paddle)
        drawSprite(this.health1)
        drawSprite(this.health2)
        drawSprite(this.health3)
    }

    
    update() {
        
    }

}