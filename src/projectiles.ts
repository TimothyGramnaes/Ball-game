class Projectile {
    private speed: number;
    private sprite: any;
    private conf: number;

    constructor(goal: Goal) {
        this.speed = 5;
        this.sprite = createSprite(goal.sprite.position.x, goal.sprite.position.y, 20, 20);
        this.sprite.setSpeed(this.speed, Math.random() * 359);

        this.sprite.setCollider('circle', 0, 0, 10);
        conf1.resize(0, 40);
        conf2.resize(0, 40);
        conf3.resize(0, 40);
        conf4.resize(0, 40);

        // Generates random picture for confetti
        this.conf = Math.floor(Math.random() * 4) +1;
        // Assigns a number to each confetti-image
        if (this.conf == 1) {
            this.sprite.addImage(conf1);            
        } if (this.conf == 2) {
            this.sprite.addImage(conf2);             
        } if (this.conf == 3) {
            this.sprite.addImage(conf3); 
        } if (this.conf == 4) {
            this.sprite.addImage(conf4);
        }
    }

    public paddleCollision(sprite: any, endGameCallback: Function, health: any, health2: any, health3:any) {
        // Shrinks paddle on collission with sprites
        if (this.sprite.bounce(sprite)) {
            sounds.projectileCollide.play();
             sprite.scale -= 0.2;

            // Ends game after three hits
            if(sprite.scale < 0.6){
                sprite.remove();
                endGameCallback(false);
            }

            // Removes a heart upon collision with confetti
            if(sprite.scale < 0.9) {
                health.addImage(dieImage);
            }
            if(sprite.scale < 0.7) {
                health2.addImage(dieImage);
            }
            if(sprite.scale < 0.6) {
                health3.addImage(dieImage);
            }
        }
    }

    // Ball collides with confetti
    public ballCollision(sprite: any, setScoreCallback: Function) {
        if (this.sprite.bounce(sprite)) {
            this.sprite.remove();
            setScoreCallback(); 
            sounds.projectileCollect.play();  
        }
    }
    
    // Confetti bounces on walls
    public bounce(sprite: any){
        this.sprite.bounce(sprite);
        this.sprite.setSpeed(this.speed);
    }

    public update() {
        // Makes the confetti rotate
        this.sprite.rotation -= 2;
    }

    public draw() {
        drawSprite(this.sprite);
    }
 
}
