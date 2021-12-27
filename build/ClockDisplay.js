import NumberDisplay from './NumberDisplay.js';
import Ticker from './Ticker.js';
export default class ClockDisplay {
    hours;
    ticker;
    minutes;
    output;
    seconds;
    constructor(output) {
        this.ticker = new Ticker(this, 1000);
        this.output = output;
        this.hours = new NumberDisplay(24);
        this.minutes = new NumberDisplay(60);
        this.seconds = new NumberDisplay(60);
        this.updateDisplay();
    }
    timeTick() {
        this.seconds.increment();
        if (this.seconds.getValue() === 0) {
            this.minutes.increment();
            if (this.minutes.getValue() === 0) {
                this.hours.increment();
            }
        }
        this.updateDisplay();
    }
    setTime(hours, minutes, seconds) {
        this.hours.setStringValue(hours);
        this.minutes.setStringValue(minutes);
        this.seconds.setStringValue(seconds);
        this.updateDisplay();
    }
    updateDisplay() {
        const displayString = `${this.hours.getStringValue()}:${this.minutes.getStringValue()}:${this.seconds.getStringValue()}`;
        this.output.innerText = displayString;
    }
    stop() {
        this.ticker.stopRunning();
    }
    start() {
        this.ticker.startRunning();
    }
}
//# sourceMappingURL=ClockDisplay.js.map