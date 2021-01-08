class EndScreen {
    private endGameCallback: Function;
    private restartGameCallback: Function;
    private playAgain: any;

    constructor(endGameCallback: Function, restartGameCallback: any) {
        this.endGameCallback = endGameCallback;
        this.restartGameCallback = restartGameCallback;

        this.playAgain = createSprite(width / 2, height - 400, 100, 100);
        this.playAgain.addImage(playAgain);
    }

   
    public update() {
        if(gameIsOver){
            this.endGameCallback()

            if (keyIsDown(13)) {
                this.restartGameCallback(); 
            }
        } 
    }

    public draw() {
        drawSprite(this.playAgain);
        
    }
}  