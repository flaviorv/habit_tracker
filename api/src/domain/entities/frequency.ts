export class Frequency {
    private type: FrenquencyType;
    private value: number | undefined;

    public constructor (type:FrenquencyType, value: number  | undefined) {
        this.type = type;
        if ([FrenquencyType.Day, FrenquencyType.Week, FrenquencyType.Month].includes(type)) {
            this.value = value;
        }
    }

    public getType(): FrenquencyType {
        return this.type;
    }

    public getValue(): number | undefined {
        return this.value;
    }

}



export enum FrenquencyType {
    WeekDays = "WEEK_DAYS",
    Weekends = "WEEKENDS",
    Day = "DAY",
    Week = "WEEK",
    Month = "MONTH"
}