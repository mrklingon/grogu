function look_around () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        # . # . .
        . . . . .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . # . #
        . . . . .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        . . . . .
        `)
}
function talk () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . # # # .
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . # # # .
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        . . . . .
        `)
}
music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
look_around()
basic.forever(function () {
    if (130 < input.soundLevel()) {
        talk()
        soundExpression.giggle.playUntilDone()
    } else {
        look_around()
    }
})
