class EndScreen {
    private restartGameCallback: Function;
    private playAgain: any;

    constructor(restartGameCallback: Function) {
        this.restartGameCallback = restartGameCallback;
        this.playAgain = createSprite(width / 2, height / 2, 100, 100);
        this.playAgain.addImage(playAgain);
        playAgain.resize(550,400);
    }

    // Switches gamestates, presents player 
    // with start and end-screens betweeen games
    public update(gameState: GameState) {
        if (gameState === 'GameOver' || gameState === 'GameWon') {
            if (keyIsDown(13)) {
                this.restartGameCallback();
            }
        }
    }

    public draw() {
        drawSprite(this.playAgain);
    }
} 