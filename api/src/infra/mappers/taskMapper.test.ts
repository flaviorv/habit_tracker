import { FrenquencyType, Frequency } from "../../domain/entities/frequency"
import { IconColor, IconId } from "../../domain/entities/icon"
import { Task } from "../../domain/entities/task"
import { Time } from "../../domain/entities/time"
import { TaskEntity } from "../entities/taskEntity"
import { TaskMapper } from "./taskMapper"

test("Should map Task to TaskEntity", () => {
    //arrange
    const date = new Date();
    const input = new Task(1, "Do anything", {id: IconId.Halter, color: IconColor.Purple}, date, new Time(20, 1), new Frequency(FrenquencyType.Day, 3))
    const expectedOutput: TaskEntity = {id: 1, description: "Do anything",  iconColor: IconColor.Purple, iconId: IconId.Halter, startDate: date, hour: "20:01", frequencyType: FrenquencyType.Day, frequencyValue: 3};
    
    //act
    const output = new TaskMapper().toEntity(input);
    
    //assert
    expect(output).toEqual(expectedOutput)
})