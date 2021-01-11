class volumeButton {

    private prevIsDownP: boolean
    private volumeUp: any
    private volumeOff: any

    constructor() {
        this.prevIsDownP = false; 

        this.volumeUp = createSprite(width / 1.1, 40, 50, 50);
        this.volumeUp.addImage(volumeUp)

        this.volumeOff = createSprite(width / 1.4, 40, 50, 50); 
        this.volumeOff.addImage(volumeOff)
    }

    public update() {
        
        let muteKeyWasPressed = !this.prevIsDownP && keyIsDown(80) 
        if (muteKeyWasPressed) {
            if (sounds.backgroundMusic.isPaused()) {
                sounds.backgroundMusic.play()
                this.volumeUp()
            } else {
                sounds.backgroundMusic.pause()
                this.volumeOff()
            }
        } 
        this.prevIsDownP = keyIsDown(80) 
        
        // getMasterVolume()
        // masterVolume()
    }

    public draw() {
        drawSprite(this.volumeUp)
        drawSprite(this.volumeOff)
    }

}