class GameController {
    private projectiles: Projectile[];
    private paddle: Paddle;
    private ball: Ball;
    private goal: Goal;
    private volumeButton: volumeButton;
    private timer: Timer;
    private score: number;
    private walls: Walls;
   
    constructor() {
        this.ball = new Ball();
        this.walls = new Walls();
        this.paddle = new Paddle();
        this.goal = new Goal();
        this.timer = new Timer();
        this.volumeButton = new volumeButton();
        this.projectiles = [];
        this.score = 0;
    }

    public update(gameState: GameState, endGameCallback: Function) {
        // If the game is paused(not running) the goal and the ball will stand still
        if (gameState !== 'Running') {
            this.ball.ball.setSpeed(0);
            this.goal.sprite.setSpeed(0);
        } else {
            // The game is running
            this.timer.update();

            // Bounce ball with walls
            this.ball.bounceWalls(this.walls.leftWall);
            this.ball.bounceWalls(this.walls.topWall);
            this.ball.bounceWalls(this.walls.rightWall);
            this.ball.bounceWalls(this.walls.bottomWall);

            //Bounce ball and paddle
            this.ball.bounce(this.paddle.paddle);

            // Bounce goal with walls
            this.goal.bounce(this.walls.leftWall);
            this.goal.bounce(this.walls.topWall);
            this.goal.bounce(this.walls.rightWall);
            this.goal.bounce(this.walls.bottomWall);

            // Bounce goal with ball 
            this.timer.update();
            let projectiles = this.goal.ballCollision(this.ball.ball, endGameCallback, this.addScoreGoal);
            this.projectiles.push(...projectiles);

            // Projectiles collision logics
            for (const projectile of this.projectiles) {
                projectile.bounce(this.walls.leftWall);
                projectile.bounce(this.walls.topWall);
                projectile.bounce(this.walls.rightWall);
                projectile.bounce(this.walls.bottomWall);
                projectile.paddleCollision(this.paddle.paddle, endGameCallback, this.paddle.health1, this.paddle.health2, this.paddle.health3)
                projectile.ballCollision(this.ball.ball, this.addScoreProjectiles);
                projectile.bounce(this.ball.ball);
            }

            // Mute-button
            this.volumeButton.update();

            // Presents game-resaults
            textFont('Quicksand');
            fill(132, 165, 157);
            textSize(28);
            text(this.score, width - 50, 90);
            text('Score:', width - 135, 90);
            textSize(18)
            text('HigScore:', width - 135, 120);
            text(localStorage.getItem('HighScore') || '', width - 50, 120);

            // Loop through the array of projectiles and will run the projectile function
            for(const projectile of this.projectiles){
                projectile.update();
            }
        }
    }

    // Add score when catching confetti(projectiles)
    public addScoreProjectiles = () => {
        this.score = this.score += 1;
        this.score.toString();
    }
    // Add score when bouncing the ball of the goal
    public addScoreGoal = () => {
        this.score = this.score += 5;
        this.score.toString();
    }

    public draw(gameState: GameState) {
        // If the game is running call upon the function to show timer
        if (gameState === 'Running') {
            this.timer.drawTimer();
        }

        for (const projectile of this.projectiles) {
            projectile.draw();
        }

        // Draws sprites upon starting the game
        this.paddle.draw();
        this.ball.draw();
        this.goal.draw();
        this.walls.draw();
        this.goal.draw();
        this.volumeButton.draw();

        // Displays game lost screen
        if (gameState === 'GameOver') {
            this.timer.drawLost();
        }

        // If the game is won check if you beat the old high-score, if yes add new high-score
        if(gameState === 'GameWon') {
            let highScore = localStorage.getItem('HighScore') || 0; 
            if(this.score > highScore) {
                localStorage.setItem('HighScore', this.score.toString());
            }
            this.timer.drawWon(this.score);   
        }
    }
}