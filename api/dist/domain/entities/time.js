"use strict";
class Time {
    constructor(hour, minute) {
        if (hour > 23 || hour < 0) {
            throw new Error("Hour have to be greater than 0 and lower than 24");
        }
        if (minute > 59 || minute < 0) {
            throw new Error("Minute have to be greater than 0 and lower than 60");
        }
        this.hour = hour;
        this.minute = minute;
    }
    toString() {
        return this.hour.toString().padStart(2, "0") + ":" + this.minute.toString().padStart(2, "0");
    }
}
