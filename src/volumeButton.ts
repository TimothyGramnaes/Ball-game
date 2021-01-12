class volumeButton {

    private prevIsDownP: boolean
    private volumeUp: any
    private volumeOff: any

    private currentVolumeIcon: any

    constructor() {
        this.prevIsDownP = false; 
        this.currentVolumeIcon = createSprite(width / 2, 40, 40, 40);
        this.currentVolumeIcon = this.volumeUp || this.volumeOff

        // this.volumeUp.addImage(volumeUp)

        // this.volumeOff = createSprite(width / 1.4, 40, 40, 40); 
        // this.volumeOff.addImage(volumeOff)
    }

    public update() {

        // if previous P button hasen't been klicked and P button is pressed do this: 
                
        let muteKeyWasPressed = !this.prevIsDownP && keyIsDown(80) || keyIsDown(32)
        if (muteKeyWasPressed) {
            if (sounds.backgroundMusic.isPlaying()) {
                sounds.backgroundMusic.pause()
                // this.currentVolumeIcon = volumeUp
                
            } else {
                sounds.backgroundMusic.play()
                // this.currentVolumeIcon = volumeOff
            }
        } 
        this.prevIsDownP = keyIsDown(80) 
        
        // getMasterVolume()
        // masterVolume()
    }

    public draw() {
        drawSprite(this.currentVolumeIcon)
    }

}