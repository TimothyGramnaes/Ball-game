// class Counter {

//     timerValue: number;
//     seconds: number;
//     minutes: number;
//     //timeIt: any;
//     //interval: any;
//     //value: number;

//     constructor() {
//         this.timerValue = 200;
//          this.seconds = this.interval % 60;
//          this.minutes = floor(this.interval / 60);
//         //this.interval = setInterval(this.timeIt, 1000)  
//     }

//     public timeIt() {
//         if (this.timerValue > 0) {
//             this.timerValue--;
//         }
//     }

//     // public countDown() {
//     //     this.interval
//     // }
    

//     public draw() {
//         //background(0);
//         setInterval(this.timeIt, 1000) 
//         this.timeIt();
//         fill(255)
        
        // if (this.timerValue >= 10) {
        // text(this.minutes + " : " + this.seconds, 10, 30);
        // }
        // if (this.timerValue < 10) {
        // text(this.minutes + " : " + this.seconds, 10, 30);
        // }
        // if (this.timerValue == 0) {
        // text('game over', width / 2, height / 2 + 15);
        // }
//     }
    
// }

class Counter {

    interval: number;
    timer: any;
    countdown: number;
    state: number;
    seconds: number;
    minutes: number;

    constructor() {
        this.interval = 110000;
        this.timer = millis() + this.interval;
        this.countdown = ceil((this.timer-millis())/1000);
        this.state = 0;
        this.seconds = this.interval % 60;
        this.minutes = floor(this.interval / 60);
    }

    draw () {
        fill(255)
    
        this.countdown = ceil((this.timer-millis())/1000);
    
        if (this.state == 0) {
            text(this.countdown, 50, 50);
        } else if (this.state == 1) {
            text("Game Over!", 50, 50);
        }

        if (this.timer < millis()) {
            this.timer = millis() + this.interval;
            this.state = 1;
        }
    }

    
}




