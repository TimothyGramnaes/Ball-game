 class Paddle {
    paddle: any
    positionX: number
    positionY: number
    
    constructor() {
        this.positionX = width / 2; 
        this.positionY = height / 2;
        this.paddle = createSprite(this.positionX, this.positionY)
        this.paddle.setCollider('circle', 0, 0, 38)
        this.paddle.addImage(imagePaddle)
        
        this.paddle.immovable = true;
    }
    
    draw() {
        this.paddle.position.x = mouseX;
        this.paddle.position.y = mouseY;
        drawSprite(this.paddle)
    }

    
    update() {
        
    }

}