"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeORMConfig = void 0;
exports.typeORMConfig = {
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: 'miami0306!',
    database: 'board_app',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true,
};
//# sourceMappingURL=typeorm.config.js.map