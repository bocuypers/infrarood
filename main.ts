let ir_waarde = 0
let vooruit = 27
let achteruit = 4
let links = 11
let rechts = 25
basic.forever(function () {
    ir_waarde = IR.IR_read()
})
basic.forever(function () {
    basic.showNumber(ir_waarde)
})
basic.forever(function () {
    if (ir_waarde == vooruit) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
})
basic.forever(function () {
    if (ir_waarde == achteruit) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    }
})
basic.forever(function () {
    if (ir_waarde == links) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    }
})
basic.forever(function () {
    if (ir_waarde == rechts) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    }
})
