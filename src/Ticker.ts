import ClockDisplay from './ClockDisplay';

export default class Ticker {
  private isRunning: boolean;

  private lastTickTimeStamp: number;

  private interval: number;

  private clock: ClockDisplay;

  /**
   * @param clock
   * @param interval
   */
  constructor(clock: ClockDisplay, interval: number) {
    this.clock = clock;
    this.interval = interval;
    this.startRunning();
  }

  /**
   * Start the automatic updating process of this object
   */

  public startRunning() {
    // Set the last tick timestamp to current time
    this.isRunning = true;
    this.lastTickTimeStamp = performance.now();

    if (this.isRunning === true) {
      // Request the browser to call the step method on next animation frame

      requestAnimationFrame(this.step);
    }
  }

  /**
   * This MUST be an arrow method in order to keep the `this` variable working
   * correctly. It will otherwise be overwritten by another object caused by
   * javascript scoping behaviour.
   *
   * @param timestamp a `DOMHighResTimeStamp` similar to the one returned by
   *   `performance.now()`, indicating the point in time when `requestAnimationFrame()`
   *   starts to execute callback functions
   */
  private step = (timestamp: number) => {
    // Check if it is time to perform the next Tick
    if (timestamp - this.lastTickTimeStamp >= this.interval) {
      // Call the method of this object that needs to be called
      this.clock.timeTick();
      this.lastTickTimeStamp = timestamp;
    }

    // Request the browser to call the step method on next animation frame
    if (this.isRunning) {
      requestAnimationFrame(this.step);
    }
  };

  public stopRunning() {
    // console.log('test');
    // console.log(this);
    this.isRunning = false;
  }
}
