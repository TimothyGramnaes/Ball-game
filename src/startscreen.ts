class StartScreen {
    private startGameCallback: Function
    private text: string 
    private prevIsDownP: boolean

    constructor(startGameCallback: Function) {
        this.startGameCallback = startGameCallback;
        this.text = 'Please press SPACE to start the game'
        this.prevIsDownP = false; 
    }

    pause(speed:any){
        speed = 0;
    }
    
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
        //background(0)
        fill(255)
        rect(width / 2, height - 600, 100, 100)
        text(this.text, width / 2 - 80, 300, 300, 400)
    }
}  