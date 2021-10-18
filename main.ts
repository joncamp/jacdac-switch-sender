control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_BUTTON_EVT_UP, function () {
    radio.sendValue("ButtonA", 0)
})
myModules.inputSwA.onUp(function () {
    radio.sendValue("ButtonA", 0)
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_BUTTON_EVT_DOWN, function () {
    radio.sendValue("ButtonA", 1)
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_B, EventBusValue.MICROBIT_BUTTON_EVT_UP, function () {
    radio.sendValue("ButtonB", 0)
})
myModules.inputSwA.onDown(function () {
    radio.sendValue("ButtonA", 1)
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_B, EventBusValue.MICROBIT_BUTTON_EVT_DOWN, function () {
    radio.sendValue("ButtonB", 1)
})
myModules.inputSwB.onUp(function () {
    radio.sendValue("ButtonB", 0)
})
myModules.inputSwB.onDown(function () {
    radio.sendValue("ButtonB", 1)
})
radio.setGroup(1)
basic.forever(function () {
    basic.showLeds(`
        . # # # .
        # . . . #
        # . # . #
        # . . . #
        . # # # .
        `)
})
