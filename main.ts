input.onButtonPressed(Button.A, function () {
    music.stopMelody(MelodyStopOptions.Background)
    music.play(music.createSoundExpression(WaveShape.Sine, 1, 5000, 255, 0, 2000, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    sparkbitO.stopMotorModule(SparkbitOutPort.Output1)
    sparkbitO.stopMotorModule(SparkbitOutPort.Output2)
    sparkbitO.setLightModule(SparkbitOutPort.Output3, SparkbitColor.Red, 0)
})
input.onButtonPressed(Button.B, function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Birthday), music.PlaybackMode.LoopingInBackground)
})
music.play(music.createSoundExpression(WaveShape.Square, 5000, 0, 255, 0, 2000, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
music.play(music.createSoundExpression(WaveShape.Square, 3332, 3815, 255, 0, 2000, SoundExpressionEffect.Vibrato, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
basic.forever(function () {
    serial.writeLine("" + (sparkbitI.irTransmitterIsReceived(SparkbitInPort.Input2, SparkbitInPort.Input3)))
    while (sparkbitI.lightSensorComparePercent(SparkbitInPort.Input1, SparkbitLogic.NEQ, 0)) {
        if (sparkbitI.irTransmitterIsReceived(SparkbitInPort.Input2, SparkbitInPort.Input2)) {
            sparkbitO.setLightModule(SparkbitOutPort.Output3, SparkbitColor.Green, 100)
            sparkbitO.rotateMotorModule(SparkbitOutPort.Output1, SparkbitDirection.Clockwise, 100)
            sparkbitO.rotateMotorModule(SparkbitOutPort.Output2, SparkbitDirection.Counterclockwise, 100)
        } else {
            sparkbitO.setLightModule(SparkbitOutPort.Output3, SparkbitColor.Red, 100)
            sparkbitO.rotateMotorModule(SparkbitOutPort.Output1, SparkbitDirection.Clockwise, 50)
            sparkbitO.rotateMotorModule(SparkbitOutPort.Output2, SparkbitDirection.Counterclockwise, 100)
        }
    }
})
