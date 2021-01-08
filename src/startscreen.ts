class StartScreen {
    private startGameCallback: Function

    //private text: string 
    private startGameImg: any
    private prevIsDownP: boolean

    constructor(startGameCallback: Function) {
        this.startGameCallback = startGameCallback;
        //this.text = 'Please press SPACE to start the game'
        this.startGameImg = createSprite(width / 2, height - 400, 100, 100);
        this.startGameImg.addImage(startGameImg);
    }

    // pause(speed:any){
    //     speed = 0;
    // }
    
    public update() {
        if (keyIsDown(32)) {
            this.startGameCallback();
        }
        
        let muteKeyWasPressed = !this.prevIsDownP && keyIsDown(80) 
        if (muteKeyWasPressed) {
            if (soundes.backgroundMusic.isPaused()) {
                soundes.backgroundMusic.play()
            } else {
                soundes.backgroundMusic.pause()

            }
        } 
        this.prevIsDownP = keyIsDown(80) 
        
        // material icons volume_off
    
    }

    public draw() {
        drawSprite(this.startGameImg);  
    }
}  