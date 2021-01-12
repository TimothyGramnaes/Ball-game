class StartScreen {
    private startGameCallback: Function

   
    private startGameImg: any

    constructor(startGameCallback: Function) {
        this.startGameCallback = startGameCallback;
        this.startGameImg = createSprite(width / 2, height / 2, 100, 100);
        this.startGameImg.addImage(startGameImg);
    }

    
    
    public update(gameState: GameState) {
        if(gameState === 'Start'){
            if (keyIsDown(32)) {
                this.startGameCallback();
            }
        }
    }

    public draw() {
        drawSprite(this.startGameImg);  
    }
}  