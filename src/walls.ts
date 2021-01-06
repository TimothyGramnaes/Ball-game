class Walls {
    
    topWall: any
    bottomWall: any
    rightWall: any
    leftWall: any

    constructor() {
        this.topWall = createSprite(width / 2, -20, width, 55)
        this.rightWall = createSprite(width + 20, height / 2 , 55, height)
        this.bottomWall = createSprite(width / 2, height + 20, width, 55)
        this.leftWall = createSprite(-20 , height / 2, 55, height)
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


