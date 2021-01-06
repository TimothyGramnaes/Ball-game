class TheGame {
    private startScreen: StartScreen;
    // private endScreen: EndScreen;
    // private playField: Playfield;
    private paddle: Paddle;
    private ball: Ball; 
    private goal: Goal;
    private isGameRunning: boolean;
    // private gameOver: boolean;
    public walls: Walls;
    public timer: Timer;
    
    constructor() {
        this.isGameRunning = false;
        this.startScreen = new StartScreen(this.startGame)

        // this.gameOver = false;
        this.ball = new Ball()
        this.walls = new Walls()

        this.paddle = new Paddle()        
        this.goal = new Goal();
        this.timer = new Timer();
    }

    private startGame() {
        this.isGameRunning = true;
        console.log(this.isGameRunning)
    }

    public update() {
        this.timer.update();
        this.startScreen.update();

        this.ball.update();
        
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
    
    public draw() {
        
        this.ball.draw();
        this.walls.draw();
       
        // if (this.isGameRunning) {
        //     fill(255)
        //     circle(100, 100, 60)
        //     console.log(this.isGameRunning)
        // } else {
        //     this.startScreen.draw();
        // }
      
        this.paddle.draw()
        this.goal.draw();       
        drawSprites();
        this.timer.draw();
    }
}

        


