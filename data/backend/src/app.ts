import * as express from 'express';
import { Express } from 'express';
import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { routes } from './routes/form.routes';
import { typeormConfig } from './typeorm.config';
import * as cors from 'cors';

export const MyAppDataSource = new DataSource(typeormConfig);
const port: number =  3003;


export class App {
    private app: Express = express();

    constructor() {
        this.app.use(cors())
        this.app.use(express.urlencoded({ extended: false }))
        this.app.use(express.json())
        this.app.use(routes)

    }


    public async start(): Promise<void> {
        await MyAppDataSource.initialize();
        this.app.listen(port, () => {
            console.log(`Application has ben started in port: ${port}`)
        })
    }

}


