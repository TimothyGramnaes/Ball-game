// import { Image } from "p5";

class Goal {  
    goal: any 
    speed: number
    positionX: number
    positionY: number
    // projectile: any
    // projectile2: any
    // projectile3: any


        constructor() {
            this.speed = 5;
            this.positionX = width / 2;
            this.positionY = height / 2;
            this.goal = createSprite(this.positionX, this.positionY, 50, 50);
            this.goal.setCollider('circle', 0, 0, 105)
            this.speed = 8;
            this.goal.setSpeed(this.speed, 30);
            this.goal.addImage(snowBall);

            // this.projectile = projectile;
            // this.projectile2 = projectile2;
            // this.projectile3 = projectile3;

            
        }

    // Gives the goal a starting speed
    setGoalStartSpeed() {
        this.goal.setSpeed(this.speed);
    }    
    // Bounces the goal against wall and bounce and bypasses bounces speed logic.
    bounce(sprite: any){
        this.goal.bounce(sprite)
        this.goal.setSpeed(this.speed)
    }


    // Goal collides with the ball, shrinks, gets faster and creates enemies
    ballCollision(sprite: any) {
        if(this.goal.bounce(sprite)){

            // Goal shrinks after impact with the ball
            this.goal.scale -= 0.2

            // Creates enemy projectiles after impact with the ball
            let projectile = createSprite(this.goal.position.x, this.goal.position.y, 20, 20)
            let projectile2 = createSprite(this.goal.position.x, this.goal.position.y, 20, 20)
            let projectile3 = createSprite(this.goal.position.x, this.goal.position.y, 20, 20)
            drawSprites(projectile, projectile2, projectile3)
            projectile.setSpeed(this.speed, Math.random() * 359)
            projectile2.setSpeed(this.speed, Math.random() * 359)
            projectile3.setSpeed(this.speed, Math.random() * 359)
       

             // Goal becomes faster after impact with the ball
            this.goal.setSpeed(this.speed += 1)

            if(this.goal.scale < 0.2){
                gameIsOver = true;
            }
        }
    }


    // goal becomes faster after collision with the ball
    // goalAccelerate(sprite: any) {
    //     if(this.goal.bounce(sprite)) {
    //     }
    // }
    
    // // creates projectiles from the goal after impact from the ball
    // goalProjectiles(sprite: any) {
    //     if(this.goal.bounce(sprite)) {

    //     }
    // }

    public setup() {
    }

    public draw() {
        
        drawSprite(this.goal);
    }
}


