
class TheGame {
    private startScreen: StartScreen;
    private endScreen: EndScreen;
    // private playField: Playfield;
    private paddle: Paddle;
    private ball: Ball; 
    private goal: Goal;
    //private isGameRunning: boolean;
    //private gameOver: boolean;
    public walls: Walls;
    constructor() {
        isGameRunning = false
        this.startScreen = new StartScreen(this.startGame)

        gameOver = false; 
        this.endScreen = new EndScreen(this.endGame)
        
        this.ball = new Ball()
        this.walls = new Walls()
        this.paddle = new Paddle()        
        this.goal = new Goal();    
    }

    private startGame() {
        isGameRunning = true; 
    }

    private endGame() {
        gameOver = true;
    }

    public update() {
        if(isGameRunning === false) {
            //this.ball.speed = 0;
            //this.goal.speed = 0;
        } else{
            this.ball.update();
            this.goal.setGoalStartSpeed();
            this.ball.setBallStartSpeed();
            //this.goal.speed = 3;
            //this.ball.speed = 3;
            this.ball.bounce(this.walls.leftWall);
            this.ball.bounce(this.walls.topWall);
            this.ball.bounce(this.walls.rightWall);
            this.ball.bounce(this.walls.bottomWall);
            // this.ball.bounce(this.goal.sprite)
    
            //Bounce ball and paddle
            this.ball.bounce(this.paddle.paddle)
    
            this.paddle.update();
    
            // Bounce goal with walls
            this.goal.bounce(this.walls.leftWall);
            this.goal.bounce(this.walls.topWall);
            this.goal.bounce(this.walls.rightWall);
            this.goal.bounce(this.walls.bottomWall);
    
            // Bounce goal with ball 
            this.goal.bounceShrink(this.ball.ball)
    
            // Bounce paddle with walls 
        }
        this.startScreen.update();

        this.endScreen.update();


    }
    
    public draw() {
        background(0)
        this.paddle.draw()
        this.ball.draw()
        this.goal.draw()
        drawSprites()

        if (isGameRunning === false) {
            this.startScreen.draw();
        } 
        
        if(gameOver) {
           this.endScreen.draw();
        }
    }
}

        


