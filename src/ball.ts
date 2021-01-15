class Ball {

    public ball: any;
    private radius: number;
    private speed: number;

    constructor() {
        imageBall.resize(65, 65);
        this.radius = 30;
        this.ball = createSprite(200, 200, this.radius, this.radius);
        this.ball.setCollider('circle', 0, 0, 27);
        this.ball.addImage(imageBall);
        this.speed = 10;
        this.ball.setSpeed(this.speed, Math.random() * 360);
    }

    public draw() {
        drawSprite(this.ball);
    }

    // Ball bounces of the paddel
    public bounce(sprite: any) {
        this.ball.setSpeed(this.speed);
        if (this.ball.bounce(sprite)) {
            sounds.ballCollide.play();
        }
    }

    // Ball bounces of the walls
    public bounceWalls(sprite: any) {
        if (this.ball.bounce(sprite)) {
            sounds.ballCollide.play();
        }
    }
}