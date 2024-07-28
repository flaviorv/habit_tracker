"use strict";
class Frenquency {
    constructor(type, repeatValue) {
        this.type = type;
        if ([FrenquencyType.Day, FrenquencyType.Week, FrenquencyType.Month].includes(type)) {
            this.repeatValue = repeatValue;
        }
    }
}
var FrenquencyType;
(function (FrenquencyType) {
    FrenquencyType["WeekDays"] = "WEEK_DAYS";
    FrenquencyType["Weekends"] = "WEEKENDS";
    FrenquencyType["Day"] = "DAY";
    FrenquencyType["Week"] = "WEEK";
    FrenquencyType["Month"] = "MONTH";
})(FrenquencyType || (FrenquencyType = {}));
