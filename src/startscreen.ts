class StartScreen {
    private startGameCallback: Function

    constructor(startGameCallback: Function) {
        this.startGameCallback = startGameCallback;
    }

   
    public update() {
        if (keyDown(32)) {
            this.startGameCallback(); 
        }
    }

    public draw() {}
}  