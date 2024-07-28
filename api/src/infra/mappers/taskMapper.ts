import { Frequency } from "../../domain/entities/frequency";
import { Icon } from "../../domain/entities/icon";
import { Task } from "../../domain/entities/task";
import { TaskEntity } from "../entities/taskEntity";

export class TaskMapper {
    
    // public toDomain(taskEntity: TaskEntity): Task{
    //     const icon: Icon = { 
    //         id: taskEntity.iconId,
    //         color: taskEntity.iconColor
    //     }
    //     const frequency = new Frequency(taskEntity.frequencyType, taskEntity.frequencyValue)

    //     const hour = 

    //     return new Task(taskEntity.id, taskEntity.description, icon, taskEntity.startDate, taskEntity.hour,  frequency )
    // }

    public toEntity(task: Task): TaskEntity{

        return {
            id: task.getId(),
            description: task.getDescription(),
            iconId: task.getIcon().id,
            iconColor: task.getIcon().color,
            hour: task.getHour().toString(),
            startDate: task.getStartDate(),
            frequencyType: task.getFrequency().getType(),
            frequencyValue: task.getFrequency().getValue()
        }
    }
}