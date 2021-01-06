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

    pause(speed:any){
        speed = 0;
    }
    
    public update() {
        if (keyIsDown(32)) {
            this.startGameCallback();
        }

    }

    public draw() {
        //background(0)
        // fill(255)
        drawSprite(this.startGameImg);
        
        
        // rect(width / 2, height - 600, 100, 100)
        // text(this.text, width / 2 - 80, 300, 300, 400)
        
    }
}  