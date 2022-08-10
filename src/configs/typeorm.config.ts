import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import * as config from 'config';

// const dbConfig = config.get('db');

export const typeORMConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: 'miami0306!',
    database: 'board_app',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true,
}
