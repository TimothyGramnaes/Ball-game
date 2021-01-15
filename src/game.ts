type GameState = 'Start' | 'Running' | 'GameOver' | 'GameWon'
class TheGame {
    private endScreen: EndScreen;
    private gameController: GameController;
    private gameState: GameState;
    private startScreen: StartScreen;

    constructor() {
        this.gameState = 'Start';
        this.startScreen = new StartScreen(this.startGame);
        this.endScreen = new EndScreen(this.restartGame);
        this.gameController = new GameController(); 

        if(localStorage.getItem('HighScore') === null) {
            localStorage.setItem('HighScore', '0');
        }        
    }

    // Sets the gameState to running and calls the gameController
    private startGame = () => {
        this.gameState = 'Running';
        this.gameController = new GameController();
    }

    // Views win-screen upon win and lose-screen upon loss
    private endGame = (isWon: boolean) => {
        if (isWon) {
            this.gameState = 'GameWon';
            sounds.applause.play();
        }else {
            this.gameState = 'GameOver';
            sounds.gameOver.play();
        }
    }

    // Restarts the game and redraws everything
    private restartGame = () => {
        this.gameState = 'Running';
        this.gameController = new GameController();
    }

    public update() {
        this.startScreen.update(this.gameState);
        this.gameController.update(this.gameState, this.endGame);
        this.endScreen.update(this.gameState);
    }

    public draw() {
        this.gameController.draw(this.gameState);
        if (this.gameState === 'Start') {
            this.startScreen.draw();
        }
        if (this.gameState === 'GameOver' || this.gameState === 'GameWon') {
            this.endScreen.draw();
        }
    }
}




