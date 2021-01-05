class EndScreen {
    private endGameCallback: Function
    constructor(endGameCallback: Function) {
        this.endGameCallback = endGameCallback;
    }

   
    public update() {
        if(gameIsOver){
            this.endGameCallback()
        } 
    }

    public draw() {
        background(255)
        fill(0)
        rect(width / 2, height / 2, 200, 100)
        text('Press space to play again', 100, 100)
    }
}  