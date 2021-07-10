namespace SpriteKind {
    export const Ball = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Ball, function (sprite, otherSprite) {
    otherSprite.setFlag(SpriteFlag.Ghost, true)
    otherSprite.vx = -1 * myPlayBall.vx
    pause(100)
    otherSprite.setFlag(SpriteFlag.Ghost, false)
})
sprites.onDestroyed(SpriteKind.Ball, function (sprite) {
    myPlayBall = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Ball)
})
function pingpong_score () {
    if (info.score() >= 11) {
    	
    } else if (info.player2.score() >= 11) {
    	
    }
}
sprites.onCreated(SpriteKind.Ball, function (sprite) {
    if (Math.percentChance(50)) {
        sprite.setImage(img`
            . . . . . . . . 
            . . . 2 2 . . . 
            . . 3 1 1 3 . . 
            . 2 1 1 1 1 2 . 
            . 2 1 1 1 1 2 . 
            . . 3 1 1 3 . . 
            . . . 2 2 . . . 
            . . . . . . . . 
            `)
    } else {
        sprite.setImage(img`
            . . . . . . . . . . . 
            . . b b . . . b b . . 
            . b 1 1 b . b 1 1 b . 
            b 1 1 1 1 b 1 1 1 1 b 
            b 1 1 1 1 1 1 1 1 1 b 
            b 1 1 1 1 1 1 1 1 1 b 
            . b 1 1 1 1 1 1 1 b . 
            . . b 1 1 1 1 1 b . . 
            . . . b 1 1 1 b . . . 
            . . . . b 1 b . . . . 
            . . . . . . . . . . . 
            `)
    }
    sprite.vy = randint(-75, 75)
    if (Math.percentChance(50)) {
        sprite.vx = -75
    } else {
        sprite.vx = 70
    }
})
let myPlayBall: Sprite = null
let myPlayer1 = sprites.create(img`
    2 2 2 2 . . . . . . . . . . . . 
    2 2 2 2 . . . . . . . . . . . . 
    2 2 2 2 . . . . . . . . . . . . 
    2 2 2 2 . . . . . . . . . . . . 
    2 2 2 2 . . . . . . . . . . . . 
    2 2 2 2 . . . . . . . . . . . . 
    2 2 2 2 . . . . . . . . . . . . 
    2 2 2 2 . . . . . . . . . . . . 
    2 2 2 2 . . . . . . . . . . . . 
    2 2 2 2 . . . . . . . . . . . . 
    2 2 2 2 . . . . . . . . . . . . 
    2 2 2 2 . . . . . . . . . . . . 
    2 2 2 2 . . . . . . . . . . . . 
    2 2 2 2 . . . . . . . . . . . . 
    2 2 2 2 . . . . . . . . . . . . 
    2 2 2 2 . . . . . . . . . . . . 
    `, SpriteKind.Player)
myPlayer1.x = 0
myPlayer1.setStayInScreen(true)
controller.moveSprite(myPlayer1, 0, 100)
info.setScore(0)
let myPlayer2 = sprites.create(img`
    . . . . . . . . . . . . 8 8 8 8 
    . . . . . . . . . . . . 8 8 8 8 
    . . . . . . . . . . . . 8 8 8 8 
    . . . . . . . . . . . . 8 8 8 8 
    . . . . . . . . . . . . 8 8 8 8 
    . . . . . . . . . . . . 8 8 8 8 
    . . . . . . . . . . . . 8 8 8 8 
    . . . . . . . . . . . . 8 8 8 8 
    . . . . . . . . . . . . 8 8 8 8 
    . . . . . . . . . . . . 8 8 8 8 
    . . . . . . . . . . . . 8 8 8 8 
    . . . . . . . . . . . . 8 8 8 8 
    . . . . . . . . . . . . 8 8 8 8 
    . . . . . . . . . . . . 8 8 8 8 
    . . . . . . . . . . . . 8 8 8 8 
    . . . . . . . . . . . . 8 8 8 8 
    `, SpriteKind.Player)
myPlayer2.x = scene.screenWidth()
myPlayer2.setStayInScreen(true)
controller.player2.moveSprite(myPlayer2, 0, 100)
info.player2.setScore(0)
myPlayBall = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Ball)
game.onUpdate(function () {
    if (myPlayBall.y <= 0) {
        myPlayBall.y = 0
        myPlayBall.vy = -1 * myPlayBall.vy
    } else if (myPlayBall.y >= scene.screenHeight()) {
        myPlayBall.y = scene.screenHeight()
        myPlayBall.vy = -1 * myPlayBall.vy
    }
})
game.onUpdate(function () {
    if (myPlayBall.x <= 0) {
        myPlayBall.destroy()
        info.player2.changeScoreBy(1)
    } else if (myPlayBall.x >= scene.screenWidth()) {
        myPlayBall.destroy()
        info.changeScoreBy(1)
    }
    pause(100)
    pingpong_score()
})
