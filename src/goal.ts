// import { Image } from "p5";

class Goal {  
    goal: any 
    speed: number
    positionX: number
    positionY: number


        constructor() {
            this.positionX = width / 2;
            this.positionY = height / 2;
            this.goal = createSprite(this.positionX, this.positionY, 50, 50);
            this.goal.setCollider('circle', 0, 0, 105)
            this.speed = 8;
            this.goal.setSpeed(this.speed, 30);
            this.goal.addImage(snowBall);
        }

    
    setGoalStartSpeed() {
        this.goal.setSpeed(this.speed);
    }    

    bounce(sprite: any){
        this.goal.bounce(sprite)
        this.goal.setSpeed(this.speed)
    }
    
    bounceShrink(sprite: any) {
        if(this.goal.bounce(sprite)){
            this.bounceSmaller();
            this.goal.setSpeed(this.speed)
            this.goalAccelerate(sprite);
            this.createProjectiles();
            if(this.goal.scale < 0.1){
                gameIsOver = true;
            }
        }
    }

    bounceSmaller(){
        this.goal.scale -= 0.1
    }

    goalAccelerate(sprite: any) {
        if(this.goal.bounce(sprite)) {
            this.goal.setSpeed(this.speed += 1.2)
        }
    }

    createProjectiles() {
        let projetile = createSprite(this.goal.position.x, this.goal.position.y, 50, 10)
        projetile.setSpeed(3, Math.random() * 359)
        //drawSprite(projetile)
    }
    

    public setup() {
    }

    public draw() {
        //drawSprites();
        //background(0);
    }
}


