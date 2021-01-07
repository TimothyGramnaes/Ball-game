
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
    private timer: Timer;
    constructor() {
        isGameRunning = false
        this.startScreen = new StartScreen(this.startGame)
        

        gameOver = false; 
        this.endScreen = new EndScreen(this.endGame, this.restartGame)

        restartGame = false;
        
        this.ball = new Ball()
        this.walls = new Walls()
        this.paddle = new Paddle()        
        this.goal = new Goal();   
        this.timer = new Timer(); 
    }

    private startGame() {
        isGameRunning = true; 
        restartGame = false;
    }

    private endGame() {
        gameOver = true;
    }

    restartGame() {
        restartGame = true;
    }
    public update() {
        if(isGameRunning === false) {
            this.ball.ball.setSpeed(0);
            this.goal.goal.setSpeed(0);
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

            this.goal.ballCollision(this.ball.ball)
            //this.timer.draw()
    
            // Bounce paddle with walls 
        }
        this.startScreen.update();

        this.endScreen.update();
        
        if(restartGame) {
            gameOver = false;
            gameIsOver = false;
            isGameRunning = false;
            this.resetGame();
            this.timer.startTimer();
        }
    }
    
    resetGame() {
        this.goal.goal.scale = 1;
       
        this.goal.goal.position.x = this.goal.positionX
        this.goal.goal.position.y = this.goal.positionY

        this.ball.ball.position.x = 200
        this.ball.ball.position.y = 200   
    }
  
    public draw() {
        // background(0)
        this.paddle.draw()
        this.ball.draw()
        this.goal.draw()
        this.walls.draw()
        this.goal.draw();
        //this.timer.draw();

        if (isGameRunning === false) {
            this.startScreen.draw();

        } 
        if (isGameRunning === true) {
            this.timer.draw();
        }
        
        if(gameOver) {
           this.endScreen.draw();
           this.ball.ball.setSpeed(0)
           this.goal.goal.setSpeed(0)
           this.ball.speed = 8
           this.goal.speed = 5
           this.timer.stopTimer()
        }
        
    }
}

        


