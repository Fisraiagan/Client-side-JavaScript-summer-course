
async function startProgram() {
    await setMainLed(getRandomColor());
  await  traceSquare(5, 120);

    exitProgram();
}

registerEvent(EventType.onCollision, async () => {
    stopRoll();
    setMainLed({ r: 255, g: 0, b: 0 });

    await delay(0.5);
    setMainLed({ r: 255, g: 255, b: 255 });
    setSpeed(5);


});



async function traceSquare(velocity, distance) {

    await rollToDistance(30, 50, 120);
    await roll(0, 5, 60);
    await rollToDistance(80, velocity, distance);

    
}

