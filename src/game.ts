class TheGame {
    private startScreen: StartScreen;
    // private endScreen: EndScreen;
    // private playField: Playfield;
    private paddle: Paddle;
    // private ball: Ball; 
    private goal: Goal;
    private isGameRunning: boolean;
    // private gameOver: boolean;
    
    constructor() {
        this.isGameRunning = false;
        this.startScreen = new StartScreen(this.startGame)

        this.paddle = new Paddle()
        //this.gameOver = false;
        

        // this.gameOver = false;
        this.goal = new Goal();
    }

    private startGame() {
        this.isGameRunning = true;
        console.log(this.isGameRunning)
    }

    public update() {
        this.startScreen.update();
        this.paddle.update();
    }

    public draw() {

        // if (this.isGameRunning) {
        //     fill(255)
        //     circle(100, 100, 60)
        // } else {
        //     this.startScreen.draw();
        // }
        this.paddle.draw()
        this.goal.draw();       
        drawSprites();
    }
}

        


