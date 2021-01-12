class volumeButton {

    private prevIsDownP: boolean;
    private currentVolumeIcon: any;

    constructor() {
        this.prevIsDownP = false; 

        this.currentVolumeIcon = createSprite(width / 2, 40, 30, 30);
        this.currentVolumeIcon.addImage(volumeOff)
    }

    public update() {

        // if previous P button hasen't been klicked and P button is pressed do this: 
                
        let muteKeyWasPressed = !this.prevIsDownP && keyIsDown(80) || keyIsDown(32)
        if (muteKeyWasPressed) {
            if (sounds.backgroundMusic.isPlaying()) {
                sounds.backgroundMusic.pause()
                this.currentVolumeIcon.addImage(volumeOff)
            } else {
                sounds.backgroundMusic.play()
                this.currentVolumeIcon.addImage(volumeUp)
            }
        } 
        if (keyIsDown(13) && sounds.backgroundMusic.isPlaying()) {
            this.currentVolumeIcon.addImage(volumeUp)
        } else if (keyIsDown(13) && sounds.backgroundMusic.isPaused()) {
            this.currentVolumeIcon.addImage(volumeOff)
        }
        this.prevIsDownP = keyIsDown(80) 
        
        // getMasterVolume()
        // masterVolume()
    }

    public draw() {
        drawSprite(this.currentVolumeIcon)
    }

}