import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

const host = process.env.POSTGRES_HOST

export const typeormConfig: PostgresConnectionOptions = {
    type: 'postgres',
    host: host ?? 'localhost',
    port: 5432,
    database: 'main',
    username: 'osman',
    password: '123',
    entities: ["**/*.entity{.ts,.js}"],
    synchronize: true,
    logging: true,
    
}