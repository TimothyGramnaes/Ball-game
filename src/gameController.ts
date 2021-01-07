
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


  

    public update() {
       
        if(isGameRunning === false) {
            this.ball.ball.setSpeed(0);
            this.goal.sprite.setSpeed(0);
            
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

            let projectiles = this.goal.ballCollision(this.ball.ball)
            this.projectiles.push(...projectiles)
            for(const projectile of this.projectiles) {
                projectile.bounce(this.walls.leftWall);
                projectile.bounce(this.walls.topWall);
                projectile.bounce(this.walls.rightWall);
                projectile.bounce(this.walls.bottomWall);
            }
            this.timer.update();
            
            
           // Bounce paddle with walls 
           //this.projectiles.draw()
           //this.projectiles = new Projectiles(this.goal.goal)

            // drawSprite(this.projectiles.projectile)
            // drawSprite(this.projectiles.projectile2)
            // drawSprite(this.projectiles.projectile3)
            // this.projectiles.draw(); 
        }
       
    }
  
    public draw() {
        for(const projectile of this.projectiles){
            projectile.draw();
        }
        this.paddle.draw()
        this.ball.draw()
        this.goal.draw()
        this.walls.draw()
        this.goal.draw();

        if(isGameRunning === true) {
            this.timer.draw();
        } 

        //this.timer.draw();        
        // if(gameOver) {
        //    
        //    this.ball.ball.setSpeed(0)
        //    this.goal.sprite.setSpeed(0)
        //    this.ball.speed = 8
        //    this.goal.speed = 5
        // }
    }
}

        


