class Projectile {
    
    speed: number
    sprite: any

    constructor(goal: Goal) {
        this.speed = 5;
        this.sprite = createSprite(goal.sprite.position.x, goal.sprite.position.y, 20, 20)
        this.sprite.setSpeed(this.speed, Math.random() * 359)
    
        
    }
    bounce(sprite: any){
        this.sprite.bounce(sprite)
        this.sprite.setSpeed(this.speed)
    }

    public draw() {
        drawSprite(this.sprite)
    }
    
}
