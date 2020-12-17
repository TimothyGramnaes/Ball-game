// import { Image } from "p5";


class Goal {  
    
    public setup() {

        snowBallSprite = createSprite(200,200,0,0);
        snowBallSprite = addImage(snowBall);
    }

    
    
    public draw() {
        image(snowBall, 2, 2);
        
    drawSprites();
}


