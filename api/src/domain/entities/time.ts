export class Time {
    private hour: number;
    private minute: number;

    constructor(hour: number, minute: number){
        if(hour > 23 || hour < 0) {
            throw new Error("Hour have to be greater than 0 and lower than 24");
        }
        if(minute > 59 || minute < 0){
            throw new Error("Minute have to be greater than 0 and lower than 60");
        }
        this.hour = hour;
        this.minute = minute;
    }

    public getHour(): number{
        return this.hour;
    }

    public getMinute(): number{
        return this.minute;
    }

    public toString(): string{
        return this.hour.toString().padStart(2, "0") + ":" + this.minute.toString().padStart(2, "0");
    }

    public static parse(time: string): Time{
        const splited = time.split(":");
        if(splited.length !== 2){
            throw new Error("Invalid Time format");
        }
        const [hour, minute] = splited;
        
        return new Time(Number(hour), Number(minute));
    }
}