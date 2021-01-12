class Ball {
    public ball: any;
    private radius: number;
    private speed: number;

    constructor() {
        this.radius = 30;
        this.ball = createSprite(200, 200, this.radius, this.radius);
        this.ball.setCollider('circle', 0, 0, 27);
        this.ball.addImage(imageBall)
        this.speed = 10;
        this.ball.setSpeed(this.speed, Math.random() * 360)
    }

    public draw() {
        drawSprite(this.ball);
    }

    bounce(sprite: any) {
        this.ball.setSpeed(this.speed)
        if (this.ball.bounce(sprite)) {
            sounds.ballCollide.play();
        }
    }

    bounceWalls(sprite: any) {
        if (this.ball.bounce(sprite)) {
            sounds.ballCollide.play();
        }
    }
}