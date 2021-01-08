class Timer {
    millisecs: any;
    seconds: any;
    minutes: any;
    start: boolean;

    constructor() {
        this.millisecs = 0;
        this.seconds = 0;
        this.minutes = 0;
        this.start = true;
    }

    startTimer() {
        if(this.start == false) {
            (this.start = true)
        }
    }

    stopTimer() {
        if(this.start == true) {
            (this.start = false)
        }
    }

    update() {
        if(this.start){
            if (int(millis()/100)  % 10 != this.millisecs){
                this.millisecs++;
                
            }
            if (this.millisecs >= 10){
                this.millisecs -= 10;
                this.seconds++;
            }
            if (this.seconds >= 60){
                this.seconds -= 60;
                this.minutes++;
            }
        }
    }

    draw() {
       
        
        textAlign(CENTER);
        fill(0);
        textSize(15);
        text(nf(this.minutes, 2) + ":" + nf(this.seconds, 2) + "." + nf(this.millisecs, 1) , 50, 50);
    }

}
