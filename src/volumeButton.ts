class volumeButton {

    private prevIsDownP: boolean;
    private currentVolumeIcon: any;

    constructor() {
        this.prevIsDownP = false; 

        this.currentVolumeIcon = createSprite(width / 2, 40, 30, 30);
        this.currentVolumeIcon.addImage(volumeUp)
    }

    public update() {

        // if previous P button hasen't been klicked and P button is pressed do this: 
                
        let muteKeyWasPressed = !this.prevIsDownP && keyIsDown(80)
        if (muteKeyWasPressed) {
            if (sounds.backgroundMusic.isPlaying()) {
                sounds.backgroundMusic.pause()
                masterVolume(0)
                this.currentVolumeIcon.addImage(volumeOff)
            } else {
                sounds.backgroundMusic.play()
                this.currentVolumeIcon.addImage(volumeUp)
                masterVolume(1)
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