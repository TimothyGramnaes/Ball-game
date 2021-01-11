class Projectile {
    
    speed: number
    sprite: any
    conf: number



    constructor(goal: Goal) {
        this.speed = 5;
        this.sprite = createSprite(goal.sprite.position.x, goal.sprite.position.y, 20, 20)
        this.sprite.setSpeed(this.speed, Math.random() * 359)
    

        this.sprite.setCollider('circle', 0, 0, 10);
        conf1.resize(0, 40);
        conf2.resize(0, 40);
        conf3.resize(0, 40);

        this.conf = Math.floor(Math.random() * 3) +1;
        if (this.conf == 1) {
            this.sprite.addImage(conf1);            
        } if (this.conf == 2) {
            this.sprite.addImage(conf2);             
        } if (this.conf == 3) {
            this.sprite.addImage(conf3); 
        }

       // this.sprite.rotation -= 2
        // this.projectile2.setSpeed(this.speed, Math.random() * 359)
        // this.projectile3.setSpeed(this.speed, Math.random() * 359)

        
    }

    paddleCollision(sprite: any, endGameCallback: Function) {
        // Shrink paddle on collission with sprites
        if (this.sprite.bounce(sprite)) {
            sounds.projectileCollide.play()
             sprite.scale -= 0.2
            if(sprite.scale < 0.6){
                sprite.remove()
                endGameCallback(false);

            }

        }

    }

    ballCollision(sprite: any) {
        if (this.sprite.bounce(sprite)) {
            this.sprite.remove()
        }
    }
    

    bounce(sprite: any){
        this.sprite.bounce(sprite)
        this.sprite.setSpeed(this.speed)
    }

    public update() {
        this.sprite.rotation -= 2

    }

    public draw() {
        drawSprite(this.sprite)

    }
    
}
