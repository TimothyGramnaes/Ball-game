class Ball {
        
    ball: any
    radius: any
    position: any
    speed: number
  

            
    constructor() {
        this.radius = 30
        this.position = createVector(200, 200)
                
        this.ball = createSprite(this.position.x, this.position.y, this.radius, this.radius);
        this.ball.setCollider('circle', 0, 0, 27); 

        this.ball.addImage(imageBall) 
        this.speed = 8;
        this.ball.setSpeed(this.speed, -240)   
    }


    public draw() {
        drawSprite(this.ball);
    }

    bounce(sprite: any) {
        this.ball.bounce(sprite)

        this.ball.setSpeed(this.speed)
    }

    public update() {
    
    }

    bounceWalls() {
 
    }




    
}
