class StartScreen {
    private startGameCallback: Function

    constructor(startGameCallback: Function) {
        this.startGameCallback = startGameCallback;
    }

   
    public update() {
        if (keyIsDown(32)) {
            this.startGameCallback(); 
        }
    }

    public draw() {}
}  