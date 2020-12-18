class Ball {

    public ball: any 
    
    private radius: number; 
    private speed: number; 
    
    constructor() {
        
        this.radius = 40
        this.speed = 3
        
        this.ball = createSprite(200, 200, this.radius, this.radius)
        this.ball.setCollider("circle", 0, 0, this.radius)
        this.ball.setSpeed(this.speed, -310)
    }
    
    bounce(sprite: any) {
        this.ball.bounce(sprite)
    }

    update() {

    }
    
    draw() {
        drawSprite(this.ball)
    }
    
}