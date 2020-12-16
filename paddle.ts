
class Paddle {
    sprite: any
    ball: any
    constructor() {
        this.sprite = createSprite(500, 500, 100, 20);
        this.sprite.immovable = true;
    }
    draw() {
        background(0)
        this.sprite.shapeColor = 150
        drawSprites()
        this.move()
    }

    update() {}

    move() {
        if(keyIsDown(39)){
            this.sprite.position.x += 4
        }
        if(keyIsDown(37)){
            this.sprite.position.x -= 4
        }
        if(keyIsDown(38)){
            this.sprite.position.y -= 4
        }
        if(keyIsDown(40)){
            this.sprite.position.y += 4
        }

        if(keyIsDown(65)){
            this.sprite.rotation += .5
        }
        if(keyIsDown(83)){
            this.sprite.rotation -= .5
            console.log(this.sprite.getDirection())

        } 
    }
}