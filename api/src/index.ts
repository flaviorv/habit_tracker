import { AppDataSource } from "./infra/data-source"
import { Task } from "./infra/entities/taskEntity"

AppDataSource.initialize().then(async () => {

    console.log("Inserting a new user into the database...")
    const task1 = new Task("Run");
    const task2 = new Task("Sleep");


    await AppDataSource.manager.save(task1)
    console.log("Saved a new user with id: " + task1.id)

    await AppDataSource.manager.save(task2)
    console.log("Saved a new user with id: " + task2.id)

    console.log("Loading tasks from the database...")
    const tasks = await AppDataSource.manager.find(Task)
    console.log("Loaded users: ", tasks)

    console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))
