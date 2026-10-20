basic.forever(function () {
    if (input.acceleration(Dimension.X) < -200) {
        while (input.acceleration(Dimension.X) < -200) {
            pins.servoWritePin(AnalogPin.P0, 90)
        }
    } else if (input.acceleration(Dimension.X) > 200) {
        while (input.acceleration(Dimension.X) > 200) {
            pins.servoWritePin(AnalogPin.P0, 180)
        }
    }
})
