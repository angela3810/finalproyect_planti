input.onPinPressed(TouchPin.P0, function () {
    for (let index = 0; index <= 3; index++) {
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
    basic.showString("happy")
    basic.showIcon(IconNames.Happy)
    music.playMelody("C5 B A G A A A G ", 120)
    game.addScore(20)
})
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        COUNTER = COUNTER - 1
        basic.showNumber(COUNTER)
    }
    basic.showString("Start now!")
    basic.clearScreen()
    led.plot(2, 4)
    basic.pause(2000)
    x = 2
    y = 4
    for (let index = 0; index <= 7; index++) {
        led.plot(x, y)
        basic.pause(100)
        led.unplot(x, y)
        basic.pause(100)
    }
})
input.onButtonPressed(Button.AB, function () {
    while (true) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # . # . #
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . # . # .
            # . # . #
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # . # . #
            . # . # .
            # . # . #
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . # . # .
            # . # . #
            . # . # .
            # . # . #
            . . . . .
            `)
        basic.showLeds(`
            # . # . #
            . # . # .
            # . # . #
            . # . # .
            # . # . #
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            `)
        basic.clearScreen()
    }
    game.addScore(20)
})
input.onButtonPressed(Button.B, function () {
    myImage = images.createImage(`
        . . # . .
        . # # # .
        # # . # #
        . # # # .
        . . # . .
        `)
    game.setScore(0)
    for (let index = 0; index < 1; index++) {
        tasks = randint(1, 4)
        if (tasks == 0 + 1) {
            basic.showString("sunlight check!")
            light_level = input.lightLevel()
            basic.showNumber(light_level)
            if (light_level >= 0 && light_level < 112) {
                basic.showString("needs sun")
                for (let index = 0; index < 4; index++) {
                    myImage.showImage(0)
                    basic.showLeds(`
                        # . # . #
                        . # # # .
                        # # . # #
                        . # # # .
                        # . # . #
                        `)
                }
            } else if (light_level > 112 && light_level <= 225) {
                basic.showString("all good!")
                basic.showIcon(IconNames.Yes)
            }
            game.addScore(20)
        } else if (tasks == 2) {
            basic.showString("Needs water, press A+B")
        } else if (tasks == 6 / 2) {
            basic.showString("Planti is ")
            basic.showString("sad")
            basic.showIcon(IconNames.Sad)
            music.playMelody("E B C5 A B G A F ", 120)
            basic.showString("Press pin 0")
        } else if (tasks == 8 / 2) {
            basic.showString("Dance, Planti!")
            basic.showString("On shake!")
        }
    }
    basic.showString("" + (game.score()))
    game.gameOver()
    sprite = game.createSprite(2, 2)
    sprite.change(LedSpriteProperty.X, 1)
})
input.onGesture(Gesture.Shake, function () {
    while (true) {
        basic.showLeds(`
            . . # . .
            . # # . .
            # . # # .
            . . # . #
            . . # . .
            `)
        basic.showLeds(`
            # . # . .
            . # # . .
            . . # . #
            . . # # .
            . . # . .
            `)
    }
    game.addScore(20)
})
let sprite: game.LedSprite = null
let light_level = 0
let tasks = 0
let myImage: Image = null
let y = 0
let x = 0
let COUNTER = 0
COUNTER = 4
