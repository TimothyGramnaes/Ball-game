class GameController {
    private projectiles: Projectile[]
    private paddle: Paddle;
    private ball: Ball;
    private goal: Goal;
    private volumeButton: volumeButton;
    private timer: Timer;
    private score: number
    public walls: Walls;

    constructor() {
        this.ball = new Ball();
        this.walls = new Walls();
        this.paddle = new Paddle();
        this.goal = new Goal();
        this.timer = new Timer();
        this.volumeButton = new volumeButton();
        this.projectiles = []
        this.score = 0;
    }

    public update(gameState: GameState, endGameCallback: Function) {
        if (gameState !== 'Running') {
            this.ball.ball.setSpeed(0);
            this.goal.sprite.setSpeed(0);
        } else {
            this.paddle.update();
            this.timer.update()
            this.ball.bounceWalls(this.walls.leftWall);
            this.ball.bounceWalls(this.walls.topWall);
            this.ball.bounceWalls(this.walls.rightWall);
            this.ball.bounceWalls(this.walls.bottomWall);

            //Bounce ball and paddle
            this.ball.bounce(this.paddle.paddle)
            this.paddle.update();

            // Bounce goal with walls
            this.goal.bounce(this.walls.leftWall);
            this.goal.bounce(this.walls.topWall);
            this.goal.bounce(this.walls.rightWall);
            this.goal.bounce(this.walls.bottomWall);

            // Bounce goal with ball 
            this.timer.update();
            let projectiles = this.goal.ballCollision(this.ball.ball, endGameCallback, this.addScoreGoal)
            this.projectiles.push(...projectiles)

            for (const projectile of this.projectiles) {
                projectile.bounce(this.walls.leftWall);
                projectile.bounce(this.walls.topWall);
                projectile.bounce(this.walls.rightWall);
                projectile.bounce(this.walls.bottomWall);
                projectile.paddleCollision(this.paddle.paddle, endGameCallback, this.paddle.health1, this.paddle.health2, this.paddle.health3)
                projectile.ballCollision(this.ball.ball, this.addScoreProjectiles)
                projectile.bounce(this.ball.ball)

            }

            this.volumeButton.update();
            textFont('Quicksand');
            fill(132, 165, 157)
            textSize(28);
            text(this.score, width - 50, 90);
            text('Score:', width - 135, 90);
            for (const projectile of this.projectiles) {
                projectile.update();
            }
        }
    }

    addScoreProjectiles = () => {
        this.score = this.score += 1
        this.score.toString()
    }
    addScoreGoal = () => {
        this.score = this.score += 5
        this.score.toString()
    }

    public draw(gameState: GameState) {
        if (gameState === 'Running') {
            this.timer.drawTimer();
        }

        for (const projectile of this.projectiles) {
            projectile.draw();
        }
        this.paddle.draw()
        this.ball.draw()
        this.goal.draw()
        this.walls.draw()
        this.goal.draw();
        this.volumeButton.draw();


        if (gameState === 'GameOver') {
            this.timer.drawLost();
        }
        if (gameState === 'GameWon') {
            this.timer.drawWon(this.score);
        }
    }
}