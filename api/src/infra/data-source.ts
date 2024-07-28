import "reflect-metadata"
import { DataSource } from "typeorm"
import { Task } from "./entities/taskEntity"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "flavio",
    password: "123",
    database: "db_habit_tracker",
    synchronize: true,
    logging: false,
    entities: [Task],
    migrations: [],
    subscribers: [],
})
