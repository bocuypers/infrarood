let strip: neopixel.Strip = null
let ir_waarde = 0
let vooruit = 27
let achteruit = 4
let links = 11
let rechts = 25
let stop = 94
basic.forever(function () {
    if (ir_waarde == stop) {
        maqueen.motorStop(maqueen.Motors.All)
        basic.pause(100)
    }
})
basic.forever(function () {
    if (ir_waarde == vooruit) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 30)
    }
})
basic.forever(function () {
    if (ir_waarde == achteruit) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 30)
    }
})
basic.forever(function () {
    if (ir_waarde == links) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 30)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 30)
    }
})
basic.forever(function () {
    if (ir_waarde == rechts) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 30)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 30)
    }
})
basic.forever(function () {
    ir_waarde = IR.IR_read()
    strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
    strip.showColor(neopixel.colors(NeoPixelColors.Purple))
})
