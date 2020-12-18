class TheGame {
    private startScreen: StartScreen;
    // private endScreen: EndScreen;
    // private playField: Playfield;
    // private paddle: Paddle;
    public ball: Ball; 
    // private goal: Goal;
    private isGameRunning: boolean;
    // private gameOver: boolean;
    public walls: Walls;
    
    constructor() {
        this.isGameRunning = false;
        this.startScreen = new StartScreen(this.startGame)
        // this.gameOver = false;
        this.ball = new Ball()
        console.log(this.isGameRunning)
        this.walls = new Walls()
    }

    private startGame() {
        this.isGameRunning = true;
        console.log(this.isGameRunning)
    }

    public update() {
        this.startScreen.update();
        this.ball.update();
        
        this.ball.bounce(this.walls.leftWall);
        this.ball.bounce(this.walls.topWall);
        this.ball.bounce(this.walls.rightWall);
        this.ball.bounce(this.walls.bottomWall);
        // this.ball.bounce(this.goal.sprite)
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
      
    }
}


