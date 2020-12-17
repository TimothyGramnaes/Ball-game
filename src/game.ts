class TheGame {
    private startScreen: StartScreen;
    // private endScreen: EndScreen;
    // private playField: Playfield;
    // private paddle: Paddle;
    // private ball: Ball; 
    private goal: Goal;
    private isGameRunning: boolean;
    // private gameOver: boolean;
    
    constructor() {
        this.isGameRunning = false;
        this.startScreen = new StartScreen(this.startGame)
        // this.gameOver = false;
        this.goal = new Goal();
    }

    private startGame() {
        this.isGameRunning = true;
        console.log(this.isGameRunning)
    }

    public update() {
        this.startScreen.update();
    }

    public draw() {
        this.goal.draw();
        console.log('test')

    } 
}


