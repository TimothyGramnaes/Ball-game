class StartScreen {
    private startGameCallback: Function

   
    private startGameImg: any
    private prevIsDownP: boolean

    constructor(startGameCallback: Function) {
        this.startGameCallback = startGameCallback;
        this.startGameImg = createSprite(width / 2, height / 2, 100, 100);
        this.startGameImg.addImage(startGameImg);
        this.prevIsDownP = false; 
    }

    
    
    public update(gameState: GameState) {
        if(gameState === 'Start'){
            if (keyIsDown(32)) {
                this.startGameCallback();
            }
        }
        
        let muteKeyWasPressed = !this.prevIsDownP && keyIsDown(80) 
        if (muteKeyWasPressed) {
            if (sounds.backgroundMusic.isPaused()) {
                sounds.backgroundMusic.play()
            } else {
                sounds.backgroundMusic.pause()

            }
        } 

        this.prevIsDownP = keyIsDown(80) 
    }

    public draw() {
        drawSprite(this.startGameImg);  
    }
}  