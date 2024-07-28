import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"
import { IconColor, IconId } from "../../domain/entities/icon";
import { FrenquencyType } from "../../domain/entities/frequency";

@Entity()
export class TaskEntity {
    @PrimaryGeneratedColumn()
    public id: number;
    @Column()
    public description: string;
    @Column({name: "icon_id"})
    public iconId: IconId ;
    @Column({name: "icon_color"})
    public iconColor: IconColor;
    @Column({name: "start_date"})
    public startDate: Date;
    @Column()
    public hour: string;
    @Column({name: "frequency_type"})
    public frequencyType: FrenquencyType;
    @Column({name: "frequency_value"})
    public frequencyValue?: number | undefined;
   
}