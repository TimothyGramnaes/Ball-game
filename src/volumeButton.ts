class volumeButton {
    private prevIsDownP: boolean;
    private currentVolumeIcon: any;

    constructor() {
        this.prevIsDownP = false; 
        this.currentVolumeIcon = createSprite(35, height - 50, 30, 30);
        this.currentVolumeIcon.addImage(volumeUp);
    }

    public update() {
        // Press P to mute the sound
        let muteKeyWasPressed = !this.prevIsDownP && keyIsDown(80);
        if (muteKeyWasPressed) {
            if (sounds.backgroundMusic.isPlaying()) {
                sounds.backgroundMusic.pause();
                masterVolume(0);
                this.currentVolumeIcon.addImage(volumeOff);
            } else {
                sounds.backgroundMusic.play();
                this.currentVolumeIcon.addImage(volumeUp);
                masterVolume(1);
            }
        } 
        // Checks that the right symbol for sound is beeing displayed
        if (keyIsDown(13) && sounds.backgroundMusic.isPlaying()) {
            this.currentVolumeIcon.addImage(volumeUp);
        } else if (keyIsDown(13) && sounds.backgroundMusic.isPaused()) {
            this.currentVolumeIcon.addImage(volumeOff);
        }
        this.prevIsDownP = keyIsDown(80); 
    }

    public draw() {
        drawSprite(this.currentVolumeIcon);
    }
}