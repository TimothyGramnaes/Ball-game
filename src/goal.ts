class Goal {  
    public sprite: any 
    private speed: number
        constructor() {
            this.speed = 10;          
            this.sprite = createSprite(width / 2, height / 2, 50, 50);
            this.sprite.setCollider('circle', 0, 0, 105);
            this.speed = 10;
            this.sprite.setSpeed(this.speed, Math.random() * 360);
            this.sprite.addImage(snowBall);  
        }
  
    // Bounces the goal against wall and bounce and bypasses bounces speed logic.
    public bounce(sprite: any){
        this.sprite.bounce(sprite);
        this.sprite.setSpeed(this.speed);
    }

    // Goal collides with the ball, shrinks, gets faster and creates enemies
    public ballCollision(sprite: any, endGameCallback: Function, ballCollisionCallback: Function) {
        // Creates enemy projectiles after impact with the ball      
        let projectiles: Projectile[] = []
        if(this.sprite.bounce(sprite)){
            projectiles.push(new Projectile(this));
            projectiles.push(new Projectile(this));
            projectiles.push(new Projectile(this));
            projectiles.push(new Projectile(this));

            // Goal shrinks after impact with the ball
            this.sprite.scale -= 0.1;
            sounds.goalCollide.play();
            ballCollisionCallback();

            // Goal becomes faster after impact with the ball
            this.sprite.setSpeed(this.speed += .5);

            if(this.sprite.scale < 0.2){
                endGameCallback(true);            
                this.sprite.remove(); 
            }
        }
        return projectiles
    }

   public draw() {
        drawSprite(this.sprite);
    }
}


