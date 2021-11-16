export default class ClockDisplay {
    hours;
    minutes;
    output;
    constructor(output) {
        this.output = output;
        this.hours = 0;
        this.minutes = 0;
        this.updateDisplay();
    }
    timeTick() {
        this.minutes = (this.minutes + 1) % 60;
        if (this.minutes === 0) {
            this.hours = (this.hours + 1) % 24;
        }
        this.updateDisplay();
    }
    setTime(hours, minutes) {
        this.hours = Number(hours);
        this.minutes = Number(minutes);
        this.updateDisplay();
    }
    updateDisplay() {
        let displayString = '';
        if (this.hours < 10) {
            displayString += '0';
        }
        displayString += `${this.hours}:`;
        if (this.minutes < 10) {
            displayString += '0';
        }
        displayString += this.minutes;
        this.output.innerText = displayString;
    }
}
//# sourceMappingURL=ClockDisplay.js.map