// import { Image } from "p5";

class Goal {  
    goal: any 
    speed: number
    positionX: number
    positionY: number

        constructor() {
            this.speed = 5;
            this.positionX = width / 2;
            this.positionY = height / 2;
            this.goal = createSprite(this.positionX, this.positionY, 50, 50);
            this.goal.setCollider('circle', 0, 0, 105)
            this.speed = 0;
            this.goal.setSpeed(this.speed, 30);
            this.goal.addImage(snowBall);
        }

    
    setGoalStartSpeed() {
        this.goal.setSpeed(3)
    }    

    bounce(sprite: any){
        this.goal.bounce(sprite)
        this.goal.setSpeed(this.speed)
    }
    
    bounceShrink(sprite: any) {
        if(this.goal.bounce(sprite)){
            this.goal.scale -= 0.2
            this.goal.setSpeed(3)
            if(this.goal.scale < 0.2){
                gameIsOver = true;
            }
        }
    }

    goalAccelerate(sprite: any) {
        if(this.goal.bounce(sprite)) {
            this.goal.setSpeed(this.speed += 2)
        }
    }
    

    public setup() {


    }

    
    
    public draw() {
        //drawSprites();
        //background(0); 
    }
}


