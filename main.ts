for (let index = 0; index < 4; index++) {
    basic.showNumber(0)
}
basic.forever(function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P4))
})
