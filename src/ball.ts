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
        this.ball.setSpeed(this.speed, Math.random() * 360)
        
        // this.velocity = createVector(this.speed, -this.speed);

    }


    public draw() {
        drawSprite(this.ball);
    }

    bounce(sprite: any) {

        
        this.ball.setSpeed(this.speed)

        if(this.ball.bounce(sprite)) {
            sounds.ballCollide.play();
        }
         
        
        



    }

    public update() {

    }

    bounceWalls(sprite: any) {
            if(this.ball.bounce(sprite)) {
                sounds.ballCollide.play();
            }
    }    
}
