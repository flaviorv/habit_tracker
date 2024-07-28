import { start } from "repl";
import { Frequency } from "./frequency";
import { Icon } from "./icon";
import { Time } from "./time";

export class Task {
    private id: number;
    private description: string;
    private icon: Icon;
    private startDate: Date;
    private hour: Time;
    private frequency: Frequency;

    public getId(): number{
        return this.id;
    }

    public getDescription(): string{
        return this.description;
    }

    public getIcon(): Icon{
        return this.icon;
    }

    public getStartDate(): Date{
        return this.startDate;
    }

    public getHour(): Time{
        return this.hour;
    }

    public getFrequency(): Frequency{
        return this.frequency;
    }

    constructor(id: number, description: string, icon: Icon, startDate: Date, hour: Time, frequency: Frequency){
        this.id = id;
        this.description = description;
        this.icon = icon;
        this.startDate = startDate;
        this.hour = hour;
        this.frequency = frequency;
    } 

}