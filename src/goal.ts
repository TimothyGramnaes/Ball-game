// import { Image } from "p5";

class Goal {  
    sprite: any 
    speed: number
  
        constructor() {
            this.speed = 10;
            
            this.sprite = createSprite(width / 2, height / 2, 50, 50);
            this.sprite.setCollider('circle', 0, 0, 105)
            this.speed = 8;
            this.sprite.setSpeed(this.speed, Math.random() * 360);
            this.sprite.addImage(snowBall); 
        }

    // Gives the goal a starting speed
  
    // Bounces the goal against wall and bounce and bypasses bounces speed logic.
    bounce(sprite: any){
        this.sprite.bounce(sprite)
        this.sprite.setSpeed(this.speed)
    }


    // Goal collides with the ball, shrinks, gets faster and creates enemies
    ballCollision(sprite: any, endGameCallback: Function) {
        let projectiles: Projectile[] = []
        if(this.sprite.bounce(sprite)){
            projectiles.push(new Projectile(this))
            projectiles.push(new Projectile(this))
            projectiles.push(new Projectile(this))
            projectiles.push(new Projectile(this))
            // Goal shrinks after impact with the ball
            this.sprite.scale -= 0.2


            // Creates enemy projectiles after impact with the ball      

             // Goal becomes faster after impact with the ball
            this.sprite.setSpeed(this.speed += 1)
            sounds.goalCollide.play()
            if(this.sprite.scale < 0.2){
                endGameCallback(true);
                endGameCallback(false)
                this.sprite.remove()
            
            }
        }
        return projectiles
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
        drawSprite(this.sprite);
    }
}


