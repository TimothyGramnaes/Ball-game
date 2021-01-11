
class GameController {
    // private playField: Playfield;
    private projectiles: Projectile[]
    private paddle: Paddle;
    private ball: Ball; 
    private goal: Goal;
    //private isGameRunning: boolean;
    //private gameOver: boolean;
    public walls: Walls;
    private timer: Timer;
    constructor() {  
        this.ball = new Ball();
        this.walls = new Walls();
        this.paddle = new Paddle();        
        this.goal = new Goal(); 
        this.projectiles = []
        this.timer = new Timer();
    }


  

    public update(gameState: GameState, endGameCallback: Function) {
       
        if(gameState !== 'Running') {
            this.ball.ball.setSpeed(0);
            this.goal.sprite.setSpeed(0);

             
 
            
        } else{
            this.ball.update();
            
      

            this.ball.bounce(this.walls.leftWall);
            this.ball.bounce(this.walls.topWall);
            this.ball.bounce(this.walls.rightWall);
            this.ball.bounce(this.walls.bottomWall);

    
            //Bounce ball and paddle
            this.ball.bounce(this.paddle.paddle)
    
            this.paddle.update();

            
            
            // Bounce goal with walls
            this.goal.bounce(this.walls.leftWall);
            this.goal.bounce(this.walls.topWall);
            this.goal.bounce(this.walls.rightWall);
            this.goal.bounce(this.walls.bottomWall);
            
            
            // Bounce goal with ball 


            let projectiles = this.goal.ballCollision(this.ball.ball, endGameCallback)

            this.projectiles.push(...projectiles)
            for(const projectile of this.projectiles) {
                projectile.bounce(this.walls.leftWall);
                projectile.bounce(this.walls.topWall);
                projectile.bounce(this.walls.rightWall);
                projectile.bounce(this.walls.bottomWall);
                
                projectile.paddleCollision(this.paddle.paddle, endGameCallback)
                projectile.ballCollision(this.ball.ball)
                projectile.bounce(this.ball.ball)
                //projectile.rotation -= 2
            }
            this.timer.update();
            
            
            for(const projectile of this.projectiles){
                projectile.update();
            }
            // Projectile collision with paddle
            //this.paddle.bounce(this.projectiles.sprite);

        }
       
    }
  
    public draw(gameState: GameState) {
        for(const projectile of this.projectiles){
            projectile.draw();
        }
        if(gameState === 'Running') {
            this.timer.drawTimer();
        }
        if (gameState === 'GameWon') {
            this.timer.drawHighScore();
        }
        this.paddle.draw()
        this.ball.draw()
        this.goal.draw()
        this.walls.draw()
        this.goal.draw();

        
        // if(gameOver) {  
        //     this.ball.ball.setSpeed(0)
        //     this.goal.sprite.setSpeed(0)
        //     this.ball.speed = 8
        //     this.goal.speed = 5

        if(gameState === 'Running') {
            this.timer.drawTimer();
        }
        else if (gameState === 'GameWon') {
            this.timer.drawHighScore();
        }
   
    }
}

        


