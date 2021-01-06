class Timer {

    timerValue: number;
    seconds: number;
    minutes: number;
    //interval: any;

    constructor() {
        this.timerValue = 90;
        this.seconds = this.timerValue % 60;
        this.minutes = floor(this.timerValue / 60);
        //this.interval = setInterval(this.timeIt, 1000) 
    }

    
    timeIt() {
        if (this.timerValue > 0) {
            this.timerValue--;
        }

    }

    countDown() {
        setInterval(this.timeIt, 1000) 
        
        if (this.timerValue >= 10) {
        text(this.minutes + " : " + this.seconds, 10, 30);
        }
        if (this.timerValue < 10) {
        text(this.minutes + " : " + this.seconds, 10, 30);
        }
        if (this.timerValue == 0) {
        text('game over', width / 2, height / 2 + 15);
        }
    }
   
    public update() {
        this.countDown()

       //setInterval(this.timeIt, 1000) 
       
        // if (this.timerValue > 0) {
        //     this.timerValue--;
        // }
        // if (this.timerValue >= 10) {
        // text(this.minutes + " : " + this.seconds, 10, 30);
        // }
        // if (this.timerValue < 10) {
        // text(this.minutes + " : " + this.seconds, 10, 30);
        // }
        // if (this.timerValue == 0) {
        // text('game over', width / 2, height / 2 + 15);
        // }
    }

    public draw() {
        this.update()
        fill(250)
        textSize(25)
        this.countDown()
        
    }
    
}