basic.showIcon(IconNames.Heart)
bitbot.select_model(BBModel.XL)
basic.forever(function () {
    if (bitbot.readLine(BBLineSensor.Right) == 1 && bitbot.readLine(BBLineSensor.Left) == 0) {
        while (bitbot.readLine(BBLineSensor.Right) == 1 && bitbot.readLine(BBLineSensor.Left) == 0) {
            bitbot.move(BBMotor.Right, BBDirection.Forward, 0)
            bitbot.move(BBMotor.Left, BBDirection.Forward, 20)
        }
    } else if (bitbot.readLine(BBLineSensor.Right) == 0 && bitbot.readLine(BBLineSensor.Left) == 1) {
        while (bitbot.readLine(BBLineSensor.Right) == 0 && bitbot.readLine(BBLineSensor.Left) == 1) {
            bitbot.move(BBMotor.Right, BBDirection.Forward, 20)
            bitbot.move(BBMotor.Left, BBDirection.Forward, 0)
        }
    } else if (bitbot.readLine(BBLineSensor.Right) == 0 && bitbot.readLine(BBLineSensor.Left) == 0) {
        bitbot.stop(BBStopMode.Coast)
    } else {
        bitbot.go(BBDirection.Forward, 20)
    }
})
