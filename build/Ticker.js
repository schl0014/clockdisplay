export default class Ticker {
    isRunning;
    lastTickTimeStamp;
    interval;
    clock;
    constructor(clock, interval) {
        this.clock = clock;
        this.interval = interval;
        this.startRunning();
    }
    startRunning() {
        this.isRunning = true;
        this.lastTickTimeStamp = performance.now();
        if (this.isRunning === true) {
            requestAnimationFrame(this.step);
        }
    }
    step = (timestamp) => {
        if (timestamp - this.lastTickTimeStamp >= this.interval) {
            this.clock.timeTick();
            this.lastTickTimeStamp = timestamp;
        }
        if (this.isRunning) {
            requestAnimationFrame(this.step);
        }
    };
    stopRunning() {
        this.isRunning = false;
    }
}
//# sourceMappingURL=Ticker.js.map