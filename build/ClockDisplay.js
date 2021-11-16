import NumberDisplay from './NumberDisplay.js';
export default class ClockDisplay {
    hours;
    minutes;
    output;
    constructor(output) {
        this.output = output;
        this.hours = new NumberDisplay(24);
        this.minutes = new NumberDisplay(60);
        this.updateDisplay();
    }
    timeTick() {
        this.minutes.increment();
        if (this.minutes.getValue() === 0) {
            this.hours.increment();
        }
        this.updateDisplay();
    }
    setTime(hours, minutes) {
        this.hours.setStringValue(hours);
        this.minutes.setStringValue(minutes);
        this.updateDisplay();
    }
    updateDisplay() {
        const displayString = `${this.hours.getStringValue()}:${this.minutes.getStringValue()}`;
        this.output.innerText = displayString;
    }
}
//# sourceMappingURL=ClockDisplay.js.map