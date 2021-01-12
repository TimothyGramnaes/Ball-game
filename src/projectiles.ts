class Projectile {
    speed: number
    sprite: any
    conf: number
    constructor(goal: Goal) {
        this.speed = 5;
        this.sprite = createSprite(goal.sprite.position.x, goal.sprite.position.y, 20, 20)
        this.sprite.setSpeed(this.speed, Math.random() * 359)
        this.sprite.setCollider('circle', 0, 0, 10);
        conf1.resize(0, 40);
        conf2.resize(0, 40);
        conf3.resize(0, 40);
        this.conf = Math.floor(Math.random() * 3) + 1;
        if (this.conf == 1) {
            this.sprite.addImage(conf1);
        } if (this.conf == 2) {
            this.sprite.addImage(conf2);
        } if (this.conf == 3) {
            this.sprite.addImage(conf3);
        }
    }

    paddleCollision(sprite: any, endGameCallback: Function, health: any, health2: any, health3: any) {
        // Shrink paddle on collission with sprites
        if (this.sprite.bounce(sprite)) {
            sounds.projectileCollide.play()
            sprite.scale -= 0.2
            if (sprite.scale < 0.6) {
                sprite.remove()
                endGameCallback(false);
            }
            if (sprite.scale < 0.9) {
                health.addImage(dieImage)
            }
            if (sprite.scale < 0.7) {
                health2.addImage(dieImage)
            }
            if (sprite.scale < 0.6) {
                health3.addImage(dieImage)
            }
        }
    }

    ballCollision(sprite: any, setScoreCallback: Function) {
        if (this.sprite.bounce(sprite)) {
            this.sprite.remove()
            setScoreCallback();
            sounds.projectileCollect.play();
        }
    }

    bounce(sprite: any) {
        this.sprite.bounce(sprite)
        this.sprite.setSpeed(this.speed)
    }

    public update() {
        this.sprite.rotation -= 2
    }

    public draw() {
        drawSprite(this.sprite)
    }
}
