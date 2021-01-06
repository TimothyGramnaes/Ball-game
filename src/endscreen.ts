class EndScreen {
    private endGameCallback: Function;
    private restartGameCallback: Function;
    constructor(endGameCallback: Function, restartGameCallback: any) {
        this.endGameCallback = endGameCallback;
        this.restartGameCallback = restartGameCallback;
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
        //background(255)
        fill(255)
        rect(width / 2, height / 2, 200, 100)
        text('Press ENTER to play again', 100, 100)
    }
}  