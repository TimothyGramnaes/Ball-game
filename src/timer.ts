class Timer {
    millisecs: number;
    seconds: number;
    minutes: number;
    start: boolean;
    constructor() {
        this.millisecs = 0;
        this.seconds = 0;
        this.minutes = 0;
        this.start = true;
    }

    update() {
        if (this.start) {
            if (int(millis() / 100) % 10 != this.millisecs) {
                this.millisecs++;

            }
            if (this.millisecs >= 10) {
                this.millisecs -= 10;
                this.seconds++;
            }
            if (this.seconds >= 60) {
                this.seconds -= 60;
                this.minutes++;
            }
        }
    }

    drawTimer() {
        textAlign(LEFT);
        fill(132, 165, 157);
        textSize(28);
        textFont('Quicksand');
        text('Timer', 25, 50);

        text(nf(this.minutes, 2) + ":" + nf(this.seconds, 2) + "." + nf(this.millisecs, 1), 25, 80);
    }

    drawWon(score: number) {
        textAlign(CENTER);
        fill(132, 165, 157);
        textSize(60);
        textFont('Quicksand');

        text('WINNER!', width / 2, 80);
        textSize(40);
        text('Your time', width / 2, 120);
        text(nf(this.minutes, 2) + ":" + nf(this.seconds, 2) + "." + nf(this.millisecs, 1), width / 2, 157);
        text('Score:', width / 2 - 20, 200)
        text(score, width / 2 + 70, 200)
    }

    drawLost() {
        textAlign(CENTER);
        fill(228, 137, 133);
        textSize(60);
        textFont('Quicksand');
        text('YOU LOST', width / 2, 115);
    }
}

