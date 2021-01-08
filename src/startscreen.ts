class StartScreen {
    private startGameCallback: Function
    //private text: string 
    private startGameImg: any

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

        if (mouseIsPressed) {
            sounds.backgroundMusic.stop();
        } 

    }

    public draw() {
        drawSprite(this.startGameImg);  
    }
}  