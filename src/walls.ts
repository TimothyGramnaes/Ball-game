class Walls {
    
    topWall: any
    bottomWall: any
    rightWall: any
    leftWall: any

    constructor() {
        this.topWall = createSprite(width / 2, -50, width, 100)
        this.rightWall = createSprite(width - 50, height / 2 , 100, height)
        this.bottomWall = createSprite(width / 2, height -50, width, 100)
        this.leftWall = createSprite(50 , height / 2, 100, height)
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


