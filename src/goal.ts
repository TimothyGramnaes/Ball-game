// import { Image } from "p5";

class Goal {  
    goal: any 
    maxSpeed: number
    positionX: number
    positionY: number
        constructor() {
            this.maxSpeed = 3;
            this.positionX = width / 2;
            this.positionY = height / 2;
            this.goal = createSprite(this.positionX, this.positionY, 50, 50);
            this.goal.addImage(snowBall);
            this.goal.setSpeed(this.maxSpeed, 30);
        }

        public shrink() {
            if (mouseIsPressed) { //byt ut mouseIsPressed till bounce()
               this.goal.scale -= 0.2
               this.goal.setSpeed(this.maxSpeed, 30);
               if (this.goal.scale < 0.2) {
                    this.goal.scale = 0;
               }
            } 
        }


    public setup() {


    }

    
    
    public draw() {
        drawSprites();
        this.shrink();
        background(0);
       
    }
}


