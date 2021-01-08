
class TheGame {
    private startScreen: StartScreen;
    private endScreen: EndScreen;
    private gameController: GameController;
    // private playField: Playfield;
   
    constructor() {
        isGameRunning = false;
        this.startScreen = new StartScreen(this.startGame);

        gameOver = false; 
        this.endScreen = new EndScreen(this.endGame, this.restartGame);

        this.gameController = new GameController();

    }

    private startGame() {
        isGameRunning = true; 
    }

    private endGame() {
        gameOver = true;
    }

    private restartGame = () => {
        isGameRunning = true;
        this.gameController = new GameController();
        gameOver = false;
    }

    public update() {
        if(!gameOver){
            this.gameController.update();
        }

        this.startScreen.update();

        this.endScreen.update();    
    }
    
  
    public draw() {
        if(gameOver) {
            this.endScreen.draw();
            
         //    this.ball.ball.setSpeed(0)
         //    this.goal.sprite.setSpeed(0)
         //    this.ball.speed = 8
         //    this.goal.speed = 5
         }
        this.gameController.draw();
            if (isGameRunning === false) {
                this.startScreen.draw();
            } 
    }
}

        


