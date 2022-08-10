"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardRepository = void 0;
const common_1 = require("@nestjs/common");
const user_entity_1 = require("../auth/user.entity");
const typeorm_1 = require("typeorm");
const board_status_enum_1 = require("./board-status-enum");
const board_entity_1 = require("./board.entity");
let BoardRepository = class BoardRepository extends typeorm_1.Repository {
    constructor() {
        super(...arguments);
        this.logger = new common_1.Logger('BoardsController');
    }
    async findOneById(id) {
        return await this.findOne(id);
    }
    async findAllBoards() {
        return await this.find();
    }
    async findBoardsByUserId(userId) {
        const query = this.createQueryBuilder('board');
        query.where('board.userId = :userId', { userId: userId });
        const boards = await query.getMany();
        return boards;
    }
    async createBoard(createBoardDto, user) {
        const { title, description } = createBoardDto;
        const board = await this.create({
            title: title,
            description: description,
            status: board_status_enum_1.BoardStatus.PUBLIC,
            user
        });
        await this.save(board);
        const boardId = board.id;
        const boardNew = await this.findOneById(boardId);
        return boardNew;
    }
    async deleteOneById(id, user) {
        const board = await this.findOneById(id);
        await this.delete({ id, user });
        return board;
    }
    async updateBoardStatusById(updateBoardStatusDto) {
        const { id, status } = updateBoardStatusDto;
        const board = await this.findOneById(id);
        board.status = status;
        await this.save(board);
        return board;
    }
};
BoardRepository = __decorate([
    typeorm_1.EntityRepository(board_entity_1.Board)
], BoardRepository);
exports.BoardRepository = BoardRepository;
//# sourceMappingURL=board.repository.js.map