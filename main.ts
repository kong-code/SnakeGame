let hand = 0
let Gissa_nummer = 0
let krona = 0
input.onButtonPressed(Button.A, function () {
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    hand = randint(1, 3)
    if (hand == 1) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (hand == 2) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("HELLO")
    basic.showString("PRESS A B OR AB")
})
input.onButtonPressed(Button.AB, function () {
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    Gissa_nummer = randint(0, 9)
    if (Gissa_nummer == 0) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (Gissa_nummer == 1) {
        basic.showLeds(`
            # # # . .
            . . # . .
            . . # . .
            . . # . .
            # # # # #
            `)
    } else if (Gissa_nummer == 2) {
        basic.showLeds(`
            # # # # #
            . . . . #
            # # # # #
            # . . . .
            # # # # #
            `)
    } else if (Gissa_nummer == 3) {
        basic.showLeds(`
            # # # # #
            . . . . #
            . # # # #
            . . . . #
            # # # # #
            `)
    } else if (Gissa_nummer == 4) {
        basic.showLeds(`
            # . . . #
            # . . . #
            # # # # #
            . . . . #
            . . . . #
            `)
    } else if (Gissa_nummer == 5) {
        basic.showLeds(`
            # # # # #
            # . . . .
            # # # # #
            . . . . #
            # # # # #
            `)
    } else if (Gissa_nummer == 6) {
        basic.showLeds(`
            # # # # #
            . . . . #
            # # # # #
            # . . . #
            # # # # #
            `)
    } else if (Gissa_nummer == 7) {
        basic.showLeds(`
            # # # # #
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            `)
    } else if (Gissa_nummer == 8) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # # # # #
            # . . . #
            # # # # #
            `)
    } else {
        basic.showLeds(`
            # # # # #
            # . . . #
            # # # # #
            . . . . #
            . . . . #
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    krona = randint(1, 2)
    if (krona == 1) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # . . . #
            # # # # #
            `)
    } else {
        basic.showLeds(`
            . # # # .
            # # . # #
            # . # . #
            # # . # #
            . # # # .
            `)
    }
})
