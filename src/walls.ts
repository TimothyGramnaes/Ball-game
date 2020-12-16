class Walls {
    
    topWall: any
    bottomWall: any
    rightWall: any
    leftWall: any

    constructor() {
      
 
        this.topWall = createSprite(width / 2, 1, width, 10)
        this.rightWall = createSprite(width - 1, height / 2 , 10, height)
        this.bottomWall = createSprite(width / 2, height - 1, width, 10)
        this.leftWall = createSprite(1 , height / 2, 10, height)
        this.topWall.immovable = true;
        this.rightWall.immovable = true;
        this.leftWall.immovable = true;
        this.bottomWall.immovable = true;
        
        
    }
    public draw() {
   
        drawSprite(this.topWall);
        drawSprite(this.rightWall);
        drawSprite(this.leftWall);
        drawSprite(this.bottomWall);
    }
}


